// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: emulate the functionality of _.filter
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const exercise1 = () => {
    console.log('Exercise: emulate the functionality of _.filter');

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

    let result = _.filter([1,2,3,4,5,6,7], (element, index, list) => {
        return element === 4 || element === 7;
    });

    console.log('Filtered elements', result);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: Filter videoData to find out which suspect was in the present in the mansion
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const exercise2 = () => {
    console.log('Exercise: Filter videoData to find out which suspect was in the present in the mansion');
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

    let presentSuspects = _.filter(videoData, (element, index, list) => {
        return element.present
    });

    console.log('Present people in the mansion', presentSuspects);
}