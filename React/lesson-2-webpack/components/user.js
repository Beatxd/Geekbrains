'use strict';
export default class User {
  constructor(name = null, department = null, salery = 30000) {
    this.name = name;
    this.department = department;
    this.salery = salery
  }

  info(salery = null, department = null) {
    if (!salery && !department)
      return `Name: ${this.name}; Department ${this.department}; Salery: ${this.salery}`;
    if (salery) this.salery = salery;
    if (department) this.department = department;
  }
}
