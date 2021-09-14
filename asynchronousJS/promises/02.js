const wordnikWords = '';
const apiKey = '';

fetch(wordnikWords + "randomWord" + apiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.word);
        return fetch(wordnikWords + data.word + "/definitions" + apiKey);
    })
    .then(function (def) {
        return def.json();
    })
    .then(function (def) {
        console.log(def);
    }).catch(function (err) {
        console.log('Error occured', err);
});

console.log("this is asnych code")