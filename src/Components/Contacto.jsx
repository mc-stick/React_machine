import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const Enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="Root_container">
      <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form className="formulario" onSubmit={handleSubmit(Enviar)}>
          <input type="text" placeholder="nombre" {...register("nombre")} />
          <input type="email" placeholder="email" {...register("email")} />
          <input
            type="number"
            placeholder="telefono"
            {...register("telefono")}
          />
          <button className="enviar" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
