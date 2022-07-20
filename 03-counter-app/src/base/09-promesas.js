import { getHeroeById } from './08-imp-exp';


export const getHeroeByIdAsync = (id) =>{
    
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            // Tarea
            const heroe = getHeroeById(id);
            if(heroe) resolve(heroe);
            else reject("No se pudo encontrar el héroe");
    
        }, 1500 );
    });
    
};
