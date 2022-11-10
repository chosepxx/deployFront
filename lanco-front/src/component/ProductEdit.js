import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { addProduct } from "../services/ProductService";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getCurrentDate } from "./utils/date";
import { useLocation } from "react-router-dom";
import { getProductoData } from "../services/ProductService";

const options = [
  { value: "", text: "--Elija una opcion--" },
  { value: "Agua", text: "Agua " },
  { value: "Aceite", text: "Aceite " },
  { value: "Acrílica ", text: "Acrílica " },
];
const options2 = [
  { value: "", text: "--Elija una opcion--" },
  { value: "Pared", text: "Pared " },
  { value: "Techo", text: "Techo " },
  { value: "Hierro ", text: "Hierro " },
];
export default function ProductEdit() {
  const { state } = useLocation();
  const { id } = state; // Read values passed on state
  const [values, setValues] = useState([]);
  const [selected, setSelected] = useState(options[0].value);
  const [selected2, setSelected2] = useState(options2[0].value);
  const [error, setError] = useState({ fields: {}, errors: {} });

  const navigate = useNavigate();

  useEffect(() => {
    getProductoData(id).then((product) => {
      setValues(product);
      //setSelected(product.base_pintura);
    });
  }, []);

  const handleInputChange = (e) => {
    if (e.target.name === "base_pintura") {
      setSelected(e.target.value);
    }

    if (e.target.name === "area_aplicacion") {
      setSelected2(e.target.value);
    }

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleValidation() {
    let fields = values;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields.descripcion.trim()) {
      formIsValid = false;
      errors["descripcion"] = "            No puede ser vacio";
    }
    if (!fields.color_pintura.trim()) {
      formIsValid = false;
      errors["color_pintura"] = "            No puede ser vacio";
    }
    if (!fields.marca.trim()) {
      formIsValid = false;
      errors["marca"] = " No puede ser vacio";
    }
    if (!fields.base_pintura) {
      formIsValid = false;
      errors["base_pintura"] = " Escoja una opcion";
    }
    if (!fields.area_aplicacion) {
      formIsValid = false;
      errors["area_aplicacion"] = " Escoja una opcion";
    }
    if (!fields.area_aplicacion) {
      formIsValid = false;
      errors["area_aplicacion"] = " Escoja una opcion";
    }
    var d1 = new Date(fields.fecha_caducidad);
    var d2 = new Date();

    if (d1.getTime() < d2.getTime()) {
      formIsValid = false;
      errors["fecha_caducidad"] = " Fecha no puede ser menor al dia Actual";
    }

    if (
      Number(fields.cantidad_stock) > Number(fields.max) ||
      Number(fields.cantidad_stock) < Number(fields.min)
    ) {
      formIsValid = false;
      errors["cantidad_stock"] =
        " El stock no puede ser mayor al max ni menor al min";
    }

    setError({ errors: errors });
    return formIsValid;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log(values);
      addProduct(values);
      navigate("/productos");
    }
    /*
     */
  };

  return (
    <div>
      <form id="msform" onSubmit={handleOnSubmit}>
        <fieldset>
          <label>Base pintura</label>
          <span style={{ color: "red" }}>{error.errors["base_pintura"]}</span>
          <select
            name="base_pintura"
            value={selected}
            onChange={handleInputChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>

          <label>Area Aplicacion</label>
          <span style={{ color: "red" }}>
            {error.errors["area_aplicacion"]}
          </span>
          <select
            name="area_aplicacion"
            value={selected2}
            onChange={handleInputChange}
          >
            {options2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <label>Color pintura</label>
          <span style={{ color: "red" }}>{error.errors["color_pintura"]}</span>
          <input
            value={values.color_pintura}
            onChange={handleInputChange}
            name="color_pintura"
            required
          />
          <label>Descripcion</label>
          <span style={{ color: "red" }}>{error.errors["descripcion"]}</span>
          <input
            value={values.descripcion}
            onChange={handleInputChange}
            name="descripcion"
            required
          />

          <label>Fecha caducidad</label>
          <span style={{ color: "red" }}>
            {error.errors["fecha_caducidad"]}
          </span>
          <input
            value={values.fecha_caducidad}
            onChange={handleInputChange}
            name="fecha_caducidad"
            type="date"
            required
          />
          <label>Precio</label>
          <input
            value={values.precio}
            onChange={handleInputChange}
            name="precio"
            type="number"
            required
          />
          <label>Marca</label>
          <span style={{ color: "red" }}>{error.errors["marca"]}</span>
          <input
            value={values.marca}
            onChange={handleInputChange}
            name="marca"
            required
          />
          <label>Cantidad en Stock</label>
          <span style={{ color: "red" }}>{error.errors["cantidad_stock"]}</span>
          <input
            value={values.cantidad_stock}
            onChange={handleInputChange}
            name="cantidad_stock"
            min="0"
            type="number"
            required
          />
          <label>Max</label>
          <input
            value={values.max}
            onChange={handleInputChange}
            name="max"
            min="0"
            type="number"
            required
          />

          <label>Min</label>
          <input
            value={values.min}
            onChange={handleInputChange}
            name="min"
            min="0"
            type="number"
            required
          />

          <button class="next action-button" disabled={false}>
            {" "}
            Registrar{" "}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
