'use strict';
/* Написать функцию loop, которая будет принимать параметры: times (значение по
 умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз),
 вызывать функцию callback. Если функцию не передана, то цикл не должен
 отрабатывать ни разу. Покажите применение этой функции
 */
(function () {
  console.log('---task1---');
  const loop = (times, callback = null) => {
    if (!callback) return console.log('break loop');
    if (!isNum(times)) times = 0;
    for (let i = 0; i < times; i++) {
      callback();
    }
  };

  loop(0, () => console.log('test'));
  loop(2, () => console.log('test2'));
  loop(2);

  function isNum(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
  }
})();

/* Написать функцию calculateArea, которая будет принимать параметры, для
 вычисления площади (можете выбрать какую то конкретную фигуру, а можете,
 основываясь на переданных параметрах, выполнять требуемый алгоритм
 вычисления площади для переданной в параметрах фигуры) и возвращать объект
 вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры,
 для которой вычислялась площадь, input - входные параметры, по которым было
 произведено вычисление.
 */
(function () {
  console.log('---task2---');
  function calculateArea(figure) {
    const params = [].slice.call(arguments, 1);
    let area;
    let input;

    if (params.length < 1){
      console.log('Wrong params!');
      return {};
    }

    switch(figure.toLowerCase()){
      case 'circle': {
        area = Math.pow(params[0], 2) * 3.14 ;
        input = 'Радиус: ' + params[0];
        break;
      }
      case 'rectangle': {
        area = params[0] * params[1];
        input = 'Сторона А: ' + params[0] + '; Сторона Б: ' + params[1];
        break;
      }
      default: {
        console.log('Unknown figure');
        return {};
      }
    }

    return {
      'figure': figure,
      'input': input,
      'area': area
    }
  }

  console.log(calculateArea('rectangle', 2, 4));
  console.log(calculateArea('circle', 3));
  console.log(calculateArea('circle'));
  console.log(calculateArea('unknown', 2));

})();