//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes';
import { heroes } from "./data/heroes";

/* const getHeroeByID = (id) =>{
    return heroes.find( (heroe) => {
        if(heroe.id === id){
            return heroe;
        }else{
            return false;
        }
    });
} */
const getHeroeByID = (id) => heroes.find( (heroe) => heroe.id === id);

console.log(getHeroeByID(2));

const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('Marvel'));