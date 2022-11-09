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
  var object ={"id_registro":id}
  const options = {
    method: "DELETE",
    withCredentials: false,
    url: "http://localhost/proyecto-lanco-codigo/controller_registro.php",
    data: object
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

