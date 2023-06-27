//код для вывода информации о монете по нажатию кнопки
var popupButtons = document.querySelectorAll('.popupButton');
var modals = document.querySelectorAll('.modal');
var closeButtons = document.querySelectorAll('.close');

popupButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        modals[index].style.display = 'block';
    });
});

closeButtons.forEach(function (closeButton, index) {
    closeButton.addEventListener('click', function () {
        modals[index].style.display = 'none';
    });
});
//код для выбора серии монет 
document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.getElementById('categories');
    var coinContainers = document.getElementsByClassName('name');
    

    selectElement.addEventListener('change', function () {
        var selectedCategory = selectElement.value;
        var quot = ' "';
        quot += selectedCategory;
        quot += '"';
        for (var i = 0; i < coinContainers.length; i++) {
            var coinContainer = coinContainers[i];
            var coinCategory = coinContainer.getAttribute('data-category');
           
            if (selectedCategory === '-1' || coinCategory === quot) {
                coinContainer.style.display = 'block'; quot = '';
            } else {
                coinContainer.style.display = 'none';
            }
            
        }
        console.log(coinCategory);
        console.log(quot);
    });
   
});

//код для просмотра орла/решки монеты по нажатию кнопки 
var images = document.querySelectorAll('.image');
var arrayHeads = [];
var arrayTails = [];
images.forEach(function (image) {
    var type = image.getAttribute('data-type');
    if (type === '1') {
        image.style.display = 'none';
        arrayHeads.push(image);
    }
    if (type === '2') {
        arrayTails.push(image);
    }
});
console.log(arrayTails.push);
var changeButtons = document.querySelectorAll('.changeButton');

changeButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        if (arrayHeads[index].style.display === 'none') {
            arrayHeads[index].style.display = 'block';
            arrayTails[index].style.display = 'none';
            button.textContent = 'Решка';
        } else {
            arrayHeads[index].style.display = 'none';
            arrayTails[index].style.display = 'block';
            button.textContent = 'Орёл';
        }
    });
});

