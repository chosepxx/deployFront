import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Record_List } from "./component/Record_List";
import DataTableMUI from "./component/table";
import { ProductList } from "./component/ProductList";
function GetRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Record_List />} />
        <Route path="/tabla" element={<DataTableMUI />} />
        <Route path="/productos" element={<ProductList />} />
      </Routes>
    </Router>
  );
}
export default GetRoutes;
