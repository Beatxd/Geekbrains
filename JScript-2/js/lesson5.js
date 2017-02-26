'use strict';
var clock = new Clock({
    elem: 'div'
});
// clock.stop(); // стоп
// clock.start(); // старт
function Clock(options) {
    var elem = document.body.appendChild(document.createElement(options.elem));
    elem.id = 'widgetClock';
    var title = elem.appendChild(document.createElement('span'));
    title.className = 'widgetTitle';
    title.innerText = 'Точное время:';
    var clock = elem.appendChild(document.createElement('div'));
    clock.className = 'widgetBody';
    var button = elem.appendChild(document.createElement('input'));
    button.type = 'button';
    button.value = 'Стоп/Старт';
    button.addEventListener('click', stopStart);
    var i = 1;
    function stopStart() {
        if (i % 2) {
            clearInterval(intervalID);
        } else {
            intervalID = setInterval(getTime, 1000);
        }
        i++;
    }

    function getTime() {
        var time = new Date();
        // всегда запрашиваем текущее время чтобы не зависеть от подлагов.
        clock.innerText = checkTime(time.getHours()) + ':' + checkTime(time.getMinutes()) + ':' + checkTime(time.getSeconds());
        function checkTime(i) {
            if (i < 10) i = "0" + i;
            return i;
        }
    }
    getTime();
    var intervalID = setInterval(getTime, 1000);
    this.start = function () {
        intervalID = setInterval(getTime, 1000)
    };
    this.stop = function () {
        clearInterval(intervalID)
    };
}
