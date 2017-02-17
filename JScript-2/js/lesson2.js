;(function () {
    'use strict';

    createListOfPhones();

    function createListOfPhones() {
        var phones;
        var ul = document.body.appendChild(document.createElement('ul'));
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'js/phones.json', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                console.log('Ошибка :' + xhr.status);
            } else {
                phones = JSON.parse(xhr.responseText);
                console.log(phones.length);
                for (var i = 0; i < phones.length; i++) {
                    var li = document.createElement('li');
                    ul.appendChild(li);
                    li.innerText = phones[i].name;
                }
            }
        };
    }

})();
