import React, { useState, useEffect } from "react";
import "./App.css";
import { baseURL } from "../utils/constans";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import swal from "sweetalert";
const List = ({
  cardId,
  gambarBuku,
  judulBuku,
  pengarangBuku,
  descripsiBuku,
  updateMode,
}) => {
  const handleRemove = async (cardId) => {
    const willDelete = await swal({
      title: `Kamu Yakin Mau Hapus ${judulBuku}`,
      text: "Setelah dihapus, Anda tidak akan dapat memulihkan buku ini",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (willDelete) {
      try {
        const response = await axios.delete(`${baseURL}/${cardId}`);
        swal(`Buku ${judulBuku} Berhasil di Hapus`, {
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } catch (error) {
        console.log("Error: " + error);
      }
    } else {
      swal("Data Buku Tidak di Hapus");
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
