const counter = document.getElementById('counter');
const section = document.querySelector('.notification-body');
const alldots = section.querySelectorAll('span.dot');
const allbackgrounds = section.querySelectorAll('div.unread-notification');

console.log(alldots);

counter.innerHTML = '3';


function readall() {
    allbackgrounds.forEach(section => {
       section.style.backgroundColor = '#fff';
    })
    alldots.forEach(section => {
        section.style.display = 'none';
    });
    counter.innerHTML = '0';
}

