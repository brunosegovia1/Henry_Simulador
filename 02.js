/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca
  var comodin = '';

  for (let i=0; i<strings.length; i++)
  {
    for (let e=0; e<strings.length-1; e++)
    {
      if (strings[e].length < strings[e+1].length)
      {
        comodin = strings[e];
        strings[e] = strings[e+1];
        strings[e+1] = comodin;
      }
    }
  }

  return strings[0];
}
console.log(stringMasLarga(['HTML', 'CSS', 'JavaScript']));

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga