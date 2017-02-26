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
    title.innerText = options.name || 'Точное время:';
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
        intervalID = setInterval(getTime, 1000);
    };
    this.stop = function () {
        clearInterval(intervalID);
    };
}

var voter1 = new Voter({elem: 'div', name: 'Голосование №1:'});
voter1.setVote(15);
voter1.setVote('asd');

function Voter(options) {
    var elem = document.body.appendChild(document.createElement(options.elem));
    elem.id = 'widgetVoter';
    var title = elem.appendChild(document.createElement('span'));
    title.className = 'widgetTitle';
    title.innerText = options.name || 'Голосование:';

    // widget body
    var voter = elem.appendChild(document.createElement('div'));
    voter.className = 'voter';
    voter.id = 'voter';
    var down = voter.appendChild(document.createElement('span'));
    down.className = 'down';
    down.innerText = '—';
    var vote = voter.appendChild(document.createElement('span'));
    vote.className = 'vote';
    var voteCount = 0;
    vote.innerText = voteCount;
    var up = voter.appendChild(document.createElement('span'));
    up.className = 'up';
    up.innerText = '+';
    // end widget body

    up.addEventListener('click', function () {
        voteCount++;
        vote.innerText = voteCount;
    });
    down.addEventListener('click', function () {
        voteCount--;
        vote.innerText = voteCount;
    });

    this.setVote = function (num) {
        if (num >= 0 || num < 0 ) {
            voteCount = num;
            return vote.innerText = num;
        }
        console.log('setVote(Ввели не число)');
    }
}
// <div id="voter" class="voter">
//     <span class="down">—</span>
//     <span class="vote">0</span>
//     <span class="up">+</span>
// </div>
// voter.setVote(vote)