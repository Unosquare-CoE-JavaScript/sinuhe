const button = document.querySelector('button');

function add(n1: number, n2: number) {
    if (n1 > n2) {
        return n1 + n2;
    }
    return;
}

function clickHandler(msg: string) {
    // let user = 'sinuhe';
    console.log('Clicked', msg);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'hi'));
}