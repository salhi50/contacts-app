import { LoaderFunction, redirect } from "react-router-dom";
import { filterByUsername, getContacts } from "./contacts";

export const contactsListLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("search");
  return {
    contacts: query ? filterByUsername(query) : getContacts(),
    query,
  };
};

export const contactLoader: LoaderFunction = async ({ params }) => {
  const contactId = params.contactId;
  const contact = getContacts().find((c) => c.id === contactId);
  if (contact) return contact;
  return redirect("/");
};
