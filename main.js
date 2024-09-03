fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        for (const user of users) {
            console.log(user)
            const userBloc = document.createElement('div')
            userBloc.style.border = '1px solid black'
            userBloc.style.width = '250px'
            userBloc.style.display = 'flex'
            userBloc.style.justifyContent = 'centre'
            userBloc.style.alignItems = 'centre'
            userBloc.style.flexDirection = 'column'
            userBloc.style.padding = '10px'

            const bazInformUser = document.createElement('h3')
            bazInformUser.innerText = `${user.id}. ${user.name}`

            const butForUser = document.createElement('button')
            butForUser.innerText = 'User details'
            butForUser.onclick = () => {
                open('http://localhost:63342/Final_Project_JS/user-details.html')


            }
            userBloc.append(bazInformUser, butForUser);
            document.body.append(userBloc)
        }
    });



// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку
// user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на
// сторінку, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)





// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(value => value.json())
//     .then(user => fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id))
//     .then(response => response.json())
//     .then(value => console.log(value));
////////////////////////////////////////////////////////////или

// async function fetchPostsOfUser(userId) {
//     let user = await fetch('https://jsonplaceholder.typicode.com/users/' + userId).then(value => value.json());
//     console.log(user);
//     let posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id).then(value => value.json());
//     console.log(posts);
//     // return new Promise((resolve)=> {
//     //     resolve(true);
//     // });
//     return true;
// }
