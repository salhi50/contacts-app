import React from "react";
import { Form, Outlet, useLoaderData, useSubmit } from "react-router-dom";
import Button from "../components/Button";
import ContactList from "../components/ContactList";
import { Contact } from "../contacts";

export const Search: React.FC<{ query: string | null }> = ({ query }) => {
  const submit = useSubmit();
  const ref = React.useRef<HTMLInputElement | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    submit(e.target.form, {
      replace: true,
    });
  };

  React.useEffect(() => {
    if (query === null && ref.current) ref.current.value = "";
  }, [query]);

  return (
    <Form method="GET">
      <input
        type="search"
        placeholder="Search..."
        className="form-control"
        name="search"
        onChange={handleChange}
        defaultValue={query || ""}
        ref={ref}
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
  const loader = useLoaderData() as { contacts: Contact[]; query: string };
  return (
    <>
      <div className="d-block d-md-flex flex-wrap">
        <aside
          style={{ minWidth: 280 }}
          className="bg-light vh-100 py-4 border-end shadow-sm"
        >
          <div className="hstack gap-2 mb-4 px-3">
            <Search query={loader.query} />
            <NewContactButton />
          </div>
          <ContactList list={loader.contacts} />
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
