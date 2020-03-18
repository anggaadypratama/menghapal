import React, { useState, useContext } from "react";
import { DataContext } from "../../Context/DataContext";

export const Upload = () => {
  const { random, setRandom } = useContext(DataContext);
  const [fileName, setFileName] = useState("");

  const readFile = async e => {
    e.preventDefault();
    const file = e.target.files[0];
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = async e => {
      const json = e.target.result;
      const data = JSON.parse(json);
      setRandom(data);
    };
    reader.readAsText(file);
  };

  return (
    <div className="">
      <label htmlFor="files" className="btn upload btn-block">
        {!fileName || random.length < 1
          ? "Pilih file"
          : fileName.length < 12
            ? `${fileName}`
            : `${fileName.substring(0, 12)}...`}
      </label>
      <input
        type="file"
        accept=".json"
        title=""
        id="files"
        onChange={file => readFile(file)}
        style={{ visibility: "hidden" }}
      />
    </div>
  );
};
