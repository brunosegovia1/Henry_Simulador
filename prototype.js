/*
Array.prototype.mayoresQuetres = function()
{
    var arreglo = [];
    for (var i=0; i<this.length; i++)
    {
        if (this[i] > 3)
        {
            arreglo.push(this[i]);
        }
    }

    return arreglo;
}

var arr = [1, 2, 3, 4, 5];

var nuevoArray = arr.mayoresQuetres();

//console.log(nuevoArray);

var arreglo2 = [1, 2, 13, 18, 25];

var nuevoArray2 = arreglo2.mayoresQuetres();

console.log(nuevoArray2);

*/

class Persona
{
    constructor (nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar()
    {
        return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años'; 
    }
}

class Programador extends Persona
{
    constructor (nombre, edad, experiencia)
    {
        super(nombre, edad)
        this.experiencia = experiencia;
    }

    codear ()
    {
        return 'Soy ' + this.nombre + ' y codeo desde ' + this.experiencia + ' y tengo ' + this.edad + ' años.';
    }
}



var fatima = new Persona('Fatima', 18);

console.log(fatima.saludar());