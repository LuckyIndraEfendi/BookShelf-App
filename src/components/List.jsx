import React, { useState, useEffect } from "react";
import "./App.css";
import { baseURL } from "../utils/constans";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
const List = ({
  cardId,
  gambarBuku,
  judulBuku,
  pengarangBuku,
  descripsiBuku,
  updateMode,
}) => {
  const handleRemove = async (cardId) => {
    if (window.confirm(`Kamu Yakin Mau menghapus ${judulBuku}`)) {
      try {
        const response = await axios.delete(`${baseURL}/${cardId}`);
        console.log("Successfully Delete");
        window.location.reload();
      } catch (error) {
        console.log("Error: " + error);
      }
    }
  };

  return (
    <>
      <div className="items">
        <div className="title">
          <h1>{judulBuku}</h1>
          <h5 style={{ margin: "0", fontWeight: "500", fontSize: ".95em" }}>
            Pengarang : {pengarangBuku}
          </h5>
          <p>{descripsiBuku}</p>
        </div>

        <div className="btnGrups">
          {" "}
          <Button
            variant="contained"
            onClick={() => {
              handleRemove(cardId);
            }}
          >
            Hapus
          </Button>
          <Button href={`/edit/${cardId}`} variant="contained" color="warning">
            Edit
          </Button>
          <Button
            href={`/details/${cardId}`}
            variant="contained"
            color="success"
          >
            View
          </Button>
        </div>
      </div>
    </>
  );
};

export default List;
