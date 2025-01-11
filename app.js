let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');

let prev = document.getElementById('prev');
let next = document.getElementById('next');





let active = 0;
let lengthItems = items.length - 1;

//кнопка NEXT

next.onclick = function(){
    //создание непрерывного NEXT 
    if (active + 1 > lengthItems){
        active = 0;
    }else {
        active = active + 1;
    }
    //active += 1;
    reloadSlider();
}
//кнопка PREV
prev.onclick =function(){
    if(active -1 < 0){
        active =lengthItems;
    }else{
        active = active -1;
    }
    reloadSlider();
}

//Автоматический переход слайдов
//let refreshSlider = setInterval(()=> {next.click()}, 5000);


//Основной Функционал Кнопок
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    //фиксация нижней кнопки
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');

    //добавление кнопки в каждый следующий блок
    dots[active].classList.add('active');

    //Прерывание Интервала при нажатии и его восстановаление во времени
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000);
}


//Функционал нижних кнопок 
dots.forEach((li,key)=>{
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})