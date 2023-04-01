import React, { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material";

import axios from "axios";
import { baseURL } from "../utils/constans";
import { useNavigate } from "react-router-dom";
function create(props) {
  const [judulBuku, setJudulBuku] = useState("");
  const [description, setDeskripsi] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const createResult = { judulBuku, description, pengarang };

    try {
      const response = await axios.post(baseURL, createResult, {
        headers: { "content-type": "application/json" },
      });
      console.log("Successfully created");

      navigate("/");
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Contact Form</h1>
      <FormGroup
        sx={{
          margin: "auto",
          width: "50%",
          padding: "20px",
          border: "1px solid #fff",
          paddingTop: "20px",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
          gap: "20px",
        }}
      >
        <FormControl>
          <InputLabel sx={{ color: "#fff" }}>judulBuku</InputLabel>
          <Input
            onChange={(e) => setJudulBuku(e.target.value)}
            sx={{ color: "#fff" }}
            onMouseDown={(e) => setValidation(true)}
          />
          {judulBuku.length == 0 && validation && (
            <span style={{ color: "#C62828", fontSize: ".9em" }}>
              Judul Buku Required
            </span>
          )}
        </FormControl>
        <FormControl>
          <InputLabel sx={{ color: "#fff" }}>Deskripsi Buku</InputLabel>
          <Input
            onChange={(e) => setDeskripsi(e.target.value)}
            sx={{ color: "#fff" }}
            required
            onMouseDown={(e) => setValidation(true)}
          />{" "}
          {description.length == 0 && validation && (
            <span style={{ color: "#C62828", fontSize: ".9em" }}>
              Deskripsi Required
            </span>
          )}
        </FormControl>
        <FormControl>
          <InputLabel sx={{ color: "#fff" }}>Pengarang</InputLabel>
          <Input
            onChange={(e) => setPengarang(e.target.value)}
            sx={{ color: "#fff" }}
            required
            onMouseDown={(e) => setValidation(true)}
          />
          {pengarang.length == 0 && validation && (
            <span style={{ color: "#C62828", fontSize: ".9em" }}>
              Pengarang Required
            </span>
          )}
        </FormControl>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Buat
        </Button>
        <Button variant="contained" color="error" href="/">
          Back
        </Button>
        {}
      </FormGroup>
    </div>
  );
}

export default create;
