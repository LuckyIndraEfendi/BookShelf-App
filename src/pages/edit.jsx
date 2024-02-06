import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import axios from "axios";
import swal from "sweetalert";
import { baseURL } from "../utils/constans";
function edit(props) {
  const [judulBuku, setJudulBuku] = useState("");
  const [description, setDeskripsi] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    async function Edit() {
      try {
        const response = await axios.get(`${baseURL}/${id}`);
        setJudulBuku(response.data.judulBuku);
        setDeskripsi(response.data.description);
        setPengarang(response.data.pengarang);
      } catch (error) {
        console.log("Error: " + error);
      }
    }

    Edit();
  }, []);

  const handleSubmit = async () => {
    const createResult = { judulBuku, description, pengarang };

    try {
      const response = await axios.put(`${baseURL}/${id}`, createResult, {
        headers: { "content-type": "application/json" },
      });
      swal("Good job!", "Data berhasil di Edit", "success");

      navigate("/");
    } catch (error) {
      console.log("Error: " + error);
      swal("Failed!", "Data Tidak berhasil di Edit", "failed");
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Edit Contact Form</h1>
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
            value={`${judulBuku}`}
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
            value={`${description}`}
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
            value={`${pengarang}`}
          />
          {pengarang.length == 0 && validation && (
            <span style={{ color: "#C62828", fontSize: ".9em" }}>
              Pengarang Required
            </span>
          )}
        </FormControl>
        {/* <FormControl>
        <InputLabel sx={{ color: "#fff" }}>Poster Gambar</InputLabel>
        <Input />
      </FormControl> */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update
        </Button>
        <Button variant="contained" color="error" href="/">
          Back
        </Button>
      </FormGroup>
    </div>
  );
}

export default edit;
