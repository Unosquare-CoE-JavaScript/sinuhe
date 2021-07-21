// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Iterate the suspects array and create an object for each element
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const exercise1 = () => {
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
    let suspectsList = [];

    for (let i = 0; i < suspects.length; i++) {
        let suspect = createSuspectObject(suspects[i]);
        suspectsList.push(suspect);
    }

    console.log('list of suspects', suspectsList)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: emulate de functionality of an ._each function
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const exercise2 = () => {
    const _ = {}

    const logName = name => {
        console.log('Hi, my name is', name)
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

    const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr White'];

    _.each(suspects, logName)
}