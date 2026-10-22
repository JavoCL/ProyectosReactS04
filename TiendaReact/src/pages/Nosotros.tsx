import { Fragment } from "react/jsx-runtime";
import Contenedor from "../components/Contenedor";

function Nosotros() {
  return (
    <Fragment>
      {/* Carrusel de imagenes */}
      <Contenedor>
        <div className="row">
          <div className="col">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* <img src="..." className="d-block w-100" alt="..."> */}
                  <svg
                    aria-hidden="true"
                    className="bd-placeholder-img "
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="100%"
                      height="100%"
                      fill="var(--bs-secondary-color)"
                    ></rect>
                  </svg>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <svg
                    aria-hidden="true"
                    className="bd-placeholder-img "
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="100%"
                      height="100%"
                      fill="var(--bs-secondary-color)"
                    ></rect>
                  </svg>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <svg
                    aria-hidden="true"
                    className="bd-placeholder-img "
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="100%"
                      height="100%"
                      fill="var(--bs-secondary-color)"
                    ></rect>
                  </svg>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </Contenedor>
      {/* Fotos equipo */}
      <br />
      <Contenedor>
        <div className="row d-flex justify-content-center">
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="img/pics/ceo.jpeg"
                className="card-img-top rounded-circle"
                alt="Jefazo"
              />
              <div className="card-body">
                <h5 className="card-title">CEO</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="img/pics/seniorProgrammer.jpeg"
                className="card-img-top rounded-circle"
                alt="Programador estrella"
              />
              <div className="card-body">
                <h5 className="card-title">Senior programmer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="img/pics/pprr.jpeg"
                className="card-img-top rounded-circle"
                alt="Relacionadora publica"
              />
              <div className="card-body">
                <h5 className="card-title">Relaciones publicas</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </Contenedor>
      {/* FAQ */}
      <Contenedor>
        <section style={{ padding: "40px" }}>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h4>FAQ</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Pregunta frecuente #1
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item’s accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classNamees that we use to style each element.
                      These classNamees control the overall appearance, as well
                      as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our
                      default variables. It’s also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Pregunta frecuente #2
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item’s accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It’s also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Pregunta frecuente #3
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item’s accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It’s also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Contenedor>
    </Fragment>
  );
}

export default Nosotros;
