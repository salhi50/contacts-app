import React from "react";

interface NoSelectedContactProps {}

const NoSelectedContact: React.FC<NoSelectedContactProps> = ({}) => {
  return (
    <>
      <h2 className="text-muted">No contact to display</h2>
      <p>Select or add a contact to show its info</p>
    </>
  );
};

export default NoSelectedContact;
