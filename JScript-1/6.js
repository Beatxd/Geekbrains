// Первая часть
// Напишите функцию arrayToList, которая строит такую структуру,
// получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из списка.
// Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список,
// где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве
// аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же
// undefined в случае отсутствия такого элемента.
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

function listToArray(object){
	var arr = [];
	var obj = object;
	function toArr(obj){
		for(var key in obj){
			if(typeof obj[key] == "object"){
				toArr(obj[key]);
			}
			arr.push(obj[key]);
		}
	}
	toArr(obj);
	return arr;
}
list = listToArray(list);
console.log(list);

// myObject = { 
// 	'a': 1, 
// 	'b': 2, 
// 	'c': 3 
// }
// Object.keys(myObject).map(function(key, index) {
//    myObject[key] *= 2;
// });
// console.log(myObject);
