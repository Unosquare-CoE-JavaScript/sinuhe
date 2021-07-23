// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: turn this code into ES6
// final suspects to send back to the team
// var increment = function (n) {
// return n + 1;
// }
//
// var square = function (n) {
// return n * n;
// }
//
// var doMathSoIdontHaveTo = function (n, func) {
// return func(n);
// }
//
// doMathSoIdontHaveTo(5, square);
// doMathSoIdontHaveTo(4, increment);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const exercise1 = () => {
    var increment = n => n + 1;


    var square = n => n * n;

    var doMathSoIdontHaveTo = (n, func) => func(n);

    doMathSoIdontHaveTo(5, square);
    doMathSoIdontHaveTo(4, increment);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: emulate the functionality of _.filter
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const exercise2 = () =>
{
    const exercise2 = () => {
        const _ = {};

        _.reduce = (list, callback, accumulator) => {
            let memo = accumulator;

            for (let i = 0; i < list.length; i++) {
                if (i === 0 && memo === undefined) {
                    memo = list[0];
                } else {
                    memo = callback(list[i], memo);
                }
            }

            return memo;
        }

        let reduced = _.reduce([2, 3, 5], (val, sum) => val + sum, 10);
        console.log('Reduced:', reduced);
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise: Figure out which room no one claims to be the night of the murder from this data set
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const exercise3 = () => {
    const newDevelopment = [
        {
            name: 'Miss Scarlet',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: true},
                {'dining room': true},
                {'billiard room': false},
                {library: true}
            ]
        },
        {
            name: 'Reverend Green',
            present: true,
            rooms: [
                {kitchen: true},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': true},
                {library: false}
            ]
        },
        {
            name: 'Colonel Mustard',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: true},
                {'dining room': false},
                {'billiard room': true},
                {library: false}
            ]
        },
        {
            name: 'Professor Plum',
            present: true,
            rooms: [
                {kitchen: true},
                {ballroom: false},
                {conservatory: false},
                {'dining room': true},
                {'billiard room': false},
                {library: false}
            ]
        }
    ];
    let emptyRooms = [];
    emptyRoomsNames = [];

    const roomsArray = _.map(newDevelopment, element => element.rooms);

    _.each(roomsArray, (rooms, index) => {
        let roomsNames = [];
        let emptyRooms = _.filter(rooms, room => {
            let somebodyInRoom = false;
            somebodyInRoom = room[Object.keys(room)[0]];
            if (!somebodyInRoom) {
                roomsNames.push(Object.keys(room)[0]);
                return room;
            }
        });

        roomsArray[index] = emptyRooms;
        emptyRoomsNames.push(roomsNames);
    });

    emptyRooms = _.intersection(...emptyRoomsNames)

    console.log('Empty rooms are:', emptyRooms)


// Video course solution:


    const notInRoom = (suspect) => {
        const emptyRooms = _.reduce(suspect.rooms, (room, memo) => {
            if (room === false) {
                memo.push(room);
            }
            return memo;
        }, []);

        return emptyRooms;
    };

    let notInRooms = _.map(newDevelopment, notInRoom)
    let res = _.intersection(...notInRooms)
    console.log('Result', res)

}