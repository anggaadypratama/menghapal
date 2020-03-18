import React from "react";
import { Kuis } from "./Kuis";

const Kalkulasi = ({ acak, angka }) => {
  console.log(acak);
  let cabang = angka == null ? 0 : angka;
  let nilai = acak[cabang];
  console.log(nilai);
  console.log(angka);
  return <Kuis pertanyaan={nilai.textSatu} jawabanSatu={nilai.textDua} />;
};

export default Kalkulasi;
