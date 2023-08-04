export interface Contact {
  username: string;
  email: string;
  isFavorite: boolean;
  id: string;
}
export const CONTACTS_LOCALSTORAGE_KEY = "contacts";

export function getContacts(): Contact[] {
  const loc = localStorage.getItem(CONTACTS_LOCALSTORAGE_KEY);
  return loc ? JSON.parse(loc) : [];
}

export const updateContacts = (newContacts: Contact[]) => {
  localStorage.setItem(CONTACTS_LOCALSTORAGE_KEY, JSON.stringify(newContacts));
};

export function createNewContact(): Contact {
  const newContact: Contact = {
    username: "New contact",
    email: "",
    isFavorite: false,
    id: new Date().getTime().toString(),
  };
  updateContacts(getContacts().concat(newContact));
  return newContact;
}
