"use strict";
/*
 ●	Разработать класс, генерирующий шахматную доску на странице.
 Конструктор в качестве параметра должен принимать селектор элемента
 в котором должна создаться доска, либо DOM Node. При этом должна быть
 возможность подписаться на события доски через созданный объект
 (не напрямую к DOM Node, а именно извне используя только объект доски),
 получения и установки координаты активной ячейки (шахматной координаты вида “A1”).
 Для генерации доски можно использовать произвольные html-тэги.
 Подумать какие свойства должны быть скрыты, а какие нет решение аргументировать
 в комментариях к коду.
 ●	Добавить базовый класс, который мог бы генерировать таблицы (доски) любого размера
 и унаследовать от него разработанный класс шахматной доски.
 ●	* Все то же самое с помощью ООП в прототипном стиле (разобраться самостоятельно).
 */
function ChessBoard(elmntSelector) {
    var chessBoard = document.body.appendChild(document.createElement(elmntSelector));

    chessBoard.className='chessCreate';

    var i = 0, count = 0;
    var numberCount = 8;
    var adressCount = 0;
    var letters = 'ABCDEFGH';
    // Процесс создания доски приватный, т.к. он не должен меняться.
    while (count < 64 + 17) { // 64 клетки + разметка
        var cell = document.createElement('div');
        chessBoard.appendChild(cell);
        cell.classList.add('cell');
        // Выделение по клику не срабатывает
        cell.addEventListener('click', this.setActive); // добавить функционал активации по клику
        addMarking();
        addBlackCell();
        addAdress();
        // cell.addEventListener("click", setActive(cell.id)); // не работает
        i++;
        count++;
    }
    // Доступ к выбранной по коду ячейке. Можем работать с объектом выбирая нужные ячейки.
    this.setActive = function setActive(id) {
        id = document.getElementById(id.toUpperCase());
        id.classList.add('active');
    };
    this.setInactive = function setInactive(id) {
        id = document.getElementById(id.toUpperCase());
        id.classList.remove('active');
    };
    // this.setActive = setActive(id);
    function addMarking(){
        if (!((i + 9) % 9)) {
            cell.classList.add('chessLetter');
            if (numberCount > 0) cell.innerText = numberCount--;
        }
        if (i + 1 > 72) {
            cell.classList.add('chessLetter');
            if (i >72 && numberCount < 8) cell.innerText = letters[numberCount++];
        }
    }
    function addBlackCell(){
        if (!(i && i % 2)) cell.classList.add('blackCell');
    }
    function addAdress(){
        if (i > 0 && i <= 8) {
            cell.id = letters[adressCount - 1] + 8;
        }
        if (i > 9 && i <= 17) {
            cell.id = letters[adressCount - 1] + 7;
        }
        if (i > 18 && i <= 26) {
            cell.id = letters[adressCount - 1] + 6;
        }
        if (i > 27 && i <= 35) {
            cell.id = letters[adressCount - 1] + 5;
        }
        if (i > 36 && i <= 44) {
            cell.id = letters[adressCount - 1] + 4;
        }
        if (i > 45 && i <= 53) {
            cell.id = letters[adressCount - 1] + 3;
        }
        if (i > 54 && i <= 62) {
            cell.id = letters[adressCount - 1] + 2;
        }
        if (i > 63 && i <= 71) {
            cell.id = letters[adressCount - 1] + 1;
        }
        adressCount++;
        if (adressCount > 8) adressCount = 0;

    }

}

var newBoard = new ChessBoard('div');
newBoard.setActive('A5'); // Установить активную ячейку, Текстом не указать. Ругается. Почему?
newBoard.setInactive('A5'); // Убрать активность ячейки
newBoard.setActive('e5');


// newBoard.setActive('a3'); // Через текст не получается. Почему?
// chessBoard2 = new CreateBoard('p');



