// * Забегая немного вперед. Напишите программу, которая выводит через console.log все числа от
// 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
// а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она
// выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

//Без оптимизации:
// for (var i = 1; i <= 100; i++) {
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		console.log("FizzBuzz");
// 	} else if (i % 3 == 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 == 0) {
// 		console.log("Buzz");
// 	}else{
// 		console.log(i)
// 	}
// }

//Чуть упростил
for (var i = 1; i <= 20; i++) {
	var value = i;
	if (i % 3 == 0){
		value = "Fizz";
	}
	if (i % 5 == 0){
		value = (value == i) ? "Buzz" : value += "Buzz";
	}
	console.log(value);
}

// Треугольник #
value = ""
for (var i = 1; i <= 7; i++) {
value += "#"
	console.log(value);
}

// Шахматная доска
value = "";
var grid = "#";
for (var i = 0; i <= 64 - 9; i++) {
	if (i % 7 == 0) {
		value += "\n" + grid;	
	}
	grid = (grid == " ") ? "#" : " ";	
	value += grid;
}
console.log(value);