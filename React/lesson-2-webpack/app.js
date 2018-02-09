const User = require('./components/user');
const $ = require('jquery');

const john = new User('John', 'IT', 50000);
$('#name').html('Hello, my name is ' + john.name);
$('.about').html(john.info());