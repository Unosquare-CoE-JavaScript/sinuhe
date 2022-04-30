"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'yair', hobbies: ['watching movies'] }, { age: 30 });
console.log(mergedObj);
function countAndPrint(element) {
    let descText = 'Got no value';
    if (element.length === 1) {
        descText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descText = 'got ' + element.length + ' elements';
    }
    return [element, descText];
}
console.log(countAndPrint('hello'));
function extractAndConvert(obj, key) {
    return 'value ' + obj[key];
}
extractAndConvert({ name: 'sinuhe' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('yair');
textStorage.addItem('sinuhe');
textStorage.removeItem('sinuhe');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeDate = date;
    return courseGoal;
}
const names = ['sinuhe', 'guani'];
//# sourceMappingURL=app.js.map