import React from "react";
import { Form, Outlet, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import ContactList from "../components/ContactList";
import { Contact } from "../contacts";

export const Search: React.FC = () => {
  return (
    <Form>
      <input
        type="search"
        placeholder="Search..."
        className="form-control"
        name="search"
      />
    </Form>
  );
};

export const NewContactButton: React.FC = () => {
  return (
    <Form
      action="/"
      method="POST"
    >
      <Button
        title="New"
        type="submit"
        name="new"
      />
    </Form>
  );
};

const Root: React.FC = () => {
  const contacts = useLoaderData() as Contact[];
  return (
    <>
      <div className="d-block d-md-flex flex-wrap">
        <aside
          style={{ minWidth: 280 }}
          className="bg-light vh-100 py-4 border-end shadow-sm"
        >
          <div className="hstack gap-2 mb-4 px-3">
            <Search />
            <NewContactButton />
          </div>
          <ContactList list={contacts} />
        </aside>
        <div
          className="flex-grow-1 my-4 container"
          style={{ maxWidth: 700 }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Root;
