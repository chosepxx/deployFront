import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {getRegister} from "../services/RegisterServices"
import { RegisterModel } from "../models/register";
import { getProductos } from "../services/ProductService";
import { getCLient } from "../services/ClientService";
import { getEmpleado } from "../services/EmpleadoService";

export function Record_List() {

    const [record, setRecord] = useState([RegisterModel]);
    const [product, setProduct] = useState([]);
    const [client, setClient] = useState([]);
    const [empleado, setEmpleado] = useState([]);

    useEffect(() => {
        getRegister().then((record) => {
            setRecord(record);
            console.log("maeeeee")
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
    }, []);

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

    return (
        <React.Fragment>
            <div className="container-fluid col-md-8 mt-5">
                <h1>HOLIIII</h1>
                <div className="card mt-1">
                    <div className="card-body">
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th>fecha_compra</th>
                                    <th>Cliente</th>
                                    <th>Empleado</th>
                                    <th>Producto</th>
                                    <th>base</th>
                                    <th>acabado</th>
                                    <th>Formula de color</th>
                                    <th>Tamano del envase</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.map((data) => (
                                    <tr>
                                        <td>{data.fecha_compra}</td>
                                        <td>{data.nombre_Cliente}</td>
                                        <td>{data.nombre_empleado}</td>
                                        <td>{data.color_producto}</td>
                                        <td>{data.base}</td>
                                        <td>{data.acabado}</td>
                                        <td>{data.formula_color}</td>
                                        <td>{data.tamano_envase}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
        </React.Fragment>
    );
}
