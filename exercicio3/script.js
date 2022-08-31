//Crie a const para a frase aqui
//a)
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase);

//b)
console.log(frase.replace("verde", "rosa").replace("azul", "laranja"));

//EXTRA
let texto = "mas não deixe o gato sair"
let textoGrande = texto.toUpperCase()
let fraseFinal = frase.replace(texto, textoGrande)
console.log(fraseFinal);
