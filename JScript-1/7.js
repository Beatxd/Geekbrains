// Первая часть
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
		// if (i == 1 || i == 2){
		// 	newTr.className = 'white' // задаем цвета фигурам
		// }
		// if (i == 7 || i == 8){
		// 	newTr.className = 'black';
		// }
		
		for (var i2 = 1; i2 <= 8; i2++) {
			var newTd = chess.lastChild.lastChild.appendChild(document.createElement('td'));
			newTd.id = arrSbl[i2-1] + i; // присвоив айди каждой ячейке, облегчаем себе жизнь для любых задач с доской
		}
	}
	var newSpan = chess.appendChild(document.createElement('span'));
	newSpan.innerHTML = 'ABCDEFGH';
	
	// Вторая часть: Заполнение фигрурами
	a2.innerHTML = '&#9817;';
	var count = a2.nextElementSibling
	for(var i = 0; i < 7; i++){
		count.innerHTML = '&#9817;';
		count = count.nextElementSibling;
	}
	a7.innerHTML = '&#9823;';
	count = a7.nextElementSibling
	for(var i = 0; i < 7; i++){
		count.innerHTML = '&#9823;';
		count = count.nextElementSibling;
	}
	var figuresW = ['&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;'];
	a1.innerHTML = figuresW[0];
	count = a1.nextElementSibling
	for(var i = 1; i < 8; i++){
		count.innerHTML = figuresW[i];;
		count = count.nextElementSibling;
	}
	figuresB = ['&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;'];
	a8.innerHTML = figuresB[0];
	count = a8.nextElementSibling
	for(var i = 1; i < 8; i++){
		count.innerHTML = figuresB[i];;
		count = count.nextElementSibling;
	}
}
function playChess() {
	
}

board();
