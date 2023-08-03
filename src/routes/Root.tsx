import React from "react";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-wrap">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
