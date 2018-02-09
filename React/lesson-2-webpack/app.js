const user = require('./components/user.js');
const $ = require('jquery');

const john = new user.User('John', 'Developers', 50000);
$('#name').html('Hello, my name is ' + john.name);
$('.about').html(john.info());
$('.container').click(() => {
  if ($('p').is('#date')){
    $('p#date').html('Последнее взаимодействие: ' + new Date());
  } else {
    $('.container').append('<p id="date">Первое взаимодействие: ' + new Date() + '</p>')
  }
});