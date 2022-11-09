import axios from "axios";

export  function getProductos() {

    const options = {
      method: "GET",
      withCredentials: false,
      url: "http://localhost/proyecto-lanco-codigo/controller_productos.php"
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