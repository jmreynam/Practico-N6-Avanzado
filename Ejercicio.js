function esNatural(num) {
    // Devuelve true si el num es Natural
    // Usa Recursividad
}
function esNatural(num) {
    
    if(num<0) return false;
    if(num===0) return true;
    return esNatural(num-1);

}
console.log(esNatural(5))
console.log(esNatural(-5))
console.log(esNatural(0))
//--------------------------------------------------------------------------

function Colores(colores) {
    // Aquellos colores negros cambiar su palabra a Black
    // Devuelve el arreglo
}

var colores = ['Blanco', 'Negros', 'Rojo', 'Amarillo', 'Negros', 'Verde']
function Colores(colores) {
    var newArray = [];
    newArray = colores.map(function(x){return x==="Negros"?"Black": x});
    return newArray;
}
var aFiltrar = Colores(colores)
console.log(aFiltrar);

function Filtrado(colores) {
    // Del resultado de la funcion Colores() filtra aquellos colores llamados Black
    // ejemplo ---> ['Blanco', 'Rojo', 'Amarillo', 'Verde']
}
function Filtrado(colores) {
    return colores.filter(color => color!=="Black")
}
console.log(Filtrado(aFiltrar))

//--------------------------------------------------------------------------



function Filtrar(personas){
    // Filtrar aquellas personas que sean menores de edad, siendo mayor de edad a partir de los 18 años
    // Mostrar arreglo
}

function Filtrar(personas){
    return personas.filter(personas => personas.edad>18)
}


const personas = [

    { nombre: 'Carlos', edad: 20},
    { nombre: 'Esteban', edad: 15},
    { nombre: 'Franco', edad: 12},
    { nombre: 'Estela', edad: 19},
    { nombre: 'Juan', edad: 10},
    { nombre: 'Mirtha', edad: 17}
];

console.log(Filtrar(personas));
//--------------------------------------------------------------------------



