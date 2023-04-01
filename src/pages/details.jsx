import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/constans";
import { Button } from "@mui/material";
import axios from "axios";
import "./App.css";
function details(props) {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  useEffect(() => {
    async function Details() {
      try {
        const response = await axios.get(`${baseURL}/${id}`);
        setDetails(response.data);
      } catch (error) {
        console.log("Error: " + error);
      }
    }

    Details();
  }, []);
  return (
    <>
      <div className="container">
        <div className="details">
          <h1>{details.judulBuku}</h1>
          <div className="grup">
            <p>{details.pengarang}</p>
            {/* <p>Post January-26-2023</p> */}
          </div>
          <p> {details.description}</p>
        </div>
        <Button
          variant="contained"
          color="error"
          sx={{ marginTop: "10px" }}
          href="/"
        >
          Go Back
        </Button>
      </div>
    </>
  );
}

export default details;
