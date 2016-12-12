var users = [
	{
		firstName: 'Dmitry',
		lastName: 'Kozlov',
		birthDay: '16.07.1990',
		phones: [
			'89001234567',
			'83431234567'
		]
	},
	{
		firstName: 'Ivan',
		lastName: 'Petrov',
		birthDay: '08.06.1956',
		phones: [
			'89001234567',
			'83431234567'
		]
	}	
]

// Добавление пользователя вручную:
// var user = {};
// user.firstName = prompt("Введите имя");
// user.lastName = prompt("Введите фамилию");
// user.birthDay = prompt("Введите дату рождения");
// user.phones = [];
// user.phones[0] = prompt("Введите номер телефона");
// users.push(user);

for (var i = 0; i < users.length; i++) {
	console.log("Имя: " + users[i].firstName + " Фамилия: " + users[i].lastName + " Дата рождения: " + users[i].birthDay + " Телефоны: " + users[i].phones);
};

// Продолжаем делать адресную книгу. Вынесем код по созданию пользователя в отдельную
// функцию, чтобы добиться большей универсальности и в дальнейшем использовать эту функцию
// повторно:
function​ addUser(users) {
	var​ user = {};
	user.firstName = prompt​('Введите имя:');
	user.lastName = prompt​('Введите фамилию:');
	user.birthDay = prompt​('Дату рождения:');
	user.phones = [];
	while​ (true​) {
		var​ phone = prompt​('Номер телефона:(для выхода введите пустой номер)');
		if​ (!phone) break​;
		user.phones.push(phone);
	}
	users.push(user);
}
// Кроме того, часто в адресных книгах существует функция выгрузки все контактов в файл. Очень
// часто в качестве формата такой выгрузки используется формат csv. Попробуем реализовать
// функцию выгрузки адресной книги в формате csv:
function​ csvFormat(users) {
	return​ users.map(function​(user) {
	return​ Object.keys(user).map(function​(key) {
	if​(typeof​ user[key] == 'string' || typeof​ user[key] == 'number')
return​ '"' + user[key] + '"';
	else​ return​ user[key].map(function​(phone) { return​ '"' + phone + '"';
}).join​(';');
	}).join​(';');
	}).join​('\r\n');
}

