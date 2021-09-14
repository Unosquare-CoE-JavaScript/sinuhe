"use strict";

let arr = ['a', 'b', 'c', 'd'];

let it = arr[Symbol.iterator]();

let domDiv = document.querySelectorAll('div');

let str = 'string';

let obj = {
    1: 'one',
    2: 'two',
    3: 'three'
};

obj[Symbol.iterator] = function *() {
    for (let i = 0; i < 4; i ++) {
        yield this[i];
    }
};



for (let v of obj) {
    console.log(v);
}