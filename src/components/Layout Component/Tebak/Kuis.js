import React from "react";
import { Kartu } from "./Kartu";
import { Jawab } from "./Jawab";
// import Acak from "./Acak";

export const Kuis = props => {
  const { pertanyaan, jawabanSatu, send } = props;
  let satu = jawabanSatu;

  return (
    <div>
      <Kartu pertama={pertanyaan} />
      <Jawab send={send} satu={satu} />
    </div>
  );
};

// const Validasi = props => {
//   const { satu, dua } = props;
//   let valid = satu === dua ? alert("benar") : alert("salah");
//   return valid;
// };
