const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
//a)
const semEspaco = minhaString.trim()
console.log(semEspaco);

//b)
console.log("Caracteres da string antes da remoção de espaços: " + minhaString.length + "\nCaracteres da string depois da remoção de espaços: " + semEspaco.length);

//c)
console.log(semEspaco.replace("________", "sticioso"));