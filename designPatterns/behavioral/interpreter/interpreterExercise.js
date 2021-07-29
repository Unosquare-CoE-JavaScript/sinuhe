let TokenType = Object.freeze({
    integerExpression: 0,
    plus: 1,
    minus: 2,
    lparen: 3,
    rparen: 4
});

class ExpressionProcessor
{
    constructor(variables)
    {
        this.variables = variables;
    }

    lex(expression) {
        let result = [];
        for (let i = 0; i < expression.length; i++) {
            switch (expression[i]) {
                case '+':
                    result.push(new Token(TokenType.plus, '+'));
                    break;
                case '-':
                    result.push(new Token(TokenType.minus, '-'));
                    break;
                default:
                    let buffer = [expression[i]];
                    for (let j = i+1; j < expression.length; ++j)
                    {
                        if (expression[j] !== '+' && expression[j] !== '-')
                        {
                            buffer.push(expression[j]);
                            ++i;
                        } else {
                            result.push(new Token(TokenType.integerExpression,
                                buffer.join('')));
                            break;
                        }

                        if (j === expression.length - 1 && buffer.length > 0) {
                            result.push(new Token(TokenType.integerExpression,
                                buffer.join('')));
                        }
                    }
                    break;
            }
        }

        return result;
    }

    calculate(expression)
    {
        let expressionArray = this.lex(expression);
        let result = [];
        let leftOperator = '';
        let rightOperator = '';
        let operator = '';
        let count = 0;

        expressionArray.forEach((element, index) => {
            debugger
            if (element.type === TokenType.integerExpression) {
                if (leftOperator.length === 0) {
                    leftOperator = element.text;
                    result.push(element.text)
                } else if (rightOperator.length === 0) {
                    rightOperator = element.text;
                    result.push(element.text)
                }
            }

            if (element.type === TokenType.minus || element.type === TokenType.plus) {
                if (!operator.length) {
                    operator = element.text
                    result.push(element.text);
                } else {
                    let res = 0;
                    switch (operator) {
                        case '+':
                            res = Number.parseInt(leftOperator) + Number.parseInt(rightOperator);
                            result.push(res);
                            count += res;
                            break;
                        case '-':
                            res = Number.parseInt(leftOperator) - Number.parseInt(rightOperator);
                            result.push(res);
                            count += res;
                            break;
                    }
                    operator = element.text;
                    result.push(operator);
                    leftOperator = res;
                    rightOperator = '';
                }
            }

            if (index === expressionArray.length - 1) {
                let res = 0;
                switch (operator) {
                    case '+':
                        res = Number.parseInt(leftOperator) + Number.parseInt(rightOperator);
                        result.push(res);
                        count = res;
                        break;
                    case '-':
                        res = Number.parseInt(leftOperator) - Number.parseInt(rightOperator);
                        result.push(res);
                        count = res;
                        break;
                }
                operator = '';
                result.push(res);
                leftOperator = '';
                rightOperator = '';
            }
        })

        return count;
    }
}

class Token
{
    constructor(type, text)
    {
        this.type = type;
        this.text = text;
    }

    toString()
    {
        return `\`${this.text}\``;
    }
}

let expressionProcessor = new ExpressionProcessor()
console.log(expressionProcessor.calculate('1+2+3'));