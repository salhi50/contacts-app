import React from "react";
import { useLoaderData, Form } from "react-router-dom";
import Button from "../components/Button";
import { Contact } from "../contacts";

const ContactInfo: React.FC = () => {
  const contact = useLoaderData() as Contact;
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <strong>Username</strong>
          <span className="text-muted">{contact.username}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <strong>Email</strong>
          <span className="text-muted">{contact.email}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <strong>Id</strong>
          <span className="text-muted">{contact.id}</span>
        </li>
      </ul>
      <div className="hstack mt-3 gap-2">
        <Button title="Edit" />
        <Button title="Delete" />
        <Form
          method="PUT"
          action={`/${contact.id}/toggleFavorite`}
        >
          <Button title={contact.isFavorite ? "★" : "☆"} />
        </Form>
      </div>
    </>
  );
};

export default ContactInfo;
