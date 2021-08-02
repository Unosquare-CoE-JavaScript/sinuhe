class Token
{
    constructor(value=0)
    {
        this.value = value;
    }
}

class Memento
{
    constructor(tokens)
    {
        this.tokens = [...tokens];
    }
}

class TokenMachine
{
    constructor()
    {
        this.tokens = [];
    }

    addTokenValue(value)
    {
        return this.addToken(new Token(value));
    }

    addToken(token)
    {
        this.tokens.push(new Token(token.value));
        return new Memento(this.tokens);
    }

    revert(m)
    {
        this.tokens = [...m.tokens]
    }
}
