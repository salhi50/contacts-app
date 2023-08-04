import { ActionFunction, redirect } from "react-router-dom";
import { createNewContact, getContacts, updateContacts } from "./contacts";

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
