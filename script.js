// ```javascript if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } ```
// Code for alien ship attack. (Example from assignment page) ^^


// > > > > > > > > > > > > > > > Ships < < < < < < < < < < < < < < < < 

// declare millenniumFalcon as ship object. I think the Millennium Falcon would be much cooler :)
// assign properties hull the value "20"
// firepower (fp) the value "5"
// accuracy (acc) the value of "0.7"

const millenniumFalcon = {
    hull: 20,
    fp: 5,
    acc: 0.7,
}



// console.log(`Welcome aboard captain. Ship status is normal.`)
// console.log(`We've found trouble Captain. Aliens dead ahead`)
if (millenniumFalcon.hull < 5) {
    // console.log('Ship status is critical, Captain. May I suggest a hastey retreat!?')
    alert('Ship status is critical, Captain. May I suggest a hastey retreat!?')
}


// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

// let alienShip = {
//     hull: alienHull,
//     fp: alienFp,
//     acc: alienAcc,
// };


// console.log(alienShip.fp)
// console.log(alienShip.hull)
// console.log(alienShip.acc)

// assigns the same randomly generated value to all other objects in my array


// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// Create an empty array ("allAliens") to place alienShips into after they're created
// For each index of "allAliens" create an object "alienShip"
// Generate random values for the alien's hull, firepower and accuracy

const allAliens = [];

for (i = 0; i <= 5; i++) {

    let alien = {
        alienHull: Math.floor(Math.random() * 7),
        alienFp: Math.floor(Math.random() * 5),
        alienAcc: Math.random(),
    };

    // to account for the 0s I added the next bit of code
    // If the hull results in a 0 then, set the hull = 3
    if (alien.alienHull == 0) {
        alien.alienHull = 3;
    }

    // If the fp results in a 0 then, set fp = 2
    if (alien.alienFp == 0) {
        alien.alienFp = 2;
    }

    // (alien.alienHull == 0) ? alien.alienHull = 3 :

    // (alien.alienFp == 0) ? alien.alienFp = 2 : 
    // these don't work. don't mind them lol

    allAliens[i] = alien;
}


// console.log(allAliens);





// > > > > > > > > > > > > > > > Attack Turns < < < < < < < < < < < < < < < < 

// alert(`Welcome aboard captain. Hull status: ${millenniumFalcon.hull}`) // when on browser

let answer = prompt (`We've found trouble Captain. Aliens dead ahead!`, `attack or run away`);


if (answer.toLowerCase() == 'attack' ) {
    // alert (millenniumFalcon.acc)
    // alert (allAliens[0].alienAcc)
    
    // compare ship accuray to alien accuracy
    let i = 0;
    if (millenniumFalcon.acc > allAliens[i].alienAcc) {
        // alert('HIT!')
        alert(`That's a hit. Enemy health is ${allAliens[i].alienHull - 5}`)
    } else (alert('You missed!'));

} 
else (alert ("Let's get out of here"))

// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// i need these steps to repeat if players don't choose to attack


// else (alert('You chose to run away'))
// else if (answer.toLowerCase() != 'attack' && answer.toLowerCase() != 'run away') {
//     prompt("No time for shenanigans!! Do you want to ATTACK or RUN AWAY!?")
// }

// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |