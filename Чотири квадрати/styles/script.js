const getS = (selector) => document.querySelector(selector);

let items = document.querySelectorAll('.wrapper__item');

for (const li of items) {
    li.style.backgroundColor = 'red';
}

let index = 0;

items[0].style.backgroundColor = 'yellow';

getS('.wrapper__btn').addEventListener('click', function() {
    items[index].style.backgroundColor = 'red';
    index++;
    
    if (index === items.length) {
        index = 0;
    }
    
    items[index].style.backgroundColor = 'yellow';
});
