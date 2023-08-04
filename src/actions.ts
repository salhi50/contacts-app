import { ActionFunction, redirect } from "react-router-dom";
import { createNewContact } from "./contacts";

export const addContactAction: ActionFunction = async () => {
  const newContact = createNewContact();
  return redirect(`/contacts/${newContact.id}`);
};
