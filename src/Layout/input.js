import React from "react";
import Form from "../components/Layout Component/Input/form";
import { Tabel } from "../components/Layout Component/Input/table";

export const Input = () => {
  return (
    <div className="container margin-bottom">
      <div className="row">
        <div className="col-lg-4 col-sm-12 offset-lg-1">
          <Form />
        </div>
        <div className="col-lg-6 col-sm-12 offset-lg-1">
          <Tabel />
        </div>
      </div>
    </div>
  );
};
