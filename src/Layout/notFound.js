import React from "react";
import { gaya } from "../../src/components/style/style";

export const NotFound = () => {
  return (
    <div className="container d-flex mt-5 justify-content-center">
      <h1
        className="text-center "
        style={{
          color: gaya.darklate,
          fontFamily: "arial"
        }}
      >
        404 <br />
        NOT FOUND
      </h1>
    </div>
  );
};
