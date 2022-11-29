import axios from "axios";

export function getEmpleado() {
  const options = {
    method: "GET",
    withCredentials: false,
    url: "http://10.44.128.91/proyecto-lanco-codigo/controller_empleado.php",
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
