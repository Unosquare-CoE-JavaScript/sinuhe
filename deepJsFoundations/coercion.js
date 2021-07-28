// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: create an isValidName and hoursAttended functions handling possible corner cases
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const isValidName = name => {
    let isString, isNotEmpty;
    if (typeof name === 'string') {
        isString = true

        name = name.trim();

        if (name.length >= 3) {
            isNotEmpty = true;
        } else {
            return false;
        }

        return  isString && isNotEmpty;
    } else {
        return false;
    }
};

// Testing results
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(isValidName("Frank") === true);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const hoursAttended = (attended, length) => {
    const isNumber = v => typeof v === 'number';
    const isString = v => typeof v === 'string';
    let attendedNumber;
    let lengthNumber;

    if ((isNumber(attended) || isString(attended)) && (isNumber(length) || isString(length))) {
        if (isString(attended) && attended.length === 0) {
            return false;
        }
        if (isString(length) && length.length === 0) {
            return false;
        }

        attendedNumber = Number(attended);
        lengthNumber = Number(length);

        if (!Number.isNaN(attendedNumber) && !Number.isNaN(lengthNumber)) {
            if (attendedNumber >= 0 && lengthNumber >= 0) {
                if (Number.isInteger(attendedNumber) && Number.isInteger(lengthNumber)) {
                    return attendedNumber <= lengthNumber;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
};

// Testing results
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);