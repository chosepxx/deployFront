import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Record_List } from "./component/Record_List";
import DataTableMUI from "./component/table";
import { ProductList } from "./component/ProductList";
import ProductForm from "./component/ProductForm";
import FormPropsTextFields from "./component/RegisterForm";

import NavBar from "./component/navbar";
function GetRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/registros" element={<Record_List />} />
        <Route path="/tabla" element={<DataTableMUI />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/productForm" element={<ProductForm />} />
        <Route path="/registerForm" element={<FormPropsTextFields />} />
        <Route path="actualizar/:id" element={<FormPropsTextFields />} />
      </Routes>
    </Router>
  );
}
export default GetRoutes;
