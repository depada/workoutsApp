import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Box } from "@mui/material";
import { Home, ExerciseDetail, Chat } from "./pages";

import "./App.css";

const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
