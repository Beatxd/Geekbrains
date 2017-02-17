
// Восьмое ДЗ
// Создание доски
function board() { 
	chess.appendChild(document.createElement('ul'));
	var arrSbl = ['a','b','c','d','e','f','g','h'];
	for (var i = 8; i >= 1; i--) {
		var newLi = chess.lastChild.appendChild(document.createElement('li'));
		newLi.innerHTML = i;
	}
	chess.appendChild(document.createElement('table'));

	for (var i = 8; i >= 1; i--) {
		var newTr = chess.lastChild.appendChild(document.createElement('tr'));

		for (var i2 = 1; i2 <= 8; i2++) {
			var newTd = chess.lastChild.lastChild.appendChild(document.createElement('td'));
			newTd.id = arrSbl[i2-1] + i; // присвоив айди каждой ячейке, облегчаем себе жизнь для любых задач с доской
			newTd.addEventListener("click", select);
			newTd.addEventListener("keydown", arrowButtons);
		}
	}
	var newSpan = chess.appendChild(document.createElement('span'));
	newSpan.innerHTML = 'ABCDEFGH';
	
	//Заполнение фигрурами
	a2.innerHTML = '&#9817;';
	var count = a2.nextElementSibling;
	for(var i = 0; i < 7; i++){
		count.innerHTML = '&#9817;';
		count = count.nextElementSibling;
	}
	a7.innerHTML = '&#9823;';
	count = a7.nextElementSibling;
	for(var i = 0; i < 7; i++){
		count.innerHTML = '&#9823;';
		count = count.nextElementSibling;
	}
	var figuresW = ['&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;'];
	a1.innerHTML = figuresW[0];
	count = a1.nextElementSibling;
	for(var i = 1; i < 8; i++){
		count.innerHTML = figuresW[i];
		count = count.nextElementSibling;
	}
	figuresB = ['&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;'];
	a8.innerHTML = figuresB[0];
	count = a8.nextElementSibling
	for(var i = 1; i < 8; i++){
		count.innerHTML = figuresB[i];;
		count = count.nextElementSibling;
	}
	var kletka = chess.appendChild(document.createElement('div'));
	kletka.id = 'kletka'
}
//Выделение клеток и вывод айди выделенной ячейки
function arrowButtons(event){
	this.innerHTML = event.keyCode;
		if(event.keyCode == "37"){
			alert('left');
		}
		alert('no');
	}
function select(){	
	if(kletka.innerHTML != ""){
		document.getElementById(kletka.innerHTML).style.backgroundColor = '';
	}
	kletka.innerHTML = this.id;
	this.style.backgroundColor = 'red';
	
	// .addEventListener("click", select);
}

// Используя результаты домашнего задания к предыдущему уроку, выполнить следующее. При
// щелчке мышью на любую клетку доски – необходимо писать ее адрес в произвольное место
// страницы, например, в div. Адрес должен извлекаться в «шахматном» формате. Например: A1,
// G6 и тп. При этом, ячейка, на которую нажали должна помечаться произвольным образом,
// например, выделением рамки или другим цветом. При выделении другой ячейки, предыдущая
// должна возвращаться к первоначальному виду.



// but.onclick = function countRabbits() {
// 	for(var i=1; i<=3; i++) {
// 		alert("Кролик номер " + i);
// 	}
// }
// function handler1() {
// 	alert('Спасибо!');
// 	event.preventDefault();
// };
// function handler2() {
// 	alert('Спасибо ещё раз!');
// }
// elem.onclick = function() { alert("Привет"); };
// elem.addEventListener("contextmenu", handler1); // Спасибо!
// elem.addEventListener("click", handler2); // Спасибо ещё

// fals.onclick = function false1(){
// 	return false;
// }

// elem.onclick = function(event11) {
// 	// вывести тип события, элемент и координаты клика
// 	alert(event11.type + " на " + event11.currentTarget);
// 	alert(event11.clientX + ":" + event11.clientY);
// }

board();