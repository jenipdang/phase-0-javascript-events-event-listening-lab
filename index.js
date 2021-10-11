// const input = document.getElementById('input')

// function addingEventListener() {
//     alert('Hee hee, that tickles!')
// }

// input.addEventListener('click', addingEventListener)

const input = document.getElementById('input')

function addingEventListener() {
    input.addEventListener('click', function(){
        alert('I was clicked!')
    })
}

addingEventListener();

