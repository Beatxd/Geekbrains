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

for (var i = 0; i < users.length; i++) {
	console.log("Имя: " + users[i].firstName + " Фамилия: " + users[i].lastName + " Дата рождения: " + users[i].birthDay + " Телефоны: " + users[i].phones);
};

// function​ addUser(users) {
// 	var​ user = {};
// 	user.firstName = prompt​('Введите имя:');
// 	user.lastName = prompt​('Введите фамилию:');
// 	user.birthDay = prompt​('Дату рождения:');
// 	user.phones = [];
// 	while​ (true​) {
// 		var​ phone = prompt​('Номер телефона:(для выхода введите пустой номер)');
// 		if​ (!phone) break​;
// 		user.phones.push(phone);
// 	}
// 	users.push(user);
// }
function​ addUser(users) {
	var​ user = {};
	user.firstName = document.getElementById(firstName);
	user.lastName = document.getElementById(lastName);
	user.birthDay = document.getElementById(birthDay);
	// user.phones = [];
	// user.phones.push(document.getElementById(phone1));
	// if(typeof document.getElementById(phone2) != 'undefined') {user.phones.push(document.getElementById(phone2))}
	users.push(user);
	console.log(users);
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

// Продолжаем адресную книгу:
// 1. Добавить всем пользователям id (поле, по которому пользователя можно уникально
// идентифицировать).
// 2. Переписать метод добавления таким образом, чтобы id генерировался автоматически (например,
// порядковый номер)
// 3. Добавить метод удаления пользователей
