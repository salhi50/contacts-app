import React from "react";
import { Contact } from "../contacts";
import ContactItem from "./ContactItem";

interface ContactListProps {
  list: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ list }) => {
  return list.length === 0 ? (
    <p className="text-muted px-3">
      <i>No contacts added yet</i>
    </p>
  ) : (
    <ul className="list-unstyled">
      {list.map((contact) => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
