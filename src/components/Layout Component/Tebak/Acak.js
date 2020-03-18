import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import Kalkulasi from "./kalkulasi";
import { Tombol } from "../../Child Component/tombol";
import { gaya } from "../../style/style";

const Acak = () => {
  const { random, setAngka, angka, acak = true } = useContext(DataContext);

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
      <Kalkulasi acak={random} angka={angka} />
      <Tombol
        type={"button"}
        style={gaya.aquamarine}
        click={acakAngka}
        judul={`Acak`}
        disabled={acak}
        color={gaya.darklate}
        margin={"mt-2"}
      />
    </div>
  );
};

export default Acak;
