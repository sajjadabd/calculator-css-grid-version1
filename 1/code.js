let keys = document.querySelectorAll('.key');
let screen = document.getElementById('screen');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');

let text = '';

keys.forEach( (key) => {
    // console.log(key);
    key.addEventListener('click' , (e) => {
        //console.log(e.target.innerText);
        text += e.target.innerText;
        screen.innerText = text;
    });
})


equal.addEventListener('click' , () => {
    text = screen.innerText = eval(text);
});

clear.addEventListener('click' , () => {
    text = '';
    screen.innerText = '';
});