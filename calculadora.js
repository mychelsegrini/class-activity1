const prompt = require('readline-sync');

let numberOfGrades = parseFloat(prompt.question("Quantas notas deseja adicionar ao sistema? ")); //Asks how many grades will be added.
let notas = []; //Creates array that will store the grades of a certain student.
let resultado = "" //Defines a variable that will store the result achieved by the student.
let media = 0; //Defines a variable that will store the average grade. 

for(let i = 0; i < numberOfGrades; i++){
    notas.push(parseFloat(prompt.question("Adicione a nota " + (i+1) + ": ")));
}

for (let x of notas){ //Sums the grades up.
    media += x;
}

media /= notas.length; //Calculates the average grade.

if (media >= 7){ //States the students' result.
    resultado = "APROVADO";
}else{
    resultado = "REPROVADO";
}
console.log("A média do aluno Fulano foi " + media +". Por isso, ele foi " + resultado + ".") //Makes the final output.