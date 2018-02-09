const user = require('./components/user.js');
const $ = require('jquery');

const john = new user.User('John', 'Developers', 50000);
$('#name').html('Hello, my name is ' + john.name);
$('.about').html(john.info());
console.log();