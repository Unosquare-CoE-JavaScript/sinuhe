class Mediator
{
    constructor() {
        this.participants = [];
    }

    broadcast(sender, value) {
        this.participants.forEach(participant => {
            if (participant !== sender) {
                participant.value += value;
            }
        });
    }
}

class Participant
{
    constructor(mediator)
    {
        this.mediator = mediator;
        this.value = 0;
        this.mediator.participants.push(this);
    }

    say(n)
    {
        this.mediator.broadcast(this, n)
    }
}