'use strict';
/*
 Написать цикл, который создаёт массив промисов, внутри каждого промиса
 происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где
 вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов.
 Следует дождаться выполнения загрузки всеми промисами и далее вывести массив
 загруженных данных
*/

const arr = [];
for (let i = 1; i <= 10; i++) {
  let p = new Promise((resolve) => {
    let url = "https://jsonplaceholder.typicode.com/users/" + i;
    $.get(url, function (data) {
      arr.push(data);
      resolve();
    });
  });
  p.then(() => {
    if (arr.length === 10) console.log(arr);
  })
}
