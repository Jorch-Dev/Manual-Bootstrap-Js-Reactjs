import React, { Fragment } from "react";

export const Orientation_view = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h3>Fill</h3>
            <hr />
            <div
              className="contenedor d-flex align-items-start"
              style={{ height: "100px" }}
            >
              <div>Lorem ipsum dolor sit amet.</div>
              <div className="flex-fill">caja 1</div>
              <div className="flex-fill">caja 2</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <h3>Aling-Items</h3>
            <hr />
            <p>.align-items-start</p>
            <div
              className="contenedor d-flex align-items-start"
              style={{ height: "100px" }}
            >
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <p>.align-items-center</p>
            <div
              className="contenedor d-flex align-items-center"
              style={{ height: "100px" }}
            >
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <p>.align-items-end</p>
            <div
              className="contenedor d-flex align-items-end"
              style={{ height: "100px" }}
            >
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <p>.align-items-baseline</p>
            <div
              className="contenedor d-flex align-items-baseline"
              style={{ height: "100px" }}
            >
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <p>.align-items-stretch</p>
            <div
              className="contenedor d-flex align-items-stretch"
              style={{ height: "100px" }}
            >
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <h3>Aling Self</h3>
            <hr />
            <div className="contenedor d-flex" style={{ height: "100px" }}>
              <div className="align-self-start">aling-self-start</div>
              <div className="align-self-center">aling-self-center</div>
              <div className="align-self-end">aling-self-end</div>
              <div className="align-self-baseline">aling-self-baseline</div>
              <div className="align-self-stretch">aling-self-stretch</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <h3>Auto Margins</h3>
            <hr />
            <div
              className="contenedor d-flex justify-content-end"
              style={{ height: "100px" }}
            >
              <div className="me-auto">.me-auto</div>
              <div>div2</div>
              <div>div3</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <div
              className="contenedor d-flex justify-content-start"
              style={{ height: "100px" }}
            >
              <div>div1</div>
              <div>div2</div>
              <div className="ms-auto">.ms-auto</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <div
              className="contenedor d-flex flex-column align-items-start"
              style={{ height: "250px" }}
            >
              <div className="mb-auto">.mb-auto</div>
              <div>div2</div>
              <div>div3</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <div
              className="contenedor d-flex flex-column align-items-end"
              style={{ height: "250px" }}
            >
              <div>div1</div>
              <div>div2</div>
              <div className="mt-auto">.mt-auto</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <h3>Aling Content</h3>
            <hr />
            <p>.align-content-start</p>
            <div className="contenedor d-flex flex-wrap align-content-start" style={{ height: "200px" }}>
                <div>div 1</div>
                <div>div 2</div>
                <div>div 3</div>
                <div>div 4</div>
                <div>div 5</div>
                <div>div 6</div>
                <div>div 7</div>
                <div>div 8</div>
                <div>div 9</div>
                <div>div 10</div>
                <div>div 11</div>
                <div>div 12</div>
                <div>div 13</div>
                <div>div 14</div>
                <div>div 15</div>
            </div>
            <p>.align-content-center</p>
            <div className="contenedor d-flex flex-wrap align-content-center" style={{ height: "200px" }}>
                <div>div 1</div>
                <div>div 2</div>
                <div>div 3</div>
                <div>div 4</div>
                <div>div 5</div>
                <div>div 6</div>
                <div>div 7</div>
                <div>div 8</div>
                <div>div 9</div>
                <div>div 10</div>
                <div>div 11</div>
                <div>div 12</div>
                <div>div 13</div>
                <div>div 14</div>
                <div>div 15</div>
            </div>
            <p>.align-content-end</p>
            <div className="contenedor d-flex flex-wrap align-content-end" style={{ height: "200px" }}>
                <div>div 1</div>
                <div>div 2</div>
                <div>div 3</div>
                <div>div 4</div>
                <div>div 5</div>
                <div>div 6</div>
                <div>div 7</div>
                <div>div 8</div>
                <div>div 9</div>
                <div>div 10</div>
                <div>div 11</div>
                <div>div 12</div>
                <div>div 13</div>
                <div>div 14</div>
                <div>div 15</div>
            </div>
            <p>.align-content-between</p>
            <div className="contenedor d-flex flex-wrap align-content-between" style={{ height: "200px" }}>
                <div>div 1</div>
                <div>div 2</div>
                <div>div 3</div>
                <div>div 4</div>
                <div>div 5</div>
                <div>div 6</div>
                <div>div 7</div>
                <div>div 8</div>
                <div>div 9</div>
                <div>div 10</div>
                <div>div 11</div>
                <div>div 12</div>
                <div>div 13</div>
                <div>div 14</div>
                <div>div 15</div>
            </div>
          
            <p>.align-content-around</p>
            <div className="contenedor d-flex flex-wrap align-content-around" style={{ height: "200px" }}>
                <div>div 1</div>
                <div>div 2</div>
                <div>div 3</div>
                <div>div 4</div>
                <div>div 5</div>
                <div>div 6</div>
                <div>div 7</div>
                <div>div 8</div>
                <div>div 9</div>
                <div>div 10</div>
                <div>div 11</div>
                <div>div 12</div>
                <div>div 13</div>
                <div>div 14</div>
                <div>div 15</div>
            </div>
            <p>.align-content-stretch</p>
            <div className="contenedor d-flex flex-wrap align-content-stretch" style={{ height: "200px" }}>
                <div>div 1</div>
                <div>div 2</div>
                <div>div 3</div>
                <div>div 4</div>
                <div>div 5</div>
                <div>div 6</div>
                <div>div 7</div>
                <div>div 8</div>
                <div>div 9</div>
                <div>div 10</div>
                <div>div 11</div>
                <div>div 12</div>
                <div>div 13</div>
                <div>div 14</div>
                <div>div 15</div>
            </div>
          

          </div>
        </div>
      </div>
    </Fragment>
  );
};
