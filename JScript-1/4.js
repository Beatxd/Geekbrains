// Первая часть
function min(a, b){
	var result = (a <= b) ? a : b;
	return result;
}
console.log(min(3, 10));
console.log(min(0, -10));

// Вторая часть
// Символ номер N строки можно получить, добавив к ней .charAt(N) (
// “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи
// .length. Возвращаемое значение будет строковым, состоящим из одного
// символа (к примеру, “к”). У первого символа строки позиция 0, что означает,
// что у последнего символа позиция будет string.length – 1. Другими словами, у
// строки из двух символов длина 2, а позиции её символов будут 0 и 1.Напишите
// функцию countBs, которая принимает строку в качестве аргумента, и
// возвращает количество символов “B”, содержащихся в строке.Затем напишите
// функцию countChar, которая работает примерно как countBs, только принимает
// второй параметр — символ, который мы будем искать в строке (вместо того,
// чтобы просто считать количество символов “B”). Для этого переделайте
// функцию countBs.
function countBs(string){
	string = string.toUpperCase();
	var result = 0;
	for (var i = string.length - 1; i >= 0; i--) {
		result += (string[i] == "В" || string[i] == "B") ? 1 : 0; //Латинская и кириллица
	}
	return result;
}
a = countBs("Вкуснейшие вафли в форме BigBan");
console.log("Количество 'B' = " + a);

function countChar(string, smbl){
	string = string.toUpperCase();
	while (smbl.length > 1) {
		smbl = prompt("Вы ввели больше одного символа, введите искомый символ");
	}
	smbl = smbl.toUpperCase();
	var result = 0;
	for (var i = string.length - 1; i >= 0; i--) {
		result += (string[i] == smbl) ? 1 : 0;
	}
	return result;
}
quest = prompt("Введите строку");
ansvr = prompt("Какой символ искать?")
b = countChar(quest, ansvr);
console.log("Количество искомых символов = " + b);