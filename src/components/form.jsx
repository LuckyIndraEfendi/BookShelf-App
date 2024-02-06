import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import List from "./List";

import { baseURL } from "../utils/constans";
import axios from "axios";

function form(props) {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState();
  const [search, setSearch] = useState([]);
  const [data, setData] = useState();

  const inputValue = useRef("");

  const handleSubmit = async (load) => {
    load.preventDefault();

    const Search = async () => {
      try {
        const response = await axios.get(`${baseURL}?q=${input}`);
        setSearch(response.data);
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    Search();
  };

  useEffect(() => {
    inputValue.current = input;
  }, [input]);

  useEffect(() => {
    async function Api() {
      const url = await axios.get(`${baseURL}`);
      const data = await url.data;
      setBooks(data);
    }
    Api();
  }, []);

  const Element = () => {
    return search.map((result, i) => (
      <List
        pengarangBuku={result.pengarang}
        judulBuku={
          result.judulBuku
            ? result.judulBuku.length > 10
              ? `${result.judulBuku.substring(0, 25)}.... `
              : ` ${result.judulBuku.substring(0, 25)}`
            : ""
        }
        gambarBuku={result.imagePath}
        descripsiBuku={
          result.description
            ? result.description.length > 250
              ? `${result.description.substring(0, 100)}...... `
              : `${result.description}`
            : ``
        }
        key={i}
        cardId={result.id}
      />
    ));
  };

  const Elements = () => {
    return (
      <>
        {books &&
          books.map((result, i) => (
            <List
              pengarangBuku={result.pengarang}
              judulBuku={
                result.judulBuku
                  ? result.judulBuku.length > 0
                    ? `${result.judulBuku.substring(0, 25)} `
                    : `${result.judulBuku.substring(0, 25)}.... `
                  : ""
              }
              gambarBuku={result.imagePath}
              descripsiBuku={
                result.description
                  ? result.description.length > 250
                    ? `${result.description.substring(0, 100)}......`
                    : `${result.description.substring(0, 100)} `
                  : ""
              }
              key={i}
              cardId={result.id}
            />
          ))}
      </>
    );
  };

  return (
    <>
      {/* <hideElement /> */}
      <div className="myForm">
        <div className="btnGroup">
          <a href="/create" className="tambah">
            Tambah Buku
          </a>
        </div>
        <form className="formStyled" onSubmit={handleSubmit}>
          <input
            type="Tambah Buku"
            value={input}
            placeholder="Cari Buku"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="tambah">Search</button>
        </form>

        <div className="menu">
          {input.length != 0 ? <Element /> : <Elements />}
        </div>
      </div>
    </>
  );
}

export default form;
// {search.map((result, i) => (
//   <List
//     pengarangBuku={result.pengarang}
//     judulBuku={
//       result.judulBuku
//         ? result.judulBuku.length > 10
//           ? `${result.judulBuku.substring(0, 25)} `
//           : `${result.judulBuku.substring(0, 25)}.... `
//         : ""
//     }
//     gambarBuku={result.imagePath}
//     descripsiBuku={
//       result.description
//         ? result.description.length > 250
//           ? `${result.description.substring(0, 100)}...... `
//           : ""
//         : ""
//     }
//     key={i}
//     cardId={result.id}
//   />
// ))}
