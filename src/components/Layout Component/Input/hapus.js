import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { Tombol } from "../../Child Component/tombol";
import { gaya } from "../../style/style";

export const Hapus = () => {
  const { hapusAll, random } = useContext(DataContext);

  return (
    <Tombol
      type={"button"}
      judul={`Hapus Semua`}
      style={gaya.crimson}
      color={gaya.white}
      click={hapusAll}
      disabled={random < 1 ? true : false}
    />
  );
};
