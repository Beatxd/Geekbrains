// Первая часть
console.log('---------------Первая часть---------------')
// Напишите функцию arrayToList, которая строит такую структуру,
// получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из списка.
// Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список,
// где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве
// аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же
// undefined в случае отсутствия такого элемента.

// Из массива в список
function arrayToList(arr){
	var listTemp = list = {};
	arr.forEach(function(key){
		listTemp.value = key;
		var i = arr.pop();
		arr.push(i);
		(key == i) ? listTemp.rest = null :	listTemp.rest = {};
		listTemp = listTemp.rest;
	});
	return list;
}

// Из списка в массив
function listToArray(obj){
	var arr = [];
	function toArr(obj){
		for(var key in obj){
			if(obj[key] == null){
				return;
			}
			if(typeof obj[key] == "object"){
				toArr(obj[key]);
			}
		arr.push(obj[key]);
		}
	}
	toArr(obj);
	arr.length = (arr.length + 1) / 2; // Костыль убирающий лишние элементы из массива.
	return arr;
}

// prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к 
// первоначальному списку,
function prepend(elmnt,list) {
  return {value: elmnt, rest: list};
}

// nth, которая в качестве
// аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же
// undefined в случае отсутствия такого элемента.
function nth(list,pos) {
  if(list == null) {
    return undefined;
  } else { 
      if (pos == 1) {
      return list.value;
      }
      return nth(list.rest, --pos);
  }
}

var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null,
		}
	}
}
var array = [1,2,5,6,7,8];

console.log(arrayToList(array));
console.log(listToArray(list));
console.log(prepend(15,list));
console.log(nth(list,5));
console.log(nth(list,8));

// Вторая часть
console.log('---------------Вторая часть---------------')
// Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как
// аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как
// оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве,
// который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
function reverseArray(arr){
	newArr = [];
	for(i = 0; arr.length > i; i++){
		var temp = arr.pop(i);
		newArr.push(temp);
		arr.unshift(temp);
	}
	return newArr;
}
var array2 = [1,2,3,4,7];
var newArray = reverseArray(array2);
console.log(newArray); // [7, 4, 3, 2, 1]
//console.log(array2); // проверка корректности первоначального массива [1, 2, 3, 4, 7]
function reverseArrayInPlace(arr){
	var temp = [];
	for(i = 0; arr.length > i; i){
		temp.push(arr.pop(i));
	}
	for(i = 0; temp.length > i; i){
		arr.push(temp.shift(i));
	}
}
var array3 = [9,8,7,6,5];
reverseArrayInPlace(array3);
console.log(array3); // [5, 6, 7, 8, 9]

// Задание со звездочкой
console.log('---------------Задание со звездочкой---------------')
// * Реализовать функцию pick(obj, keys), которая принимает аргументами объект и массив строк
// (названия ключей). Возвращает новый объект, куда вошли все ключи, указанные в массиве keys,
// и соответствующие значения из объекта obj. Если в объекте obj, нет ключа, указанного в
// массиве keys, в результирующем объекте этот ключ не должен присутствовать.

function pick(obj, keys){
	var objNew = {};
	for(var key in object1){
		var i = 0;
		while(typeof keys[i] != 'undefined'){ 
			if(keys[i] == key) break;
			i++;
		}
		if(typeof obj[keys[i]] != 'undefined'){ // чтобы не добавлялись пустые ключи
		objNew[key] = obj[keys[i]];
		}
	}
	return objNew;
}
var object1 = {
	key1: 'val1',
	key2: 'val2',
	key3: 'val3',
	key4: 'val4',
	key5: 'val5',
	key6: 'val6',
	key7: 'val7',
}
var keys = ['key2', 'key7', 'key5'];

var object2 = pick(object1, keys);
console.log(object2);
// console.log(object1); // для сравнения