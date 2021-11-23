import React, { Fragment } from "react";

export const Dashboard_view = () => {
  return (
    <Fragment>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/vue_vs_react.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/assets/vue_vs_react.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
