import React, { useState, useEffect } from "react";
import { getProductos } from "../../services/ProductService";
import { getCLient } from "../../services/ClientService";
import { getEmpleado } from "../../services/EmpleadoService";
import { Registe } from "./registerModel";
import { actualizar, buscar_id } from "../../services/RegisterServices";
import { agregar } from "../../services/RegisterServices";
import { agregar1 } from "./servicesExa";
import Select from "react-select";
import moment from "moment";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { obtener_id_reg } from "./servicesExa";

function Form() {
  const [recordAdd, setRecordAdd] = useState(Registe);
  const [product, setProduct] = useState([]);
  const [client, setClient] = useState([]);
  const [empleado, setEmpleado] = useState([]);
  const [id_Reg, setIdR] = useState({id_registro:''});
  const { state } = useLocation();
  const { id } = state; 
  const navigate = useNavigate();

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

    obtener_id_reg().then((client) => {
      setIdR(client);
    });
    if (id) {
      console.log("mae si");
      buscar_id(id).then((record) => {
        setRecordAdd(record);
      });
    }
  }, []);

  console.log(id_Reg.id_registro)

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
    setRecordAdd({ ...recordAdd, [name]: value });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setRecordAdd({ ...recordAdd, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      actualizar(recordAdd);
    } else {
      recordAdd.fecha_compra = moment().format("YY-MM-DD");
     // recordAdd.id_registro=id_Reg;
      setRecordAdd({ ...recordAdd, ["id_registro"]: id_Reg.id_registro });
      agregar1(recordAdd);
    }

    //navigate("/registros");
  };

  return (
    <React.Fragment>
      <div>
        <form id="msform" onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="">Nombre del empleado</label>
              <Select
                options={empleadoC()}
                onChange={(event) => handleChangeSelect(event, "id_empleado")}
                defaultValue={recordAdd.id_empleado}
                required
              />
            </div>
            <div>
              <label htmlFor="">Nombre del cliente</label>
              <Select
                options={clientC()}
                onChange={(event) => handleChangeSelect(event, "id_cliente")}
                name="id_cliente"
                required
              />
            </div>
            <div>
              <label htmlFor="">Color pintura</label>
              <Select
                options={productoC()}
                onChange={(event) => handleChangeSelect(event, "id_producto")}
                required
              />
            </div>
            <div>
              <label htmlFor="">Formula del color</label>
              <input
                type="text"
                className="form-control"
                name="formula_color"
                placeholder="cod_ko4"
                onChange={handleChange}
                defaultValue={recordAdd.formula_color}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="">Tamaño del envase</label>
              <select
                name="tamano_envase"
                onChange={handleChange}
                className="form-control"
                value={recordAdd.tamano_envase}
                required
              >
                <option value="Cuarto del galón">Cuarto del galón</option>
                <option value="Medio de galón">Cuarto de galón</option>
                <option value="Galón">Galón</option>
                <option value="Cubeta">Cubeta</option>
              </select>
            </div>
            <br></br>
            <div>
            <div>
              <label htmlFor="">Acabado</label>
              <select
                name="acabado"
                onChange={handleChange}
                className="form-control"
                value={recordAdd.acabado}
                required
              >
                <option value="Mate">Mate</option>
                <option value="Satinado">Satinado</option>
                <option value="Brillo">Brillo</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Tipo de pintura</label>
              <select
                name="base"
                onChange={handleChange}
                className="form-control"
                value={recordAdd.base}
                required
              >
                <option value="Agua">Agua</option>
                <option value="Aceite">Aceite</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Area de aplicación</label>
              <select
                name="area_Aplicacion"
                onChange={handleChange}
                className="form-control"
                value={recordAdd.area_Aplicacion}
                required
              >
                <option value="Interiores">Interiores</option>
                <option value="Exteriores">Exteriores</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Precio</label>
              <input
                type="number"
                className="form-control"
                name="precio"
                placeholder="$$$$"
                onChange={handleChange}
                defaultValue={recordAdd.precio}
                required
              ></input>
            </div>
            <br></br>
              <button type="submit" class="next action-button" id="save">
                Guardar
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Form;
