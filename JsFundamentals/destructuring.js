// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: Create an object that loks like this:
// {"name": "Rusty", "room": "Kitchen", "weapon": "candlestick"}
// extract out the weapon and location using destructuring
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const character = {
    name: 'Rusty',
    room: 'Kitchen',
    weapon: 'candlestick'
}

let { weapon, room } = character

console.log('Weapon and location are:', weapon, room)


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// More destructuring examples

let [a, b] = [1, 2]
console.log(a, b)
// => 1 2

// Omit certain values
let [a, , b] = [1, 2, 3]
console.log(a, b)
// => 1, 3

// Combine with spread/rest operator (accumulates the rest of the values)
let [a, ...b] = [1, 2, 3]
console.log(a, b)
// => 1, [2, 3]

// Swap variables easily without temp
let a = 1, b = 2
// instead of
let temp = a
a = b
b = temp
// just:
[b, a] = [a, b]
console.log(a, b)

// Advanced deep arrays
let [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log('a:', a, 'b:', b, 'c:', c, 'd:', d)
// => a: 1 b:2 c: [[ 3, 4 ], 5 ] d:6