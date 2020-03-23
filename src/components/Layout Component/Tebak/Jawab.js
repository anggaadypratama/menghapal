import React, { useState } from "react";
import Swal from "sweetalert2";

import { InputLess } from "../../Child Component/input";
import { Tombol } from "../../Child Component/tombol";
import { gaya } from "../../style/style";

export const Jawab = ({ satu, send }) => {
  const [jawab, setJawab] = useState("");
  const [Condition, setCondition] = useState(null);

  const submit = e => {
    e.preventDefault();
    let jawaban =
      jawab === satu
        ? send
        : Swal.fire({
            icon: "error",
            title: "Waduh Salah gan",
            text: "Coba cek atau ingat-ingat lagi!"
          });

    setCondition(jawaban);
  };

  return (
    <form onSubmit={submit}>
      <InputLess setText={setJawab} judul={`Jawab`} />
      <Tombol
        style={gaya.darklate}
        margin={"mt-4"}
        color={gaya.white}
        judul={`Jawab`}
        click={Condition}
      />

      {/* <AcakAngka /> */}
    </form>
  );
};
