//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes';
// import { heroes } from "./data/heroes";
import heroes, { owners } from "../data/heroes"; // Importación por default

console.log(owners);


const getHeroeByID = (id) => heroes.find( (heroe) => heroe.id === id);

console.log(getHeroeByID(2));

const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('Marvel'));