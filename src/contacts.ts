export interface Contact {
  username: string;
  email: string;
  isFavorite: boolean;
  id: number | string;
}
export const CONTACTS_LOCALSTORAGE_KEY = "contacts";

export function createNewContact(): Contact {
  const loc = localStorage.getItem(CONTACTS_LOCALSTORAGE_KEY);
  const newContact: Contact = {
    username: "New contact",
    email: "",
    isFavorite: false,
    id: new Date().getTime(),
  };
  const contacts: Contact[] = (loc ? JSON.parse(loc) : []).concat(newContact);
  localStorage.setItem(CONTACTS_LOCALSTORAGE_KEY, JSON.stringify(contacts));
  return newContact;
}

export function getContacts(): Contact[] {
  const loc = localStorage.getItem(CONTACTS_LOCALSTORAGE_KEY);
  return loc ? JSON.parse(loc) : [];
}
