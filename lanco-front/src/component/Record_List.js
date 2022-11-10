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
    const navigate = useNavigate();

    useEffect(() => {
        getRegister().then((product) => {
          const newColumns = product.map((item) => {
            const { id_registro: id, ...rest } = item;
            return { id, ...rest };
          });

          getProductos().then((product) => {
            setProduct(product);
            console.log("ujale")
            
        });
        getEmpleado().then((client) => {
            setEmpleado(client);
            console.log("mmeme")
            
        });
        getCLient().then((client) => {
            setClient(client);
            console.log("mmeme")
            
        });

          setRows(newColumns);
        });
      }, []);

    const showRow = (event, row) => {
        console.log(`Show ${JSON.stringify(row)}`);
      };
    

      const editRow = (row) => {
        console.log("ushhhsusb")
        navigate("/actualizar", {
          state: {
            id: row.id,
          },
        });
      }
    
      const addNew = () => {
        console.log("anadiendo ");
    //    navigate("/registerForm");

        navigate("/registerForm", {
          state: {
            id: null,
          },
        });
        
      };
    
      const deleteRow = (row) => {
        eliminar(row);
      };

      for (var rec of rows) { 

        for (var prod of product) { 
         if (rec.id_producto === prod.id_producto) { 
         rec.nombre_producto=prod.color_pintura
        }
       }
     }
 
     for (var rec of rows) { 
 
         for (var cl of client) { 
          if (rec.id_cliente === cl.id_cliente) { 
          rec.nombre_cliente=cl.nombre
          console.log("HOLIIIIIIIIII"+rec.nombre_cliente)
         }
        }
      }
 
      for (var rec of rows) { 
 
         for (var em of empleado) { 
          if (rec.id_empleado === em.id_empleado) { 
          rec.nombre_empleado=em.nombre+" "+em.apellidos;
         }
        }
      }
 
 
    
      const columns = [
        { field: "id_registro", headerName: "ID", width: 40 },
        {
          field: "fecha_compra",
          headerName: "fecha de compra",
          type: "text",
          width: 90,
        },
        { field: "nombre_cliente", headerName: "Nombre cliente", width: 130 },
        { field: "nombre_empleado", headerName: "Nombre empleado", width: 130 },
        { field: "nombre_producto", headerName: "color_producto", width: 90 },
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
