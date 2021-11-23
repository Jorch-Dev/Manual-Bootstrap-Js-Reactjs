import { Person } from "./person_component"

export class TeacherClass extends Person{
    constructor(name, degree) {
      super(name);
      this.degree = degree;
    }
    
  }