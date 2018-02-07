'use strict';
(function (container, question, answer, btn) {
  function getUserData(container, question, answer, btn) {
    function* gen(question, answer) {
      question.innerText = 'Укажите свой возраст';
      answer.placeholder = '18';
      yield;
      const age = answer.value;
      question.innerText = 'Ваше имя?';
      answer.value = '';
      answer.placeholder = 'Иван';
      yield;
      const name = answer.value;
      question.innerText = 'Ваш адрес?';
      answer.value = '';
      answer.placeholder = '190000, Город, Улица, Дом';
      yield;
      return {
        'name': name,
        'age': age,
        'address': answer.value
      }
    }

    const generator = gen(question, answer);
    generator.next();

    btn.addEventListener('click', () => {
      let result = generator.next();
      if (result.done === true) console.log(result.value);
    });

  }

  getUserData(container, question, answer, btn);

})(document.getElementById('container'), document.getElementById('question'),
  document.getElementById('answer'), document.getElementById('sendBtn'));