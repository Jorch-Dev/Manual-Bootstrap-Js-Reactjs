// var -> function, en toda la funcion
// let -> block, funciona en el bloque de codigo,puede cambiar su valor
// const -> block, funciona en el bloque de codigo,no puede cambiar su valor
import React from "react";
import { TeacherClass } from "../components/teacher_component"

export const Javascript = () => {
  const funcion1 = () => {
    let x = 2;
    x = "Hola Mundo";

    alert(x);
  };
  const funcion2 = () => {
    for (var i = 0; i < 11; i++) {
      console.log(i);
    }
    console.log(i);
  };
  const funcion3 = () => {
    let x = 2;
    //x = 5;

    alert(x);
  };

  const funcion4 = () => {
    const person = {
      name: "Jorch-Dev",
      walk() {},
    };
    console.log(person);
  };
  const funcion5 = () => {
    const person = {
      name: "Jorch-Dev",
      walk() {
        for (let i = 0; i < 11; i++) {
          console.log(i);
        }
      },
    };
    person.walk();
  };

  const funcion6 = () => {
    const person = {
      name: "Jorch-Dev",
      walk() {
        console.log(this.name);
      },
    };
    person.walk();
  };

  const arrowFunction = (number) => number * number; //asi si es solo una sola linea
  const funcion7 = () => alert(arrowFunction(5));
  const arreglo = [
    { id: 1, isLoading: true },
    { id: 2, isLoading: false },
    { id: 3, isLoading: true },
    { id: 4, isLoading: false },
    { id: 5, isLoading: true },
  ];
  const arrowFunctionFilter = () => arreglo.filter((x) => !x.isLoading);
  const funcion8 = () => console.log(arrowFunctionFilter());

  const funcion9 = () => {
    const persona = {
      name: "Jorch-Dev",
      walk() {
        console.log(this.name);
        setTimeout(function () {
          console.log("Machine", this.clientInformation.appVersion);
        },3000)
      }
    };
    persona.walk();
  };
  const funcion10 = () => {
    const persona = {
      name: "Jorch-Dev",
      walk() {
        var self = this;
        setTimeout(function () {
          console.log("Nombre", self.name);
        },3000)
      }
    };
    persona.walk();
  };

  const funcion11 = () => {
    const food = ["cemitas", "tacos arabes", "camotes", "chalupas", "borrachitos", "molotes"]
    const items = food.map(i => i)
    alert(items)
  }

  const funcion12 = () => {
    const direccion = {
      calle: "Atlixocoalt", 
      ciudad: "Puebla", 
      estado: "Cholula", 
      pais: "México"
  }

  const { calle, ciudad, estado, pais} = direccion
  console.log(`${calle} ${ciudad} ${estado} ${pais}`)
}

const funcion13 = () => {
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const combined = [...array1, 'A' , ...array2, 'B']
  console.log(combined)
}
const funcion14 = () => {
  const array1 = {
    nombre: "Jorge",
    apellido: "García"
  }
  const array2 = {
    puesto: "Developer",
    empresa: "Roca Funnels"
  }
  const combined = {...array1 ,...array2}
  console.log(combined)
}

const funcion15 = () => {
  class Person {
    constructor(name) {
      this.name = name
    }
  }

  const person = new Person("Jorge")
  console.log(person)
}

const funcion16 = () => {
  class Person {
    constructor(name) {
      this.name = name
    }
  }

  class Teacher extends Person{
    constructor(name, degree) {
      super(name);
      this.degree = degree;
    }
    
  }

  const resultado = new Teacher("Jorge","Dev")
  console.log(resultado)
}

const funcion17 = () => {
 const module = new TeacherClass("Jorch", "Tehua")
 console.log(module)
}

  return (
    <div className="container">
      <div className="row my-5">
        <h3>Tipos de variables</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion1}>
            let
          </button>
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-success" onClick={funcion3}>
            const
          </button>
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-danger" onClick={funcion2}>
            var
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>Objetos</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion4}>
            Objeto persona
          </button>
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-success" onClick={funcion5}>
            Objeto persona funcion
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>Palabra reservada "This"</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion6}>
            Objeto persona "this"
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>Funciones tipo flecha</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion7}>
            Funcion tipo flecha
          </button>
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-success" onClick={funcion8}>
            Funcion flecha "filter"
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>Funciones tipo flecha con "this"</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion9}>
            Funcion tipo flecha con "this"
          </button>
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-success" onClick={funcion10}>
            Funcion flecha "filter"
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>Recorrido de arreglos</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion11}>
            array.map()
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>Destructurando objetos</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion12}>
            destructuring object
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>Operador de propagación</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion13}>
            spread operator array
          </button>
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion14}>
            spread operator object
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>clases</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion15}>
            clase constructor
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>Herencia</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion16}>
            Inheritance
          </button>
        </div>
      </div>
      <hr />
      <div className="row my-5">
        <h3>Modulos</h3>
        <div className="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-primary" onClick={funcion17}>
            Module
          </button>
        </div>
      </div>
    </div>
  );
};
