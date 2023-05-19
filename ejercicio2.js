//se crea la funcion
function guardarropa(accesorios1, accesorios2) {
  let accesoriostodoelaño = [];

  for (let index = 0; index < accesorios1.length; index++) {
    let existe = accesorios2.includes(accesorios1[index]);
    if (existe) {
      accesoriostodoelaño.push(accesorios1[index]);
    }
  }

  return accesoriostodoelaño;
}

//arrays
let accesoriosverano = [
  "reloj",
  "ojotas",
  "trajedebaño",
  "lentes",
  "mochila",
  "sombrero",
];
let accesoriosinvierno = [
  "botas",
  "mochila",
  "bufanda",
  "lentes",
  "guantes",
  "reloj",
  "polainas"
];

//se invoca la funcion

console.log (guardarropa(accesoriosinvierno, accesoriosverano));
//ahora se prueba con los parametros invertidos
console.log(guardarropa(accesoriosverano, accesoriosinvierno))