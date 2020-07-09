let screen = document.getElementById('screen');
let keys = document.getElementsByClassName('key');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');


for(let i=0;i<keys.length;i++) {
    console.log(keys[i].innerText);

    keys[i].addEventListener('click' , () => {
        screen.innerText += keys[i].innerText;
    });
}


clear.addEventListener('click' , () => {
    screen.innerText = '';
});

equal.addEventListener('click' , () => {
    screen.innerText = eval(screen.innerText);
});