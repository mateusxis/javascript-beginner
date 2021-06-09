var variavelVar = "var instanciada";
let variavelLet = "let instanciada";
const variavelConst = "const instanciada";

console.log(variavelVar); // {1}
console.log(variavelLet); // {2}
console.log(variavelConst); // {3}

var variavelVar = "var instanciada de novo"; // {4}
// let variavelLet = 'let instanciada de novo'; {5}
// const variavelConst = 'const instanciada de novo'; {6}

console.log(variavelVar);

variavelVar = "var outro dado"; // {7}
variavelLet = "let outro dado"; // {8}
// variavelConst = 'const outro dado'; {9}

console.log(variavelVar);
console.log(variavelLet);