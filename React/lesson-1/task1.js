'use strict';
/* Написать функцию loop, которая будет принимать параметры: times (значение по
 умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз),
 вызывать функцию callback. Если функцию не передана, то цикл не должен
 отрабатывать ни разу. Покажите применение этой функции
*/
const loop = (times = 0, callback) => {
  if (!callback) return console.log('break loop');
  for (let i = 0; i < times; i++){
    callback();
  }
};

loop (0, () => console.log('test'));
loop (2, () => console.log('test2'));
loop (2);

