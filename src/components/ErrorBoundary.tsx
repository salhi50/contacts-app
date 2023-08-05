import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Button from "./Button";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError() as { status: number; statusText: string };

  return (
    <>
      <div
        className="mx-auto my-4 vstack gap-2"
        style={{ maxWidth: 700 }}
      >
        <h2 className="text-muted">{error.status}</h2>
        <p>Something went wrong ({error.statusText})</p>
        <Link to="/">
          <Button title="Go home" />
        </Link>
      </div>
    </>
  );
};

export default ErrorBoundary;
