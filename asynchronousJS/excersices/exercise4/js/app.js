var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    Change this code so that it uses Promise.all to respond once all of the promises have returned. Provide a notification to the console when the promises have completed.
    */
    let promisePosts = fetch(url + 'posts/').then(response1 => response1.json())

    let promiseComments = fetch(url + 'comments/').then(response2 => response2.json())

    let promiseTodos = fetch(url + 'todos/').then(response3 => response3.json())

    Promise.all([
        promisePosts,
        promiseComments,
        promiseTodos,
    ]).then(function (result) {
        nsp.posts = result[0];
        nsp.comments = result[1];
        nsp.todos = result[2];

        console.log('Data received!')
    }).catch(err => console.log('Error', err))

    

    //public
    return nsp;
})(MAINAPP || {});