class SingleValue
{
    constructor(value)
    {
        this.value = value;
    }
}

class ManyValues extends Array
{
    constructor() {
        super();
    }
}

let sum = function(containers)
{
    let result = 0;
    for (let container of containers) {
        if (Array.isArray(container)) {
            result += container.reduce((prevValue, currentValue) => prevValue + currentValue);
        } else {
            result += container.value;
        }
    }

    return result;
};
 let singleValue = new SingleValue(11);
 let otherValues = new ManyValues();

 otherValues.push(22);
 otherValues.push(33);

 console.log(sum([singleValue, otherValues]));