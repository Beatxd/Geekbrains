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
		if (i == 1 || i == 2){
			newTr.className = 'white' // задаем цвета фигурам
		}
		if (i == 7 || i == 8){
			newTr.className = 'black';
		}
		for (var i2 = 1; i2 <= 8; i2++) {
			var newTd = chess.lastChild.lastChild.appendChild(document.createElement('td'));
			newTd.id = arrSbl[i2-1] + i; // присвоив айди каждой ячейке, облегчаем себе жизнь для любых задач с доской
		}
	}
	var newSpan = chess.appendChild(document.createElement('span'));
	newSpan.innerHTML = 'ABCDEFGH';
	
	// Вторая часть
	a2.innerHTML = 'П';
	var count = a2.nextElementSibling
	for(var i = 0; i < 7; i++){
		count.innerHTML = 'П';
		count = count.nextElementSibling;
	}
	a7.innerHTML = 'П';
	count = a7.nextElementSibling
	for(var i = 0; i < 7; i++){
		count.innerHTML = 'П';
		count = count.nextElementSibling;
	}
	var figures = ['Т','Кн','Л','Ф','Кр','Л','Kн','Т'];
	a1.innerHTML = figures[0];
	count = a1.nextElementSibling
	for(var i = 1; i < 8; i++){
		count.innerHTML = figures[i];;
		count = count.nextElementSibling;
	}
	a8.innerHTML = figures[0];
	count = a8.nextElementSibling
	for(var i = 1; i < 8; i++){
		count.innerHTML = figures[i];;
		count = count.nextElementSibling;
	}
}

board();


// var newLi = document.createElement('p');
//   newLi.innerHTML = 'Привет, мир!';

//   chess.appendChild(newLi);