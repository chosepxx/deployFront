import axios from "axios";

export function getProductos() {
  const options = {
    method: "GET",
    withCredentials: false,
    url: "http://10.44.128.91/proyecto-lanco-codigo/controller_productos.php",
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

export function getProductoData(id) {
  const options = {
    method: "GET",
    withCredentials: false,
    url:
      "http://10.44.128.91/proyecto-lanco-codigo/controller_productos.php?id=" +
      id,
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
export function deleteProduct(id) {
  const url =
    "http://10.44.128.91/proyecto-lanco-codigo/controller_productos.php";
  const options = {
    method: "DELETE",
    withCredentials: false,
    url: "http://10.44.128.91/proyecto-lanco-codigo/controller_productos.php",
    data: { id_producto: id },
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

export function addProduct(datas) {
  console.log(datas);
  const url =
    "http://10.44.128.91/proyecto-lanco-codigo/controller_productos.php";
  const options = {
    method: "POST",
    withCredentials: false,
    url: "http://10.44.128.91/proyecto-lanco-codigo/controller_productos.php",
    data: datas,
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

export function editProduct(datas) {
  const options = {
    method: "PUT",
    withCredentials: false,
    url: "http://10.44.128.91/proyecto-lanco-codigo/controller_productos.php",
    data: datas,
  };
  console.log(options);
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
