const nombre = 'Luis';
const apellido = 'Rico';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

export function getSaludo( nombre = 'Goku' ){
    return 'Hola ' + nombre + '!';
}

// console.log(`Este es un texto: ${getSaludo(nombre)}`);