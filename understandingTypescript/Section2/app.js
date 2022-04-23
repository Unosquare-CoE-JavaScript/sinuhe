var userInput;
var userName;
userInput = 5;
userInput = 'Sinuhe';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(msg, code) {
    throw { msg: msg, errorCode: code };
}
generateError('Error', 404);
