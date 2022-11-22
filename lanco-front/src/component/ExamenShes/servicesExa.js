import axios from "axios";

//se aplicaría patron estrategia, observador y fachada
export function agregar1(registro) {

  console.log("HOLAAAAAAAAAAAAAA"+registro.id_registro)

    const options = {
      method: "POST",
      withCredentials: false,
      url: "http://localhost/examen_patrones/controller_registro.php",
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
//aplica el 
  export function agregar2(registro) {

    const options = {
      method: "POST",
      withCredentials: false,
      url: "http://localhost/examen_patrones/controller_registro.php",
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

  export function getRegisterExame() {
    console.log("MARIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    const options = {
      method: "GET",
      withCredentials: false,
      url: "http://localhost/examen_patrones/controller_registro.php",
    };
  
    return  axios
      .request(options)
      .then((response) => {
        const res = response.data;
        return res;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  export function getAltaCalidad() {
    console.log("MARIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    const options = {
      method: "GET",
      withCredentials: false,
      url: "http://localhost/examen_patrones/compositeSh.php",
    };
  
    return  axios
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
      url: "http://localhost/examen_patrones/compositeSh.php",
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

  export function addAltaCalidad(id) {
    var object = { id_registro: id };
    const options = {
      method: "POST",
      withCredentials: false,
      url: "http://localhost/examen_patrones/compositeSh.php",
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

  //http://localhost/examen_patrones/controller_registro.php?id=15

  export function obtener_id_reg() {

    const options = {
      method: "GET",
      withCredentials: false,
      url: "http://localhost/examen_patrones/controller_registro.php?id=15"
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
