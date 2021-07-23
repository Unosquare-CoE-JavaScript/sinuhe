// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise Part 1: Iterate the suspects array
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const exercise1 = () => {
    const game = {
        'suspects': [
            {
                name: 'Rusty',
                color: 'Orange'
            },
            {
                name: 'Miss Scarlet',
                color: 'Red'
            }
        ]
    }

    game.suspects.forEach(sus => console.log(`${sus.name} has color ${sus.color}`))
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise part 2: Loop through all the properties of the suspect objects in the suspects array, mark them if you
// think they are guilty.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const exercise2 = () => {
    const game = {
        'suspects': [
            {
                name: 'Rusty',
                color: 'Orange',
                guilty: false
            },
            {
                name: 'Miss Scarlet',
                color: 'Red',
                guilty: true
            }
        ]
    }

    game.suspects.forEach(sus => {
        console.log(`${sus.name} has color ${sus.color}. Guilty? ${sus.guilty ? 'yes' : 'no'}`)
    })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Exercise part 3: Destructure this nested data structure into two variables with the strings red and orange
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const exercise3 = () => {
    const suspects = [
        {
            name: 'Rusty',
            color: 'Orange',
        },
        {
            name: 'Miss Scarlet',
            color: 'Red'
        }
    ]

    let [{color: firstColor}, {color: secondColor}] = suspects

    console.log(`First color is ${firstColor} and second color is ${secondColor}`)
}