function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'yair', hobbies: ['watching movies']}, { age: 30 });

console.log(mergedObj);

interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descText = 'Got no value';
    if (element.length === 1) {
        descText = 'Got 1 element';
    } else if (element.length > 1) {
        descText = 'got ' + element.length + ' elements';
    }

    return [element, descText];
}

console.log(countAndPrint('hello'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'value ' + obj[key];
}

extractAndConvert({ name: 'sinuhe'}, 'name');

// restricting to use only with certain types
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('yair');
textStorage.addItem('sinuhe');
textStorage.removeItem('sinuhe');
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// const sinuheObj = { name: 'sinuhe' };
// objStorage.addItem(sinuheObj);
// objStorage.addItem({ name: 'guani' });
// objStorage.removeItem(sinuheObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeDate: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeDate = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['sinuhe', 'guani'];
// names.push('yair');