// ```javascript if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } ```
// Code for alien ship attack. (Example from assignment page) ^^

// declare millenniumFalcon as ship object. I think the Millennium Falcon would be much cooler :)
// assign properties hull the value "20"
// firepower (fp) the value "5"
// accuracy (acc) the value of "0.7"
let target;
const millenniumFalcon = {
    hull: 20,
    fp: 5,
    acc: 0.7,

    attack () {
        target -= this.fp
        // console.log (target)
        // if (target <= 0) {
        //     console.log("target killed");
        //     // enemies.pop();
        // } else (console.log(`HIT! ${target}`))
        console.log(typeof(target))
    }
}
let badGuy = {
    hull: 10,
}

console.log(millenniumFalcon.attack(badGuy.hull))

millenniumFalcon

// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

// create an empty array to store objects (enemies)
// create a class Alien, with random hull, fp, and acc values
// create a method that allows aliens to attack on their turn

const enemies = [];

class Alien {
    constructor () {
        this.hull = Math.floor(Math.random() * 7), // generates random numbers 0 - 6
        this.fp = Math.floor(Math.random() * 5), // generates random numbers 0 - 4
        this.acc = Math.random()
    }

    attack (target) {
        target -= this.fp;
        console.log(target);
    }
}

// a for loop used to populate the "enemies" array
for (i = 0; i < 6; i++) {
    enemies[i] = new Alien;

    // these if statements account for values that are below 3 (min for alien hull) and 2 (min for alien fp)
    if (enemies[i].hull < 3) 
    {
        enemies[i].hull = 3;
    }

    if (enemies[i].fp < 2) 
    {
        enemies[i].fp = 2;
    }

    if (enemies[i].acc < 0.6) 
    {
        enemies[i].acc;
    }
    else if (enemies[i].acc > 0.8)
    {
        enemies[i].acc;
    }

    // console.log(enemies[i])
}

// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

// do {

//     if (millenniumFalcon.acc > Math.random()) { // check if millenniumFalcon hits aliens
//         // let damage = enemies[current].hull;




//         // if (target <= 0) {
//         //     enemies.pop();
//         //     console.log("target killed")
//         // } else (console.log(target))
//     }

    
// } while(enemies.length > 0)


// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

// millenniumFalcon.attack(enemies[0].hull)
// i = 0;

// do {
//     let target = enemies[i].hull;

//     if (millenniumFalcon.acc > Math.random()) {
//         console.log("Our shot")
//         millenniumFalcon.attack(enemies[i].hull);
//     }

//     let n = 1
//     console.log(`Looped through: ${n} times`)
//     n++

//     i++

// } while (enemies.length <= 0);

// // | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

// for (i = 0; i <= enemies.length-1; i++) {
//     let target = enemies[i].hull;

//     if (millenniumFalcon.acc > Math.random()) {
//         console.log("Our shot")
//         millenniumFalcon.attack(target);
        
//         if (target < 0) {
//             console.log("target down");
//             enemies.pop();
//         }

//     } else (console.log("You missed! Enemy's turn"))

//     millenniumFalcon.attack(target);
// }



// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | 

// console.log("Welcome aboard captain. Enemies ahead, should we make contact?")
// let input = prompt("Welcome aboard captain. Enemies ahead, should we make contact?")



// > > > > > > > > > > > > > > > Attack Turns < < < < < < < < < < < < < < < < 


// if (answer.toLowerCase() == 'attack' ) {
//     // alert (millenniumFalcon.acc)
//     // alert (allAliens[0].alienAcc)
    
//     // compare ship accuray to alien accuracy
//     let i = 0;
//     if (millenniumFalcon.acc > allAliens[i].alienAcc) {
//         // alert('HIT!')
//         // alert(`That's a hit. Enemy health is ${allAliens[i].alienHull - 5}`)
//     } else (alert('You missed!'));

// } 
// else (alert ("Let's get out of here"))



// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// i need these steps to repeat if players don't choose to attack


// else (alert('You chose to run away'))
// else if (answer.toLowerCase() != 'attack' && answer.toLowerCase() != 'run away') {
//     prompt("No time for shenanigans!! Do you want to ATTACK or RUN AWAY!?")
// }

// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// console.log(`Welcome aboard captain. Hull status: ${millenniumFalcon.hull}`);
//alert((`Welcome aboard captain. Hull status: ${millenniumFalcon.hull}`));

// let answer = 'attack';
// console.log (`We've found trouble Captain. Aliens dead ahead!`, `attack or run away`);
//alert(`We've found trouble Captain. Aliens dead ahead!`, `attack or run away`);



// if (answer.toLowerCase() == 'attack') {
//     console.log ('answer')
// }
// if (answer.toLowerCase() === "attack") {
//     let i = 0;
//     while (allAliens[i].alienHull > 0) {
//         if (millenniumFalcon.acc > allAliens[i].alienAcc) 
//         {
//             allAliens[i].alienHull -= millenniumFalcon.fp; // subtracts and reassigns the firepower from the enemy's health
//             if (allAliens[i].alienHull <= 0) {
//                 console.log ('one down')
//             }
//             // console.log('Enemy health: ', allAliens[i].alienHull); // enemy healh after damage
//         } else if (allAliens[i].alienAcc > millenniumFalcon.acc) 
//         {
//             millenniumFalcon.hull -= allAliens[i].alienFp;
//             console.log('Your health: ', millenniumFalcon.hull); // millenniumFalcon's health after damage

//         }
//         i++;
//     }
// }


// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

// if (millenniumFalcon.hull < 5) {
//     alert('Ship status is critical, Captain. May I suggest a hastey retreat!?')
// }


// Create an empty array ("allAliens") to place alienShips into after they're created
// For each index of "allAliens" create an object "alienShip"
// Generate random values for the alien's hull, firepower and accuracy

// const allAliens = [];

// for (i = 0; i <= 5; i++) {

//     let alien = {
//         hull: Math.floor(Math.random() * 7),
//         fp: Math.floor(Math.random() * 5),
//         acc: Math.random(),
//     };

//     // to account for the 0s I added the next bit of code
//     // If the hull results in a 0 then, set the hull = 3
//     if (alien.hull == 0) {
//         alien.hull = 3;
//     } else if (alien.hull > 6) {
//         alien.hull == 6;
//     }

//     // If the fp results in a 0 then, set fp = 2
//     if (alien.fp < 2) {
//         alien.fp == 2;
//     } else if (alien.fp > 4) {
//         alien.fp == 4;
//     }

//     allAliens[i] = alien;


// }

// console.log(allAliens);

// *** My for loop works and I was wondering if there was a way to make this work in the final project. I ended up switching to a class because it felt easier to make functions and stuff like that in there. But could you create your enemies with a loop and make functions in there instead?

// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |