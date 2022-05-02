let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Sinuhe';

if (typeof userInput === 'string') {
    userName = userInput
}

function generateError(msg: string, code: number): void {
    throw { msg, errorCode: code};
}

generateError('Error', 404);