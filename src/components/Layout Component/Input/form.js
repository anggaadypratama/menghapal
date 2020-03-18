import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { InputLess as Input } from "../../Child Component/input";
import "../../style/random.scss";
import { gaya } from "../../style/style";
import { Tombol } from "../../Child Component/tombol";
import { Download } from "./download";
import { Upload } from "./upload";

const Form = () => {
  const { random, setTextSatu, setTextDua, submit } = useContext(DataContext);

  let jumlah = `ada ${random.length} data`;

  return (
    <div>
      <form onSubmit={submit}>
        <h1>
          <div
            style={{ color: gaya.darklate }}
            className="mt-5 d-flex justify-content-center"
          >
            {jumlah.toLocaleUpperCase()}
          </div>
        </h1>
        <div className="mt-5">
          <Input setText={setTextSatu} judul={`Pertanyaan`} />
          <Input setText={setTextDua} judul={`Jawaban`} />
        </div>
        <br />
        <Tombol style={gaya.aquamarine} />
        <div className="row mt-3">
          <div className="col-6">
            <Upload />
          </div>
          <div className="col-6">
            <Download />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
