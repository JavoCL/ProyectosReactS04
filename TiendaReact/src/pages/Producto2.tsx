import { Fragment } from "react/jsx-runtime";

function Producto2() {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          {/* Datos del producto */}
          <p>ID: </p>
          <p>Nombre producto: </p>
          <p>Descripcion: </p>
          <p>Precio: </p>
        </div>
        <div className="col">
          {/* Imagen del producto*/}
          <img src="" />
        </div>
      </div>
    </Fragment>
  );
}

export default Producto2;
