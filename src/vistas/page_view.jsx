import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const PageView = () => {
  return (
    <>
      <div className="w-100 bg-gray border">
        <Carousel showThumbs={false} showStatus={false} autoPlay={true}>
          <div className="bg-cover2"></div>
          <div className="bg-cover1">
            <div className="h-100 d-flex flex-column justify-content-center align-items-center carousel_text">
              <div>
                <h1 className="text-big text-white">
                  ¡Encuentra tu tema interes!
                </h1>
              </div>
              <div>
                <p className="text-medium text-white text-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="container border">
        <div className="col">
          <div className="d-flex border my-5">
            <div className="col card card_box border me-5">
              <img
                src="assets/modo-oscuro-para-tu-web.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-medium text-bold">Card title</h5>
                <p class="card-text text-small">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div className="col card card_box border me-5">
              <img
                src="assets/pagina-web-tipo-blog.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-medium text-bold">Card title</h5>
                <p class="card-text text-small">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div className="col card card_box border me-5">
              <img
                src="assets/integrando-redes-sociales-WhatsApp-Messenger.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-medium text-bold">Card title</h5>
                <p class="card-text text-small">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div className="col card card_box border">
              <img
                src="assets/popup-puro-css.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-medium text-bold">Card title</h5>
                <p class="card-text text-small">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </div>

          <div className="d-flex border my-5">
            <div className="col card card_box border me-5">
              <img
                src="assets/slider-con-puro-css.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-medium text-bold">Card title</h5>
                <p class="card-text text-small">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div className="col card card_box border me-5">
              <img
                src="assets/Slider-comparacion-imagenes-js.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-medium text-bold">Card title</h5>
                <p class="card-text text-small">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div className="col card card_box border me-5">
              <img
                src="assets/Indicador-de-scroll.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-medium text-bold">Card title</h5>
                <p class="card-text text-small">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div className="col card card_box border">
              <img
                src="assets/efecto-hover-avanzado-css.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-medium text-bold">Card title</h5>
                <p class="card-text text-small">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="col-6 border">
              <img src="assets/programming.svg" alt="" />
            </div>
            <div className="col-6">
              <div className="h-100 d-flex flex-column justify-content-center align-items-center border">
                <p className="text-medium text-bold text-300 text-center">
                  PROGRAMACIÓN REACTIVA
                </p>
                <p className="text-small text-2 text-center">
                  La{" "}
                  <span className="fw-bolder">
                    programación reactiva, o Reactive Programming
                  </span>
                  , es un paradigma enfocado en el trabajo con flujos de datos
                  finitos o infinitos de manera asíncrona, permitiendo que estos
                  datos se propaguen generando cambios en la aplicación, es
                  decir,
                  <span className="fw-bolder"> “reaccionan”</span> a los datos
                  ejecutando una serie de eventos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-50 bg-dark d-flex justify-content-center border">
        <div className="container d-flex">

            <div
              className="d-flex
            flex-column
            justify-content-center
            align-items-center
            col-12 col-md-12 h-100 border"
            >
              <div>
                <p className="text-medium text-white">DEVELOPER</p>
              </div>

              <div className="col"></div>

              <div className="col">
                <div className="d-flex">
                  <div className="col-6 border">
                    <p className="text-small text-white text-2 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae excepturi aliquam officia provident dolorem,
                      sit, esse reiciendis molestias in neque temporibus animi
                      ea numquam enim est eveniet possimus amet? Laborum?
                    </p>
                  </div>
                  <div className="col-6 border">2</div>
                </div>
              </div>

              <div className="col"></div>

              <div className="mt-auto border">
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <p className="text-white small_footer">
                    Copyright 2022. Todos los derechos reservados
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  );
};
