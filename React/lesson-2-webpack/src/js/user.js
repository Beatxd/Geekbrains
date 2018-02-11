'use strict';
class User {
  constructor(name = null, department = null, salery = 30000) {
    this.name = name;
    this.department = department;
    this.salery = salery;
  }
}

module.exports = (name, department, salery) => {return new User(name, department, salery)};