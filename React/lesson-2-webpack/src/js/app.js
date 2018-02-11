const User = require('./user.js');
const renderUserCard = require('./components/render-user');

let usersArr = [
  new User('John', 'Developers', 50000),
  new User('Agent Smith'),
  new User('Petr Semyonovich')
];

for(let i = 0; i < usersArr.length; i++){
  let div = document.createElement('div');
  document.querySelector('.container').appendChild(div);
  renderUserCard(div, usersArr[i])
}

$('.container').click(() => {
  if ($('p').is('#date')){
    $('p#date').html('Последнее взаимодействие: ' + new Date());
  } else {
    $('.container').append('<p id="date">Первое взаимодействие: ' + new Date() + '</p>')
  }
});