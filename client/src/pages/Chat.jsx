import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment, Typography } from "@mui/material";
import send from "../assets/chat/send.svg";

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    prompt === ""
      ? setResponse("Please enter a question")
      : axios
          .post(`${HTTP}`, { prompt })
          .then((res) => {
            setResponse(res.data);
            console.log(prompt);
          })
          .catch((error) => {
            console.log(error);
          });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div
      id="chat"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        marginTop: "10px",
      }}
    >
      <h1
        className="title text-center text-darkGreen"
        style={{ marginTop: "15px" }}
      >
        Personal Assistant
      </h1>
      <form
        className="form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "500px",
          width: "300px",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <TextField
          label="Ask me a question"
          value={prompt}
          onChange={handlePrompt}
          sx={{}}
          fullWidth
          InputProps={{
            endAdornment: (
              <img
                width="28px"
                src={send}
                style={{ cursor: "pointer" }}
                onClick={handleSubmit}
                alt="send"
              />
            ),
          }}
        />

        <Button sx={{ mt: "10px" }} variant="contained" type="submit">
          Go
        </Button>
      </form>
      <Typography variant="h5" color="initial">
        {response ? response : "Ask me anything..."}
      </Typography>
    </div>
  );
}
