import React, { Suspense } from "react";
import { Main } from "./fronted/components/main/Main";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardList from "./fronted/components/page/CardList";
import Categories from "./fronted/components/page/Categories";
import Detail from "./fronted/components/page/Detail";
function App() {
  return (
    <>
      <Router>
        <Suspense fallback="loDING">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<CardList />} />
            <Route path="/" element={<Categories />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
