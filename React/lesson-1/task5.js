'use strict';
/*
 Написать цикл, который создаёт массив промисов, внутри каждого промиса
 происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где
 вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов.
 Следует дождаться выполнения загрузки всеми промисами и далее вывести массив
 загруженных данных
*/
const arr = [];

function sendRequest(url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      arr.push(JSON.parse(this.responseText));
      callback();
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

for (let i = 1; i <= 10; i++) {
  let p = new Promise((resolve) => {
    let url = "https://jsonplaceholder.typicode.com/users/" + i;
    sendRequest(url, resolve);
  });
  p.then(() => {
    if (arr.length === 10) console.log(arr);
  })
}
