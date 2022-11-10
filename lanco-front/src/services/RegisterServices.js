import axios from "axios";

export function getRegister() {
  const options = {
    method: "GET",
    withCredentials: false,
    url: "http://localhost/proyecto-lanco-codigo/controller_registro.php",
  };

  return axios
    .request(options)
    .then((response) => {
      const res = response.data;
      return res;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function eliminar(id) {
  var object = { id_registro: id };
  const options = {
    method: "DELETE",
    withCredentials: false,
    url: "http://localhost/proyecto-lanco-codigo/controller_registro.php",
    data: object,
  };

  return axios
    .request(options)
    .then((response) => {
      const res = response.data;
      return res;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function buscar_id(id) {

  const options = {
    method: "GET",
    withCredentials: false,
    url: "http://localhost/proyecto-lanco-codigo/controller_registro.php?id="+id,
  };

  return axios
    .request(options)
    .then((response) => {
      const res = response.data;
      return res;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function agregar(registro) {

  console.log(registro.id_cliente+"   "+registro.id_producto+" ")
  
  const options = {
    method: "POST",
    withCredentials: false,
    url: "http://localhost/proyecto-lanco-codigo/controller_registro.php",
    data: registro,
  };

  return axios
    .request(options)
    .then((response) => {
      const res = response.data;
      return res;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function actualizar(registro) {
  console.log(registro.id_cliente+"  "+registro.fecha_compra)
  const options = {
    method: "PUT",
    withCredentials: false,
    url: "http://localhost/proyecto-lanco-codigo/controller_registro.php",
    data: registro,
  };

  return axios
    .request(options)
    .then((response) => {
      const res = response.data;
      return res;
    })
    .catch(function (error) {
      console.error(error);
    });
}
