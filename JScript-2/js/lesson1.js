/* Разработать класс, генерирующий шахматную доску на странице.
 Конструктор в качестве параметра должен принимать селектор элемента
 в котором должна создаться доска, либо DOM Node. При этом должна быть
 возможность подписаться на события доски через созданный объект
 (не напрямую к DOM Node, а именно извне используя только объект доски),
 получения и установки координаты активной ячейки (шахматной координаты вида “A1”).
 Для генерации доски можно использовать произвольные html-тэги.
 Подумать какие свойства должны быть скрыты, а какие нет решение аргументировать
 в комментариях к коду. */
// function CreateBoard() {
//     var chessBoard = document.body.appendChild(document.createElement('div'));
//     chessBoard.className='chessCreate';
//     var letters = document.body.appendChild(document.createElement('div'));
//     letters.className='chessLetter';
//     letters.innerText = 'ABCDEFGH';
//     var i = 0, count = 0;
//     while (count < 64) {
//         var cell = document.createElement('div');
//         chessBoard.appendChild(cell);
//         cell.className='cell';
//         // if (i && i % 2) cell.className='blackCell';
//         if (i && i % 2) cell.classList.add('blackCell');
//         i += ((i + 2) % 9) ? 1 : 2;
//         count++;
//     }
//
// }
function CreateBoard() {
    var chessBoard = document.body.appendChild(document.createElement('div'));
    chessBoard.className='chessCreate';

    var i = 0, count = 0;
    var numberCount = 8;
    var letterCount = 1;
    var letters = ' ABCDEFGH';

    while (count < 64 + 17) {
        var cell = document.createElement('div');
        chessBoard.appendChild(cell);
        cell.className = 'cell';
        // if (i && i % 2) cell.className='blackCell';
        if (!(i && i % 2)) cell.classList.add('blackCell');
        if (!((i + 9) % 9)) {
            cell.classList.add('chessLetter');
            if (numberCount > 0) cell.innerText = numberCount;
            numberCount--;
        }
        if (i + 1 > 72) {
            cell.classList.add('chessLetter');
            if (letterCount <= 8) cell.innerText = letters[letterCount];
            letterCount++;
        }
        // i += ((i + 2) % 70) ? 1 : 2;
        i++;
        count++;
    }

}
CreateBoard();



