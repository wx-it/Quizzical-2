import {useState, useEffect} from "react";
import { Route, Routes, Link } from "react-router";
import { nanoid } from "nanoid";
import StartPage from "./components/StartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage/>} />
      </Routes>
    </>
  );
}

export default App;
