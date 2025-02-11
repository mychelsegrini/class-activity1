let notas = [10, 9, 8, 7, 7, 9, 10, 9, 4, 10]; //Creates array that will store the grades of a certain student.
let resultado = "" //Defines a variable that will store the result achieved by the student.
let media = 0; //Defines a variable that will store the average grade. 

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