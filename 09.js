/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  var resultado = [];

  for (let i = 0; i < this.length; i++)
  {
    if (funcion(this[i]) === true)
    {
      resultado.push(this[i]);
    }
  }

  //console.log('Personas mayores de 18: ');
  return resultado;
};

//agregando la función filtrar al prototipo de arrays
Array.prototype.filtrar = filtrar;
/*

var personas =[
  {
    nombre: 'Emi',
    edad: 21,
    hobbies: ['correr', 'dormir', 'nadar'],
    amigos: [
      { 
        nombre: 'Martin',
      },{
        nombre: 'Leo',
      }
    ],
  }, {
    nombre: 'Franco',
    edad: 22,
    hobbies: ['futbol', 'golf'],
    amigos: [
      {
        nombre: 'Emi',
      }, {
        nombre: 'Jimmy',
      }, {
        nombre: 'Matias',
      }
    ],
  },
  {
    nombre: 'Martin',
    edad: 35,
    hobbies: ['Cancha', 'emprender'],
    amigos: [
      {
        nombre: 'Toni',
      }, {
        nombre: 'Leo',
      }, {
        nombre: 'Manu',
      }
    ],
  },
];

function Callback ()
{
  return (this.edad <= 22);
}


// Utiliza la función filtrar para obtener el resultado y almacenarlo en una variable
var resultadoFiltrado = personas.filtrar(Callback);

// Imprime el resultado para verificar que es correcto
console.log(resultadoFiltrado.length);




*/
// No modifiques nada debajo de esta linea //

module.exports = filtrar