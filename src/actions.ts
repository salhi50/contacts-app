import { ActionFunction, redirect } from "react-router-dom";
import { Contact, createNewContact, getContacts, updateContacts } from "./contacts";

export const addContactAction: ActionFunction = async () => {
  const newContact = createNewContact();
  return redirect(`/${newContact.id}`);
};

export const toggleContactFavoriteAction: ActionFunction = async ({ params }) => {
  const contactId = params.contactId;
  const newContacts = getContacts().map((c) =>
    c.id === contactId ? { ...c, isFavorite: !c.isFavorite } : c,
  );
  updateContacts(newContacts);
  return redirect(`/${contactId}`);
};

export const deleteContactAction: ActionFunction = async ({ params }) => {
  const contactId = params.contactId;
  const newContacts = getContacts().filter((c) => c.id !== contactId);
  updateContacts(newContacts);
  return redirect("/");
};

export const saveContactInfoAction: ActionFunction = async ({ params, request }) => {
  const contactId = params.contactId;
  const { username, email } = Object.fromEntries(await request.formData()) as Pick<
    Contact,
    "username" | "email"
  >;
  const newContacts = getContacts().map((c) =>
    c.id === contactId ? { ...c, username, email } : c,
  );
  updateContacts(newContacts);
  return redirect(`/${contactId}`);
};
