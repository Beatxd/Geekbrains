const user = require('./user.js');
const userCard = require('./components/render-user');

const john = new user.User('John', 'Developers', 50000);

userCard.renderUser(document.querySelector('.container'), john);

$('.container').click(() => {
  if ($('p').is('#date')){
    $('p#date').html('Последнее взаимодействие: ' + new Date());
  } else {
    $('.container').append('<p id="date">Первое взаимодействие: ' + new Date() + '</p>')
  }
});