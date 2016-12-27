but.onclick = function countRabbits() {
	for(var i=1; i<=3; i++) {
		alert("Кролик номер " + i);
	}
}
function handler1() {
	alert('Спасибо!');
	event.preventDefault();
};
function handler2() {
	alert('Спасибо ещё раз!');
}
elem.onclick = function() { alert("Привет"); };
elem.addEventListener("contextmenu", handler1); // Спасибо!
elem.addEventListener("click", handler2); // Спасибо ещё

fals.onclick = function false1(){
	return false;
}

// elem.onclick = function(event11) {
// 	// вывести тип события, элемент и координаты клика
// 	alert(event11.type + " на " + event11.currentTarget);
// 	alert(event11.clientX + ":" + event11.clientY);
// }
