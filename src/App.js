import React from "react";
import { Main } from "./fronted/components/main/Main";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import CardList from "./fronted/components/page/CardList";

function App() {
  return (
    <>
      <Main />
      <CardList />
    </>
  );
}

export default App;
