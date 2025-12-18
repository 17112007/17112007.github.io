let nombre = prompt("Ingrese su usuario:");
let edad = Number(prompt("Ingrese su edad:"));
let genero = prompt("Ingrese su genero (Masculino o Femenino)");
genero = genero.toLowerCase().trim()
let mes = edad * 12
document.write("-----------------------------------------------------<br>");
document.write("Sea bienvenido usuador " + nombre + "<br>");
document.write("-----------------------------------------------------<br>");
document.write("Su edad en meses es " + mes + "<br>");
document.write("-----------------------------------------------------<br>");
if (genero === "masculino") {
document.write("Usted es masculino <br>");
document.write('<img src="hombre.png" <br>');
} else if (genero === "femenino") {
document.write("Usted es femenino  <br>")
document.write('<img src="mujer.png"  <br>');
}
else {
document.write("Genero no reconocido") 
}