
import {  Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/home";
import DetailPage from "../pages/detailPage/details";

const RoutesApp= () => {
  return ( 
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/detalhes/:id" element={<DetailPage/>}></Route>
    </Routes>
  );
};

export default RoutesApp;