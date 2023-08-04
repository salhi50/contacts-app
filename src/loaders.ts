import { LoaderFunction } from "react-router-dom";
import { getContacts } from "./contacts";

export const contactsListLoader: LoaderFunction = async () => {
  return getContacts();
};
