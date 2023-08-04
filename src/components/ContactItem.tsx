import React from "react";
import { Contact } from "../contacts";
import { NavLink } from "react-router-dom";

interface ContactItemProps {
  contact: Contact;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  return (
    <>
      <NavLink
        to={`/${contact.id}`}
        className={({ isActive, isPending }) =>
          isActive ? "bg-primary text-white" : isPending ? "text-muted" : "text-dark"
        }
        style={{ textDecoration: "none", display: "block" }}
      >
        <div className="d-flex justify-content-between px-3 py-2">
          <span>{contact.username}</span>
          {contact.isFavorite && <span>★</span>}
        </div>
      </NavLink>
    </>
  );
};

export default ContactItem;
