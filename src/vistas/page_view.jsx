import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const PageView = () => {
  return (
    <>
      <div className="w-100 bg-gray border">
        <Carousel showThumbs={false} showStatus={false} autoPlay={true}>
          <div>
            <img
              src="assets/vue_vs_react.jpeg"
              height="650"
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="assets/vue_vs_react.jpeg"
              height="650"
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="assets/vue_vs_react.jpeg"
              height="650"
              className="img-fluid"
            />
          </div>
        </Carousel>
      </div>

      <div className="container border">
        <div className="col">
          <div className="d-flex border">
            <div className="col card card_box border me-5">
              <img src="assets/logo192.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div className="col card card_box border me-5">
              <img src="assets/logo192.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div className="col card card_box border me-5">
              <img src="assets/logo192.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>

            <div className="col card card_box border">
              <img src="assets/logo192.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </div>
          <div className="col border">
            <div className="d-flex flex-row">
              <div className="col-6 border">1</div>
              <div className="col-6 border">2</div>
            </div>
          </div>
          <div className="col border">
            <div className="d-flex flex-row">
              <div className="col-6 border">1</div>
              <div className="col-6 border">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 bg-gray border">
        <div className="container">
          <div className="col d-flex justify-content-center border"> 
          <div>
              <p>DEVELOPER</p>
          </div>
          </div>
            <div className="d-flex flex-row">
              <div className="col-6 border">1</div>
              <div className="col-6 border">2</div>
            </div>

        </div>
      </div>
    </>
  );
};
