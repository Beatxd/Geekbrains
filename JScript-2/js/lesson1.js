/* Разработать класс, генерирующий шахматную доску на странице.
 Конструктор в качестве параметра должен принимать селектор элемента
 в котором должна создаться доска, либо DOM Node. При этом должна быть
 возможность подписаться на события доски через созданный объект
 (не напрямую к DOM Node, а именно извне используя только объект доски),
 получения и установки координаты активной ячейки (шахматной координаты вида “A1”).
 Для генерации доски можно использовать произвольные html-тэги.
 Подумать какие свойства должны быть скрыты, а какие нет решение аргументировать
 в комментариях к коду. */
function CreateBoard() {
    var chessBoard = document.body.appendChild(document.createElement('div'));
    chessBoard.className='chessCreate';
// var chessBoard = document.querySelector('.chessCreate');
    var i = 0, count = 0;

    while (count < 64) {
        var cell = document.createElement('div');
        chessBoard.appendChild(cell);
        cell.classList.add('cell');
        if (i && i % 2) cell.classList.add('blackCell');
        i += ((i + 2) % 9) ? 1 : 2;
        count++;
    }
}
CreateBoard();



