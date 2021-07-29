class Integer
{
    constructor(value)
    {
        this.value = value;
    }
}

class BinaryExpression
{
    constructor(lhs, rhs)
    {
        this.lhs = lhs;
        this.rhs = rhs;
    }
}

class AdditionExpression extends BinaryExpression
{
    constructor(lhs, rhs) {
        super(lhs, rhs);
    }
}

class MultiplicationExpression extends BinaryExpression
{
    constructor(lhs, rhs) {
        super(lhs, rhs);
    }
}

class ExpressionPrinter
{
    constructor()
    {
        this.buffer = [];
    }

    visitValue(value)
    {
        if (value instanceof MultiplicationExpression) {
            this.visitMultiplication(value);
        } else if (value instanceof AdditionExpression) {
            this.visitAddition(value);
        } else {
            this.buffer.push(value.value);
        }
    }

    visitAddition(ae)
    {
        this.buffer.push('(');
        this.visitValue(ae.lhs);
        this.buffer.push('+');
        this.visitValue(ae.rhs);
        this.buffer.push(')');
    }

    visitMultiplication(me)
    {
        this.visitValue(me.lhs);
        this.buffer.push('*');
        this.visitValue(me.rhs);
    }

    toString()
    {
        return this.buffer.join('');
    }
}