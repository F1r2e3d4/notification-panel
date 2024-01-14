const counter = document.getElementById('counter');
const unmarkall = document.getElementById('clear-notifications');
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
    counter.style.display = 'none';
}

function unmarked1(){
    allbackgrounds[0].style.backgroundColor = '#fff'
    alldots[0].style.display = 'none'
        // if ((allbackgrounds[0].style.backgroundColor != '#fff') && (allbackgrounds[2].style.backgroundColor = '#fff')){
    //     counter.innerHTML = '2';
    // }  
    // else if ((allbackgrounds[0].style.backgroundColor = '#fff') && (allbackgrounds[2].style.backgroundColor != '#fff')){
    //     counter.innerHTML = '2';
    // }
}

function unmarked2(){
    allbackgrounds[1].style.backgroundColor = '#fff'
    alldots[1].style.display = 'none'
    // if ((allbackgrounds[0].style.backgroundColor != '#fff') && (allbackgrounds[2].style.backgroundColor = '#fff')){
    //     counter.innerHTML = '2';
    // }  
    // else if ((allbackgrounds[0].style.backgroundColor = '#fff') && (allbackgrounds[2].style.backgroundColor != '#fff')){
    //     counter.innerHTML = '2';
    // }

}
function unmarked3(){
    allbackgrounds[2].style.backgroundColor = '#fff'
    alldots[2].style.display = 'none';
    // if ((allbackgrounds[1].style.backgroundColor != '#fff') && (allbackgrounds[0].style.backgroundColor = '#fff')){
    //     counter.innerHTML = '2';
    // }  
    // else if ((allbackgrounds[1].style.backgroundColor = '#fff') && (allbackgrounds[0].style.backgroundColor != '#fff')){
    //     counter.innerHTML = '2';
    // }
}
allbackgrounds[0].addEventListener('click', unmarked1);
allbackgrounds[1].addEventListener('click', unmarked2);
allbackgrounds[2].addEventListener('click', unmarked3);

 