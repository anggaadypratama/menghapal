import React, { useState, useContext } from "react";
import { DataContext } from "../../Context/DataContext";

import { InputLess } from "../../Child Component/input";
import { Tombol } from "../../Child Component/tombol";
import { gaya } from "../../style/style";

export const Jawab = ({ satu }) => {
  const [jawab, setJawab] = useState("");
  const { setAcak } = useContext(DataContext);

  const submit = e => {
    e.preventDefault();
    let jawaban = jawab === satu ? "benar" : "salah";
    alert(jawaban);
    let disabled = jawaban === "benar" ? false : true;
    setAcak(disabled);
  };

  return (
    <form onSubmit={submit}>
      <InputLess setText={setJawab} judul={`Jawab`} />
      <Tombol
        style={gaya.darklate}
        margin={"mt-4"}
        color={gaya.white}
        judul={`Jawab`}
      />

      {/* <AcakAngka /> */}
    </form>
  );
};
