import React, { useState, useEffect } from "react";
import DataTableMUI from "./table";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { getProductos, deleteProduct } from "../services/ProductService";
export function ProductList() {
  const [rows, setRows] = useState([]);
  const [update, setUpdate] = useState([]);
  const [products, setProducts] = useState([]);

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

  const editRow = (event, row) => {
    console.log(`Edit ${JSON.stringify(row)}`);
  };

  const deleteRow = (event, row) => {
    console.log(`Delete ${row.id}`);
    console.log(deleteProduct(row.id));
    setRows((prevRows) => {
      return prevRows.filter((element) => element.id !== row.id);
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "descripcion",
      headerName: "descripcion",
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
    {
      field: "Show",
      type: "actions",
      width: 100,
      renderCell: (params) => (
        <div>
          <IconButton
            color="primary"
            component="label"
            onClick={(event) => {
              showRow(event, params.row);
            }}
          >
            <FactCheckIcon />
          </IconButton>
          <IconButton
            color="primary"
            component="label"
            onClick={(event) => {
              editRow(event, params.row);
            }}
          >
            <FileCopyIcon />
          </IconButton>
          <IconButton
            color="primary"
            component="label"
            onClick={(event) => {
              deleteRow(event, params.row);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const refreshData = () => {
    return <DataTableMUI rows={rows} columns={columns}></DataTableMUI>;
  };
  return (
    <div>
      {rows.length > 0 ? (
        <DataTableMUI rows={rows} columns={columns}></DataTableMUI>
      ) : null}
    </div>
  );
}
