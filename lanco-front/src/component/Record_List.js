import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {getRegister, eliminar} from "../services/RegisterServices"
import { RegisterModel } from "../models/register";
import { getProductos } from "../services/ProductService";
import { getCLient } from "../services/ClientService";
import { getEmpleado } from "../services/EmpleadoService";
import DataTableMUI from "./table";

export function Record_List() {

    const [record, setRecord] = useState([RegisterModel]);
    const [product, setProduct] = useState([]);
    const [client, setClient] = useState([]);
    const [empleado, setEmpleado] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getRegister().then((product) => {
          const newColumns = product.map((item) => {
            const { id_registro: id, ...rest } = item;
            return { id, ...rest };
          });
    
          console.log(newColumns);
          setRows(newColumns);
        });
      }, []);

    const showRow = (event, row) => {
        console.log(`Show ${JSON.stringify(row)}`);
      };
    
      const editRow = (row) => {
        console.log("editando ", row);
        //llamar editar
      };
    
      const addNew = () => {
        console.log("anadiendo ");
      //  navigate("/productForm");
      };
    
      const deleteRow = (row) => {
     //   console.log(deletePr(row));
      };
    
      const columns = [
        { field: "id_registro", headerName: "ID", width: 40 },
        {
          field: "fecha_compra",
          headerName: "fecha de compra",
          type: "text",
          width: 90,
        },
        { field: "id_cliente", headerName: "Nombre cliente", width: 130 },
        { field: "id_empleado", headerName: "Nombre empleado", width: 130 },
        { field: "color_producto", headerName: "color_producto", width: 90 },
        { field: "base", headerName: "base", width: 90 },
        { field: "acabado", headerName: "acabado", width: 90 },
        { field: "formula_color", headerName: "formula_color", type: "number", width: 90 },
        { field: "tamano_envase", headerName: "tamano_envase",
          type: "number",
          width: 90,
        },
      ];

{record.map((pp)=>
    
    console.log(pp.	id_cliente)
    )};

   for (var rec of record) { 

       for (var prod of product) { 
        if (rec.id_producto === prod.id_producto) { 
        rec.color_producto=prod.color_pintura
       }
      }
    }

    for (var rec of record) { 

        for (var cl of client) { 
         if (rec.id_cliente === cl.id_cliente) { 
         rec.nombre_Cliente=cl.nombre
         console.log(cl.nombre)
        }
       }
     }

     for (var rec of record) { 

        for (var em of empleado) { 
         if (rec.id_empleado === em.id_empleado) { 
         rec.nombre_empleado=em.nombre
        }
       }
     }

     function deleteRegister(id){
        console.log("HOLAAAAAA"+id)
        eliminar(id)


     }

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
