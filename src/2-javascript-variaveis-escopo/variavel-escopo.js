var minhaVariavel = "global";
var outraVariavel = "global";
var arrowVariavel = "global";

function minhaFuncao() {
  var minhaVariavel = "local";
  return minhaVariavel;
}

function outraFuncao() {
  outraVariavel = "local";
  return outraVariavel;
}

console.log("minhaVariavel =>", minhaVariavel); //{1}
console.log("minhaFuncao() =>", minhaFuncao()); //{2}
console.log("outraVariavel =>", outraVariavel); //{3}
console.log("outraFuncao() =>", outraFuncao()); //{4}
console.log("outraVariavel =>", outraVariavel); //{5}
