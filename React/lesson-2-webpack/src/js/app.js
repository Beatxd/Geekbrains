const User = require('./user.js');
const renderUserCard = require('./components/render-user');

let usersArr = [
  new User('John', 'Developers', 50000),
  new User('Agent Smith', 'Bag`s Hunter', Infinity),
  new User('Petr Semyonovich')
];

for(let i = 0; i < usersArr.length; i++){
  let div = document.createElement('div');
  document.querySelector('.container').appendChild(div);
  renderUserCard(div, usersArr[i])
}

$('.container').click(() => {
  let date = new Date();
  let dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  date = date.toLocaleString('ru', dateOptions);
  date = date.charAt(0).toUpperCase() + date.substr(1);


  if ($('p').is('#date')){
    $('p#date').html('Последнее взаимодействие: ' + date);
  } else {
    $('.container').append('<p id="date">Первое взаимодействие: ' + date + '</p>')
  }
});