// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(data => data.json())
// .then(obj => console.log(obj))
//     .catch(err => console.log(err))

let todo = {
    completed: false,
    userId: 1,
    title: 'Learn prmises'
};

fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
    .then(resp => resp.json())
    .then(obj => console.log(obj))
    .catch(error => console.log('Unable to post', error))

console.log('other code');