'use strict';
function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
/* Написать функцию loop, которая будет принимать параметры: times (значение по
 умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз),
 вызывать функцию callback. Если функцию не передана, то цикл не должен
 отрабатывать ни разу. Покажите применение этой функции
 */
(function () {
  console.log('---task1---');
  const loop = (times, callback = null) => {
    if (!callback || typeof callback !== 'function') return console.log('break loop');
    if (!isNum(times)) times = 0;
    try {
      for (let i = 0; i < times; i++) {
        callback();
      }
    } catch (e) {
      console.log('callback Error! \n' + e.message);
    }
  };

  loop(0, () => console.log('test'));
  loop(2, () => console.log('test2'));
  loop(2);
  loop(2, () => ERROR());
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
  console.log('\n---task2---');
  function calculateArea(figure, ...params) {
    // const params = [].slice.call(arguments, 1);
    let area;
    let input;

    if (params.length < 1) {
      console.log('Wrong params!');
      return {};
    }

    switch (figure.toLowerCase()) {
      case 'circle': {
        area = Math.pow(params[0], 2) * Math.PI;
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
  console.log(calculateArea('unknown', null));
})();

/* Необходимо написать иерархию классов вида:
 Human -> Employee -> Developer
 Human -> Employee -> Manager
 Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников
 (разработчиков), а также методы по удалению/добавлению разработчиков.
 Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для
 изменения менеджера (имеется ввиду возможность назначить другого менеджера).
 У класса Human должны быть следующие параметры: name (строка), age (число),
 dateOfBirth (строка или дата)
 У класса Employee должны присутствовать параметры: salary (число), department
 (строка)
 В классе Human должен присутствовать метод displayInfo, который возвращает строку
 со всеми параметрами экземпляра Human.
 В классе Employee должен быть реализовать такой же метод (displayInfo), который
 вызывает базовый метод и дополняет его параметрами из экземпляра Employee
 Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo
 класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс
 Human и вернет строку с параметрами Human'a.
 */

(function () {
  console.log('\n---task3---');
  class List {
    constructor() {
      this.list = [];
    }
    getList() {
      return this.list;
    }
    addItem(item){
      this.list.push(item);
    }
    removeItem(i){
      this.list.splice(i, 1);
    }
  }

  const managersList = new List();

  class Human {
    constructor(name, age, dateOfBirth) {
      this.name = name;
      this.age = age;
      this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
      return `Имя: ${this.name}; Возраст: ${this.age}; Дата рождения: ${this.dateOfBirth}`
    }
  }

  class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
      super(name, age, dateOfBirth);
      this.salary = salary;
      this.department = department;
    }

    displayInfo() {
      return super.displayInfo() + `; Зарплата: ${this.salary}; Отдел: ${this.department}`
    }
  }

  class Developer extends Employee {
    constructor(manager, name, age, dateOfBirthday, salary = 10000, department = 'IT') {
      super(name, age, dateOfBirthday, salary, department);
      this.myManager = manager;
    }

    changeManager(i) {
      const myIndex = this.myManager.developers.list.indexOf(this);
      this.myManager.developers.removeItem(myIndex);
      this.myManager = managersList.getList()[i];
      this.myManager.developers.addItem(this);
    }
  }

  class Manager extends Employee {
    constructor(name, age, dateOfBirthday, salary = 15000, department = 'Boss') {
      super(name, age, dateOfBirthday, salary, department);
      this.developers = new List();
      managersList.addItem(this);
    }

    addDev(name, age, dateOfBirthday, salary = 10000) {
      const newDev = new Developer(this, name, age, dateOfBirthday, salary);
      this.developers.addItem(newDev);
      return newDev;
    }

    removeDev(i) {
      this.developers.removeItem(i);
    }
  }

  const mrPoet = new Manager('Alexandr Sergeevich', 218, '06.06.1799', 30000);
  const manager2 = new Manager('Manager2', 48, '01.01.1970');
  const dev1 = mrPoet.addDev('Dev1', 28, '01.01.1990', 40000);
  const dev2 = mrPoet.addDev('Dev2', 40, '01.01.1978');
  const dev3 = mrPoet.addDev('Dev3', 18, '01.01.2000', 20000);
  const dev4 = mrPoet.addDev('Dev4', 18, '01.01.2000', 20000);

  console.log('mrPoet.displayInfo(): ', mrPoet.displayInfo());
  mrPoet.removeDev(1);
  console.log('manager of dev3 before change: ',dev3.myManager);
  dev3.changeManager(1);
  console.log('manager2 developers', manager2.developers.getList());
  console.log('manager of dev3 after change: ',dev3.myManager);
  console.log('devList of mrPoet after all changes:', mrPoet.developers.getList());
})();