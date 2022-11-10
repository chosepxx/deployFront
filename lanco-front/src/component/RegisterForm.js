import React, { useState, useEffect } from "react";
import { getProductos } from "../services/ProductService";
import { getCLient } from "../services/ClientService";
import { getEmpleado } from "../services/EmpleadoService";
import { RegisterModel } from "../models/register";
import { actualizar, buscar_id } from "../services/RegisterServices";
import { agregar } from "../services/RegisterServices";
import Select from "react-select";
import moment from "moment";
import { useParams, useLocation } from "react-router-dom";

function RegisterForm() {
  const [record, setRecord] = useState([RegisterModel]);
  const [recordAdd, setRecordAdd] = useState(RegisterModel);
  const [product, setProduct] = useState([]);
  const [client, setClient] = useState([]);
  const [empleado, setEmpleado] = useState([]);
  const { state } = useLocation();
  const { id } = state; // Read values passed on state
 

  useEffect(() => {
    getProductos().then((product) => {
      setProduct(product);
    });

    getEmpleado().then((client) => {
      setEmpleado(client);
    });
    getCLient().then((client) => {
      setClient(client);
    });
    if (id) {
      console.log("mae si")
      buscar_id(id).then((record) => {
        setRecord(record);
      });
       setRecordAdd(record[0])
    }

  }, []);

 
  const empleadoC = () => {
    return empleado.map((data) => ({
      value: data.id_empleado,
      label: data.nombre + " " + data.apellidos,
    }));
  };

  const clientC = () => {
    return client.map((data) => ({
      value: data.id_cliente,
      label: data.nombre + " " + data.apellidos,
    }));
  };

  const productoC = () => {
    return product.map((data) => ({
      value: data.id_producto,
      label: data.color_pintura,
    }));
  };


  const handleChangeSelect = (event, name) => {
    const value = event.value;
    console.log(value);
    setRecordAdd({...recordAdd, [name]: value });
    
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setRecordAdd({...recordAdd, [name]: value });
  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(id){
      actualizar(recordAdd);
    }
    else{

      recordAdd.fecha_compra=moment().format("YY-MM-DD");
      agregar(recordAdd);

    }
 
  };
  

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="mt-5 card col-md-4 mx-auto">
          <div className="card-body">
            <h5 className="card-title">Registro de pintura preparada</h5>
            <br></br>
            <form onSubmit={handleSubmit} >
           
                <div className="form-group">
                  <label htmlFor="">Nombre del empleado</label>
                  <Select
                    options={empleadoC()}
                    onChange={(event) => handleChangeSelect(event, "id_empleado")}
                    defaultValue={recordAdd.id_empleado}
                 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Nombre del cliente</label>
                  <Select
                    options={clientC()}
                    onChange={(event) => handleChangeSelect(event, "id_cliente")}
                    name="id_cliente"
                   
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Color pintura</label>
                  <Select
                    options={productoC()}
                    onChange={(event) => handleChangeSelect(event, "id_producto")}

                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Base de la pintura</label>
                  <input
                    type="text"
                    className="form-control"
                    name="base"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={recordAdd.base}
                    hidden={false}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">Acabado de la pintura</label>
                  <input
                    type="text"
                    className="form-control"
                    name="acabado"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={recordAdd.acabado}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">Formula del color</label>
                  <input
                    type="text"
                    className="form-control"
                    name="formula_color"
                    placeholder="cod_ko4"
                    onChange={handleChange}
                    defaultValue={recordAdd.formula_color}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">Tamaño del envase</label>
                  <select name="tamano_envase" onChange={handleChange} className="form-control" value={recordAdd.tamano_envase}>
                    <option value="Cuarto del galón">Cuarto del galón</option>
                    <option value="Medio de galón">Cuarto de galón</option>
                    <option value="Galón">Galón</option>
                    <option value="Cubeta">Cubeta</option>
                  </select>
                </div>
                <br></br>
                <div className="form-group">
                  <button
                    type="submit"
                    className=" ml-1 btn btn-primary"
                    id="save"
                  >
                    Guardar
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegisterForm;
