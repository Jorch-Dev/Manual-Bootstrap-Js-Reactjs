import React, { Fragment } from "react";

export const Display_Flex = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h3>Tipos de display Flex</h3>
            <hr />
            <div className="bg-primary text-white p-3 d-flex">
              <p className="mb-0">
                <strong>d-flex</strong>
              </p>
            </div>
            <br />
            <div className="bg-primary text-white p-3 d-inline-flex">
              <p className="mb-0">
                <strong>d-inline-flex</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <h3>Direction</h3>
            <hr />
            <p>.flex-row</p>
            <div className="contenedor d-flex flex-row">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>

            <p>.flex-reverse</p>
            <div className="contenedor d-flex flex-row-reverse">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>

            <p>.flex-column</p>
            <div className="contenedor d-flex flex-column">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>

            <p>.flex-column-reverse</p>
            <div className="contenedor d-flex flex-column-reverse">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <h3>.Justify-content</h3>
            <hr />
            <p>.justify-content-start</p>
            <div className="contenedor d-flex justify-content-start">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>

            <p>.justify-content-end</p>
            <div className="contenedor d-flex justify-content-end">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
            </div>

            <p>.justify-content-between</p>
            <div className="contenedor d-flex justify-content-between">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
              <div>caja 4</div>
            </div>

            <p>.justify-content-around</p>
            <div className="contenedor d-flex justify-content-around">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
              <div>caja 4</div>
            </div>

            <p>.justify-content-evenly</p>
            <div className="contenedor d-flex justify-content-evenly">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
              <div>caja 4</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <h3>Wrap</h3>
            <hr />
            <p>.flex-nowrap</p>
            <div className="encapsulador d-flex flex-nowrap">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
              <div>caja 4</div>
              <div>caja 5</div>
              <div>caja 6</div>
              <div>caja 7</div>
              <div>caja 8</div>
              <div>caja 9</div>
              <div>caja 10</div>
              <div>caja 11</div>
              <div>caja 12</div>
              <div>caja 13</div>
              <div>caja 14</div>
              <div>caja 15</div>
            </div>

            <p>.flex-wrap</p>
            <div className="encapsulador d-flex flex-wrap">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
              <div>caja 4</div>
              <div>caja 5</div>
              <div>caja 6</div>
              <div>caja 7</div>
              <div>caja 8</div>
              <div>caja 9</div>
              <div>caja 10</div>
              <div>caja 11</div>
              <div>caja 12</div>
              <div>caja 13</div>
              <div>caja 14</div>
              <div>caja 15</div>
            </div>

            <p>.flex-wrap-reverse</p>
            <div className="encapsulador d-flex flex-wrap-reverse">
              <div>caja 1</div>
              <div>caja 2</div>
              <div>caja 3</div>
              <div>caja 4</div>
              <div>caja 5</div>
              <div>caja 6</div>
              <div>caja 7</div>
              <div>caja 8</div>
              <div>caja 9</div>
              <div>caja 10</div>
              <div>caja 11</div>
              <div>caja 12</div>
              <div>caja 13</div>
              <div>caja 14</div>
              <div>caja 15</div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <h3>Order</h3>
            <hr />
            <div className="contenedor d-flex flex-nowrap">
              <div className="order-2">Caja 1</div>
              <div className="order-3">Caja 2</div>
              <div className="order-1">Caja 3</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
