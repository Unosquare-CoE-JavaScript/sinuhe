// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Emulate functionality of _.map
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const exercise1 = () => {
    const makeBroken = item => {
        return `broken ${item}`;
    }

    const _ = {}

    _.map = (list, callback) => {
        let result = [];
        let newElement;

        for (let i = 0; i < list.length; i ++) {
            newElement = callback(list[i]);
            result.push(newElement);
        }

        return result;
    }

    const weapons = ['candlestick', 'lead pipe', 'revolver'];

    let newElements = _.map(weapons, makeBroken)

    console.log(newElements)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Using map in create suspects scenario
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const exercise2 = () => {
    console.log('Exercise: Using map in create suspects scenario')

    const _ = {}

    _.map = (list, callback) => {
        let result = [];
        let newElement;

        for (let i = 0; i < list.length; i ++) {
            newElement = callback(list[i]);
            result.push(newElement);
        }

        return result;
    }

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

    const createSuspectObject = (name) => {
        return {
            name,
            color: name.split(' ')[1],
            speak() {
                console.log('my name is', name);
            }
        }
    };

    const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr White'];
    let suspectsList = _.map(suspects, createSuspectObject)

    console.log('list of suspects', suspectsList)

    _.each(suspectsList, (sus, index, list) => {
        sus.speak();
    });
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Using each instead of for loop in our map method
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const exercise3 = () => {
    console.log('Exercise: Using each instead of for loop in our map method')

    const createSuspectObject = (name) => {
        return {
            name,
            color: name.split(' ')[1],
            speak() {
                console.log('my name is', name);
            }
        }
    };

    const _ = {}

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

    _.map = (list, callback) => {
        let result = [];
        let newElement;

        _.each(list, (element, index, list) => {
            newElement = callback(element, index, list)
            result.push(newElement)
        })

        return result;
    }

    const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr White'];
    let suspectsList = _.map(suspects, createSuspectObject)

    console.log('list of suspects', suspectsList)
}
