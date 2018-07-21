//import "babel-polyfill";

import Fighter from './fight/fighter';
import ImprovedFighter from './fight/improvedFighter';
import fight from './fight/fight';


// create two instances
let fighter = new Fighter("Klitschko", 590, 10);
let improvedFighter = new ImprovedFighter("Usik", 460, 11);

// call fight function
fight(fighter, improvedFighter, 18, 5, 4, 9);
