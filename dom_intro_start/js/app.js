console.log('app loaded:', window);

document.addEventListener('DOMContentLoaded', ()=>{
    // const title = document.querySelector('h1');
    // title.textContent = "Javascript is fun!";

    // const welcome = document.querySelector('#welcome-paragraph');
    // welcome.textContent = 'This is a welcome para';
    // console.log(welcome);
    // console.dir(welcome);



    // const redElement = document.querySelector('.red');
    // console.log(redElement);

    // const redListItem = document.querySelector('li.red');
    // console.log(redListItem);

    // const allRedElements = document.querySelectorAll('.red');
    // console.dir(allRedElements);

    // const allListElements = document.querySelectorAll('li');
    // console.dir(allListElements);

    const redListItem = document.querySelector('li.red');
    redListItem.textContent = 'RED';
    redListItem.classList.add('bold');
    console.dir(redListItem);

    

    const newListItem = document.createElement('li');
    newListItem.textContent = 'Purple';
    newListItem.classList.add('purple');

    const list = document.querySelector('ul');
    list.appendChild(newListItem);
});



