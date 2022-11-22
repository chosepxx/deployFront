import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Record_List } from "./component/Record_List";
import DataTableMUI from "./component/table";
import { ProductList } from "./component/ProductList";
import { Index } from "./component/ExamenShes/Index";
import { ListComposite } from "./component/ExamenShes/ListComposite";
import ProductForm from "./component/ProductForm";
import FormPropsTextFields from "./component/RegisterForm";
import NavBar from "./component/navbar";
import Form from "./component/ExamenShes/Form";
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
        <Route path="/actualizar" element={<FormPropsTextFields />} />
        <Route path="/sheExamen" element={<Form />} />
        <Route path="/indexExamCompo" element={<Index />} />
        <Route path="/composite" element={<ListComposite />} />
   

      </Routes>
    </Router>
  );
}
export default GetRoutes;
