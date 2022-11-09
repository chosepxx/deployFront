import React from "react";
import { useForm } from "react-hook-form";

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="undefined" placeholder="Base Pintura" {...register} />
      <input type="undefined" placeholder="Descripcion" {...register} />
      <input type="undefined" placeholder="Área de aplicación" {...register} />
      <input type="undefined" placeholder="Fecha Caducidad" {...register} />
      <input type="undefined" placeholder="Color de pintura" {...register} />
      <input type="undefined" placeholder="Marca" {...register} />
      <input type="undefined" placeholder="Precio" {...register} />
      <input type="undefined" placeholder="Cantidad en stock" {...register} />
      <input type="undefined" placeholder="Max" {...register} />
      <input type="undefined" placeholder="Min" {...register} />

      <input type="submit" />
    </form>
  );
}
