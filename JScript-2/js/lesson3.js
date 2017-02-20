'use strict';
/* Напишите регулярное выражение для поиска HTML-цвета, заданного как #ABCDEF,
 то есть # и содержит затем 6 шестнадцатеричных символов. */
var str = '123#32abCDEFqwe';
console.log(str.match(/#[A-Z0-9]{6}/i));

/* Создайте регэксп, который ищет все положительные числа, в том числе и
 с десятичной точкой. Например, var str = "1.5 0 12. 123.4." */
str = "-12.3 1.5 0 12. 123.4. -3";
console.log(str.match(/\d+(\.\d)?/g));

/* Время может быть в формате часы:минуты или часы-минуты. И часы и минуты
 состоят из двух цифр, например 09:00, 21-30. Напишите регулярное выражение
 для поиска времени*/
str = "sa ad09:00sd, sdf 21-30asdasdad";
console.log(str.match(/\d\d[:-]\d\d/g));

/* Написать проверку правильности координаты в файле инициализации шахматной
 доски c помощью регулярного выражения. Он должен иметь формат вида A6. */
var strId = 'a5', strId2 = 'B7', strId3 = 'AB5', strId4 = 'V8';
// чтобы не переписывать джейсон эмулируем ситуацию
console.log(validationId(strId)); // false
console.log(validationId(strId2)); // true
console.log(validationId(strId3)); // false
console.log(validationId(strId4)); // false

function validationId(str) {
    return str.search(/^[A-H][1-8]$/) != -1;
}

/* Написать регулярные выражения для следующих сущностей: номер телефона в формате
 +7(965)-123-45-67, email, серии и номера паспорта. Применить написанные регулярные
 выражения необходимо для валидации произвольной формы, в которой обязательно должны
 присутствовать описанные выше поля. Поля, которые проходят валидацию подсветить
 зеленым, остальные – красным. */
// инпуты находятся в lesson3.html

function validationNumber() {
    var phone = document.getElementById('phone');
    var str = phone.value;

    if (str.search(/^\+\d\(\d{3}\)-\d{3}-\d{2}-\d{2}$/) != -1) { // Жесткая проверка
        phone.className = 'green'
    } else {
        phone.className = 'red'
    }
}
function validationEmail() {
    var email = document.getElementById('email');
    var str = email.value;

    if (str.search(/^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/) != -1) { // 2-4: ru, com, list.
        email.className = 'green'
    } else {
        email.className = 'red'
    }
}
function validationPasport() {
    var pasport = document.getElementById('pasport');
    var str = pasport.value;

    if (str.search(/^\d{4} \d{6}$/) != -1) { // 2-4: ru, com, list.
        pasport.className = 'green'
    } else {
        pasport.className = 'red'
    }
}
