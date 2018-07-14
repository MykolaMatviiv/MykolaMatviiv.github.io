Запуск демо-проекта

1. Проверить, что инстанс MongoDB запущен
1. Установить зависимости
```npm install```
2. Запустить сервер
```npm start```

Через Postman сделать GET запрос к базе
```localhost:1428/api/user```

Поскольку база пустая - будет возвращен пустой массив, можете заполнить своими данными.



### Users
- Отримати всіх користувачів
GET: ```localhost:1428/api/user```
- Отримати користувача з id
GET: ```localhost:1428/api/user/?id=1```
- Створити користувача
POST: ```localhost:1428/api/user```
body JSON: 
{
	firstName: user_firstname,
	lastName: user_lastname,
}
- Оновити користувача
PUT: ```localhost:1428/api/user/?id=1```
body JSON: 
{
    firstName: user_firstname,
    lastName: user_lastname,
}
- Видалити користувача
DELETE: ```localhost:1428/api/user/?id=1```
- Отримати всіх коритсувачів х якими спілкувався користувач з id
GET: ```localhost:1428/api/user/chats/?id=1```

### Messeges
- Отримати всі повідомлення
GET: ```localhost:1428/api/messege``` 
- Отримати повідомлення з id
GET: ```localhost:1428/api/messege/?id=1```
- Створити повідомлення
POST: ```localhost:1428/api/messege```
body JSON: 
{
    senderId: 1,
    receiverId: 1,
    body: text,
}
- Оновити повідомлення з id
PUT: ```localhost:1428/api/messege/?id=1```
body JSON:
{
    senderId: 1,
    receiverId: 1,
    body: text
}
- Видалити повідомлення
DELETE: ```localhost:1428/api/messege/?id=1```