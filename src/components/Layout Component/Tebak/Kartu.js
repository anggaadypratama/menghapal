import React from "react";
import { gaya } from "../../style/style";

export const Kartu = ({ pertama }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <h1 style={{ color: gaya.darklate }}>
        {pertama}
      </h1>
    </div>
  );
};
