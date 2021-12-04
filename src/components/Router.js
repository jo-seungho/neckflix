import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Tv from "../pages/Tv";
import Header from "./Header";

const Router = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/search" element={<Search />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/tv/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
