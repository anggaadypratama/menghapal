import React, { createContext, useState } from "react";

export const DataContext = createContext();
const Data = DataContext.Provider;

export const DataContextProvider = props => {
  let [random, setRandom] = useState([]);
  let [textSatu, setTextSatu] = useState("");
  let [textDua, setTextDua] = useState("");
  let [angka, setAngka] = useState(null);
  let [acak, setAcak] = useState(true);
  const [searchResults, setSearchResults] = useState({});

  const submit = e => {
    e.preventDefault();
    let euy = Math.floor(Math.random() * 100 + 1);
    setRandom([
      ...random,
      {
        id: euy,
        textSatu: textSatu,
        textDua: textDua
      }
    ]);
  };

  const hapusData = id => {
    setRandom(random.filter(obj => obj.id !== id));
  };

  const hapusAll = () => {
    setRandom(random.splice(0, random.length - random.length));
  };

  return (
    <Data
      value={{
        setRandom,
        textSatu,
        setTextSatu,
        textDua,
        setTextDua,
        angka,
        setAngka,
        submit,
        hapusData,
        acak,
        setAcak,
        random,
        hapusAll,
        searchResults,
        setSearchResults
      }}
    >
      {props.children}
    </Data>
  );
};
