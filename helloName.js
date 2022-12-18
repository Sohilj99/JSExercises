/* 
String-1 -- helloName
Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

Examples

helloName('Bob') → Hello Bob!
helloName('Alice') → Hello Alice!
helloName('X') → Hello X!
*/


function isCorrect(expected, actual){
    if(expected===actual){
        return 'CORRECT';
    }
    return 'WRONG';
}

function helloName(name){
    return "Hello " + name + "!";
}

console.log("helloName('Bob') → Hello Bob!: ", isCorrect('Hello Bob!', helloName('Bob')));
console.log("helloName('Alice') → Hello Alice!: ", isCorrect('Hello Alice!', helloName('Alice')));
console.log("helloName('') → Hello !: ", isCorrect('Hello !', helloName('')));