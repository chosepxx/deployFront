import React, { useState, useEffect } from "react";
import DataTableMUI from "./table";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { getProductos, deleteProduct } from "../services/ProductService";
import { useNavigate } from "react-router-dom";

export function ProductList() {
  const [rows, setRows] = useState([]);
  const [update, setUpdate] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProductos().then((product) => {
      const newColumns = product.map((item) => {
        const { id_producto: id, ...rest } = item;
        return { id, ...rest };
      });

      setProducts(newColumns);
      console.log(newColumns);
      setRows(newColumns);
    });
  }, []);

  const showRow = (event, row) => {
    console.log(`Show ${JSON.stringify(row)}`);
  };

  const editRow = (row) => {
    console.log("editando ", row);

    navigate("/productEdit", {
      state: {
        id: row.id,
      },
    });
  };

  const addNew = () => {
    console.log("anadiendo ");
    navigate("/productForm");
  };

  const deleteRow = (row) => {
    console.log(deleteProduct(row));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "descripcion",
      headerName: "Descripcion",
      type: "text",
      width: 90,
    },
    { field: "base_pintura", headerName: "base_pintura", width: 130 },
    { field: "area_aplicacion", headerName: "area_aplicacion", width: 130 },
    { field: "color_pintura", headerName: "color_pintura", width: 90 },
    { field: "fecha_caducidad", headerName: "fecha_caducidad", width: 90 },
    { field: "marca", headerName: "marca", width: 90 },
    { field: "precio", headerName: "Precio", type: "number", width: 90 },
    {
      field: "cantidad_stock",
      headerName: "cantidad_stock",
      type: "number",
      width: 90,
    },
  ];

  return (
    <div>
      <h1>Listado de Productos</h1>
      {rows.length > 0 ? (
        <DataTableMUI
          rows={rows}
          columns={columns}
          deleteRow={deleteRow}
          editRow={editRow}
          showRow={showRow}
          addNew={addNew}
        ></DataTableMUI>
      ) : null}
    </div>
  );
}
