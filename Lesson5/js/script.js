let item = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu"),
    picture = document.getElementsByTagName("body"), // для начала создаем переменную тела документа
    headdoc = document.getElementById('title'),// сощаем переменную для обращения к заголовку через id
    box = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    text = document.querySelector('.prompt');

    text.textContent = prompt(' Как вы относитесь к технике apple')//вводим данные от пользователя

    menu.insertBefore(item[1], item[3]);// меняем местами второй с третьим

    document.body.style.background = 'url(img/apple_true.jpg)' // меняем фон

    title.innerHTML = 'Мы продаем только подлинную технику Apple '; // Вписываем свой текст в заголовок
   	column[1].removeChild(box);


//создаем 5 пункт

let paragraph = document.createElement('li');
    paragraph.textContent = 'Пятый пункт';
    paragraph.classList.add('menu-item');
    menu.appendChild(paragraph)