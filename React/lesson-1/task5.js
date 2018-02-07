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
  arr.push(new Promise((resolve) => {
    let url = "https://jsonplaceholder.typicode.com/users/" + i;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }));
  Promise.all(arr).then(res => {
    // без условия выполнится 10 раз. почему?
    if (res.length === 10) console.log(res);
  })
}
