import React from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Contact } from "../contacts";

const EditContact: React.FC = () => {
  const navigate = useNavigate();
  const contact = useLoaderData() as Contact;
  return (
    <>
      <Form
        method="PUT"
        action="save"
      >
        <div className="vstack gap-3">
          <input
            placeholder="Username"
            name="username"
            className="form-control"
            defaultValue={contact.username}
            autoFocus
          />
          <input
            placeholder="Email"
            name="email"
            className="form-control"
            defaultValue={contact.email}
          />
          <div className="hstack gap-2">
            <Button
              title="Cancel"
              type="button"
              onClick={() => navigate(-1)}
            />
            <Button
              title="Save"
              type="submit"
            />
          </div>
        </div>
      </Form>
    </>
  );
};

export default EditContact;
