// Первая часть
// Функция преобразования цвета из десятичного формата в шестнадцатеричный.
//Оптимизировать
function colorChanger(r, g, b){
	var color;
	function valid(clr){
		if (clr < 0 || clr > 255){
			console.log("Некорректный ввод цвета. Вводить нужно от 0 до 255. Цвет сброшен на '00'");
			clr = 0;
		}
		clr = clr.toString(16);
		clr = (clr.length<2) ? "0" + clr : clr;
		return clr;
	}
	return color = "#" + valid(r) + valid(g) + valid(b);
}
color = colorChanger(250, 0, 5);
console.log(color);

// Вторая часть
// Преобразовать число в объект. Вводить можно от 0 до 999, если больше то вернуть пустой объект. 
function numToObj(num){		
	if(num < 0 || num > 999){
		console.log("Число не должно превышать 999");
		return {}
	}
	// var obj = {}
	// if(num.length == 2){
	// 	num = "0" + num;
	// }
	// if(num.length == 1){
	// 	num = "00" + num;
	// }
	// obj['Единицы'] = num[2];
	// obj['Десятки'] = num[1];
	// obj['Сотни'] = num[0];	
	// return obj;
}
// var num = prompt("Введите число");
// while (num.replace (/\d/g, '').length || num == "") { // Проверку на "не числа" нашел в интернете
// 	num = prompt ('Вводить можно только числа');
// }
console.log(numToObj(prompt("Введите число")));

// Задание со звездочкой
// * Реализовать функцию objectToQueryString(object), которая принимает аргументом объект, возвращает строку

function objectToQueryString(obj){
	var string = [];
	for(var key in obj){ // в "map" не разобрался пока, реализовал через "in"
		string.push(key + "=" + obj[key]);
	}
	return string.join('&');
}	

console.log(objectToQueryString({user: 'Dmitry'})); // user=Dmitry
console.log(objectToQueryString({user: 'Dmitry', password: 'pass'})); //user=Dmitry&password=pass 
console.log(objectToQueryString({user: 'Dmitry', password:'pass', id: 1})); 
// user=Dmitry&password=pass&id=1