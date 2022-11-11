import React, { useState, useEffect } from "react";
import DataTableMUI from "./table";
import { getProductos, deleteProduct } from "../services/ProductService";
import { useNavigate } from "react-router-dom";

export function ProductList() {
  const [rows, setRows] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    getProductos().then((product) => {
      const newColumns = product.map((item) => {
        const { id_producto: id, ...rest } = item;
        return { id, ...rest };
      });

      console.log(newColumns);
      setRows(newColumns);
      setLoaded(true);
    });
  }, []);

  const showRow = (event, row) => {
    console.log(`Show ${JSON.stringify(row)}`);
  };

  const editRow = (row) => {
    console.log("editando ", row);

    navigate("/productForm", {
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
    { field: "base_pintura", headerName: "Base", width: 130 },
    { field: "area_aplicacion", headerName: "Area Aplic", width: 130 },
    { field: "color_pintura", headerName: "Color", width: 90 },
    { field: "fecha_caducidad", headerName: "Caduca", width: 90 },
    { field: "marca", headerName: "Marca", width: 90 },
    { field: "precio", headerName: "Precio", type: "number", width: 90 },
    {
      field: "cantidad_stock",
      headerName: "Stock",
      type: "number",
      width: 90,
    },
  ];

  return (
    <div>
      <h1>Listado de Productos</h1>

      {loaded ? (
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
