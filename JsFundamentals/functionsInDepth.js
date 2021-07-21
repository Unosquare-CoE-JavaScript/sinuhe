// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: project. Filter and then map this data structure to get the names of the
// final suspects to send back to the team
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const exercise1 = () => {
    console.log('Exercise: project. Filter and then map this data structure to get the names of the final suspects to send back to the team');

    const _ = {};

    _.each = (listOfElements, callbackFunction) => {
        if (Array.isArray(listOfElements)) {
            for (let i = 0; i < listOfElements.length; i ++) {
                callbackFunction(listOfElements[i], i, listOfElements)
            }
        } else {
            for (let key in listOfElements) {
                callbackFunction(listOfElements[key], key, listOfElements)
            }
        }
    }

    _.filter = (list, callback) => {
        let result = [];

        _.each(list, (element, index, list) => {
            if (callback(list[index], index, list)) {
                result.push(list[index])
            }
        });

        return result;
    }

    _.map = (list, callback) => {
        let result = [];
        let newElement;

        _.each(list, (element, index, list) => {
            newElement = callback(element, index, list)
            result.push(newElement)
        })

        return result;
    }

    const videoData = [
        {
            name: 'Miss Scarlet',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        },
        {
            name: 'Mrs. White',
            present: false,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        },
        {
            name: 'Reverend Green',
            present: false,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        },
        {
            name: 'Colonel Mustard',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': false},
                {library: false}
            ]
        }
    ];

    let suspectsNames = _.map(_.filter(videoData, (suspect, index, list) => suspect.present), (suspect, index, list) => {
        return suspect.name;
    })

    console.log('Suspects names:', suspectsNames)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: write the next function with ES5 notation
// const add = function(a, b = 2) {
// console.log(arguments);
//     return a + b;
// };
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const add = function (a, b) {
    b = b || 2;

    console.log(arguments);
    return a + b;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: emulate the functionality of _.filter
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const exercise3 = () => {
    const _ = {};

    _.each = (listOfElements, callbackFunction) => {
        if (Array.isArray(listOfElements)) {
            for (let i = 0; i < listOfElements.length; i ++) {
                callbackFunction(listOfElements[i], i, listOfElements);
            }
        } else {
            for (let key in listOfElements) {
                callbackFunction(listOfElements[key], key, listOfElements);
            }
        }
    }

    _.filter = (list, callback) => {
        let result = [];

        _.each(list, (element, index, list) => {
            if (callback(list[index], index, list)) {
                result.push(list[index]);
            }
        });

        return result;
    }

    _.from = (list) => {
        let result = [];

        _.each(list, (element, index, list) => {
            result.push(element);
        });

        return result;
    }

    let arrayLike = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
    }

    console.log('Result: ', _.from(arrayLike));
}