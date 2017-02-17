;(function () {
    'use strict';
    createListOfPhones();

    window.fillFigures = fillFigures; // Доступ из index.html через модуль
    function createListOfPhones() {
        var phones;
        var ul = document.body.appendChild(document.createElement('ul'));
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'js/phones.json', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
            } else {
                phones = JSON.parse(xhr.responseText);
                for (var i = 0; i < phones.length; i++) {
                    var li = document.createElement('li');
                    ul.appendChild(li);
                    li.innerText = phones[i].name;
                }
            }
        };
    }

    function fillFigures() {
        var figures;
        var xhr = new XMLHttpRequest();
        var letters = "ABCDEFGH";

        xhr.open('GET', 'js/figures.json', true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) return;
            if (xhr.status != 200){
                console.log(xhr.status + ': ' + xhr.statusText);
            }else{
                figures = JSON.parse(xhr.responseText); // [{white},{black}]
                bFill(figures[0]); // black
                wFill(figures[1]); // white

            }
        };
        function bFill(obj){
            for(var i = 0; i < 8; i++) { // fill pawns
                var id = document.getElementById(letters[i] + "2");
                id.innerHTML = obj.pawn;
            }
            document.getElementById('A1').innerHTML = obj.castle;
            document.getElementById('B1').innerHTML = obj.knight;
            document.getElementById('C1').innerHTML = obj.bishop;
            document.getElementById('D1').innerHTML = obj.queen;
            document.getElementById('E1').innerHTML = obj.king;
            document.getElementById('F1').innerHTML = obj.bishop;
            document.getElementById('G1').innerHTML = obj.knight;
            document.getElementById('H1').innerHTML = obj.castle;
        }
        function wFill(obj){
            for(var i = 0; i < 8; i++) { // fill pawns
                var id = document.getElementById(letters[i] + "7");
                id.innerHTML = obj.pawn;
            }
            document.getElementById('A8').innerHTML = obj.castle;
            document.getElementById('B8').innerHTML = obj.knight;
            document.getElementById('C8').innerHTML = obj.bishop;
            document.getElementById('D8').innerHTML = obj.queen;
            document.getElementById('E8').innerHTML = obj.king;
            document.getElementById('F8').innerHTML = obj.bishop;
            document.getElementById('G8').innerHTML = obj.knight;
            document.getElementById('H8').innerHTML = obj.castle;
        }
    }

})();
