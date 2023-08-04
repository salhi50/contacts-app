import { LoaderFunction, redirect } from "react-router-dom";
import { getContacts } from "./contacts";

export const contactsListLoader: LoaderFunction = async () => {
  return getContacts();
};

export const contactLoader: LoaderFunction = async ({ params }) => {
  const contactId = params.contactId;
  const contact = getContacts().find((c) => c.id.toString() === contactId);
  if (contact) return contact;
  return redirect("/");
};
