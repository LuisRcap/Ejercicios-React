const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, ,p3] = personajes;

console.log(p3);

const retornaArreglo = () => ['ABC', 123];

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea 
// 1. El primer valor del arreglo se llamará nombre
// 2. El segundo se llamará setNombre

const usaEstado = (valor) => [valor, () => console.log('Hola Mundo')];

const [nombre, setNombre] = usaEstado('Goku');
console.log(nombre);
setNombre();