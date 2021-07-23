// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: In this exercise, you will define a polyfill for `Object.is(..)`
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
if (!Object.is || true) {
    Object.is = function ObjectIs(a, b) {
        if (Number.isNaN(a)) {
            return Number.isNaN(b);
        }

        if ((1 / a) === -Infinity) {
            return (1 / b) === -Infinity
        }

        return a === b;
    };
}

// Video course solution
if (!Object.is /*|| true*/) {
    Object.is = function ObjectIs(x,y) {
        var xNegZero = isItNegZero(x);
        var yNegZero = isItNegZero(y);

        if (xNegZero || yNegZero) {
            return xNegZero && yNegZero;
        }
        else if (isItNaN(x) && isItNaN(y)) {
            return true;
        }
        else if (x === y) {
            return true;
        }

        return false;

        // **********

        function isItNegZero(x) {
            return x === 0 && (1 / x) === -Infinity;
        }

        function isItNaN(x) {
            return x !== x;
        }
    };
}