const  poro = document.querySelectorAll('.poro')

poro.forEach(function(poro){
    poro.style.background = 'red';
    poro.style.color = '#ffff';
    poro.style.padding = '10px';

    // change a text
    poro.textContent = 'I love coding is part of my life '

})

const dp = document.querySelectorAll('.dp')
 
dp.forEach(function(dp){
    dp.style.background = 'red';
    dp.style.color = '#fff';
    dp.style.padding = '20px';
    dp.textContent = 'coding is what i choose '

})


// console.log(newLink);

// newLink.className = 'link';

// newLink.href = 'index.html';
const newLink = document.createElement('a');
newLink.appendChild( document.createTextNode('New link') );

document.querySelector('.poro').appendChild(newLink);


// How to remove Event



const mege = document.querySelectorAll('.mege')

mege[2].remove();


console.log(mege)
