import { Fragment } from "react/jsx-runtime";
import Contenedor from "../components/Contenedor";
import Boton from "../components/Boton";
import Tarjeta from "../components/Tarjeta";
import { PRODUCTOS } from "../data/Producto";

function Inicio() {
  function AbrirInfoProducto(nombreProducto: string) {
    console.log("Abri el producto: " + nombreProducto);
  }

  return (
    <Fragment>
      <h3 className="text-center" style={{ margin: "15px" }}>
        {" "}
        Productos Destacados HOY
      </h3>

      <Contenedor clase="container text-center">
        <div className="row">
          {PRODUCTOS.map((prod) => (
            <div className="col">
              <Tarjeta
                titulo={prod.nombre}
                texto={prod.descripcion}
                urlImagen={prod.urlImagen}
                altImagen={prod.altImagen}
              >
                <p>${prod.precio}</p>
                {/* <Boton
                  alHacerClic={() => {
                    AbrirInfoProducto("Kalaora wena");
                  }}
                >
                  +Info
                </Boton> */}
              </Tarjeta>
            </div>
          ))}
        </div>
      </Contenedor>
    </Fragment>
  );
}

export default Inicio;
