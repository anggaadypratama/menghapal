import React, { useContext } from "react";

import { DataContext } from "../../Context/DataContext";
import "../../style/random.scss";
import { Hapus } from "./hapus";

const Data = props => {
  const { kunci, pernyataanSatu, pernyataanDua, hapusData } = props;

  return (
    <tr className="tabel" keys={kunci} onClick={() => hapusData(kunci)}>
      <td className="filterable-cell">
        {pernyataanSatu}
      </td>
      <td className="filterable-cell">
        {pernyataanDua}
      </td>
    </tr>
  );
};

const Mapping = () => {
  const { random, hapusData } = useContext(DataContext);

  let ngemap = random.map(obj => {
    return (
      <Data
        kunci={obj.id}
        pernyataanSatu={obj.textSatu}
        pernyataanDua={obj.textDua}
        hapusData={hapusData}
      />
    );
  });

  return ngemap;
};

export const Tabel = () => {
  const { random } = useContext(DataContext);
  return (
    <div>
      <table className="mt-5 table-fixed table table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col">Pertanyaan</th>
            <th scope="col">Jawaban</th>
          </tr>
        </thead>
        <tbody>
          <Mapping />
        </tbody>
      </table>
      {random.length < 1 ? "" : <Hapus />}
    </div>
  );
};
