class Goblin
{
    constructor(game, baseAttack=1, baseDefense=1)
    {
        this.attack = baseAttack;
        this.defense = baseDefense;
        this.game = game;
        this.increaseDefense(this.game.goblins);
        this.increaseDefense(this.game.kingGoblins);
        this.game.goblins.push(this);
    }

    increaseDefense(goblins) {
        goblins.forEach(goblin => {
            goblin.defense++
        });
    }

    toString() {
        return `Goblin ${this.attack} / ${this.defense}`;
    }
}

class GoblinKing extends Goblin
{
    constructor(game)
    {
        super(game, 3, 3);
        this.game = game;
        this.increaseAttack(this.game.goblins)
        this.game.kingGoblins.push(this);
    }

    increaseAttack(goblins) {
        goblins.forEach(goblin => {
            goblin.attack++;
        });
    }

    toString() {
        return `King Goblin ${this.attack} / ${this.defense}`;
    }
}

class Game
{
    constructor() {
        this.goblins = [];
        this.kingGoblins = [];
    }

}

let game = new Game();
let goblin = new Goblin(game);

console.log(goblin.toString())