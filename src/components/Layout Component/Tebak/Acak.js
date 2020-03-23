import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import Kalkulasi from "./kalkulasi";

const Acak = () => {
  const { random, setAngka, angka } = useContext(DataContext);

  const acakAngka = () => {
    if (random.length > 1) {
      let acakEuy = Math.floor(Math.random() * random.length);
      setAngka(acakEuy);
    } else {
      alert("nilai harus lebih dari 1");
    }
  };

  return (
    <div>
      <Kalkulasi send={acakAngka} acak={random} angka={angka} />
    </div>
  );
};

export default Acak;
