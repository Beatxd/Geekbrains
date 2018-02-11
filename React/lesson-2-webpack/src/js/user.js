'use strict';
class User {
  constructor(name = null, department = 'IT', salery = 35000) {
    this.name = name;
    this.department = department;
    this.salery = salery;
  }
}

module.exports = (name, department, salery) => {return new User(name, department, salery)};