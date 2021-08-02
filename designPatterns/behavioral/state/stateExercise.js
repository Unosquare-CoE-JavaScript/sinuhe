class State {
    constructor() {
        this.combinations = [];
        this.status = 'LOCKED';
    }
}

class CombinationLock
{
    constructor(combination)
    {
        this.combination = combination;
        this.state = new State();
        this.reset();
        // todo
    }

    get status() {
        return this.state.status;
    }

    reset()
    {
        // reset lock state here
        this.state.status = 'LOCKED';
    }

    enterDigit(digit)
    {
        this.state.combinations.push(digit);
        this.state.status = this.state.combinations.join('');
        if (this.sameValues(this.state.combinations, this.combination)) {
            this.state.status = 'OPEN';
        } else {
            if (this.state.combinations.length > this.combination.length) {
                this.state.status = 'ERROR';
            }
        }
    }

    sameValues(arr1, arr2) {
        if (arr1.length === arr2.length) {
            let res = false;
            arr1.forEach((element, index) => {
                res = element = arr2[index];
            });

            return res;
        } else {
            return false;
        }
    }
}
