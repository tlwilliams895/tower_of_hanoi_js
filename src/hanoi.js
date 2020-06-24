// Tower of Hanoi Begins
// console.log("Hanoi is working");
/*
1. Select a disc from the top of a tower
2. Drop the disc on top of another tower, if the rules allow
3. Check to see if the game is over (winning condition)
*/

// Tower and Discs - Game Functions
// Executing the movement of each disc to a different tower element
let currentDisc;
const getLastDisc = function list() {
    list.childNodes[(list.childNodes.length - 1)];
}

// Arrays for the 3 towers
const towersArray = [];
const tower_container = document.querySelector(".tower-container");

// JS for gameDetails class (Game Controls Bar)
const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", startGame);

// Moves Counter Functions
let counter = 0;
let counterDashboard = document.querySelector(".counter");
let col_two_details = document.querySelector(".col_two_details");
let col_three_details = document.querySelector(".col_three_details");

// Selected Discs Functions (must function/execute with Tower and Disc Game Functions)
// let selectedDisc = document.querySelector("#currentBlock");

// const displayDiscMove = function () {
//     while (selectedDisc.firstChild) {
//         selectedDisc.removeChild(selectedDisc.firstChild);
//     }
//     if (currentDisc) {
//         let elementClone = currentDisc.cloneNode(true);
//         selectedDisc.appendChild(elementClone);
//     } else {
//         selectedDisc.innerHTML = "--- Selected Disc ---";
//     }
//     counterDashboard.innerText = counter;
// }

// for (let i = 1; i <= 3; i++) {
//     towersArray.push(document.querySelector(`#towerOfHanoi${i}`));
//     //console.log(towersArray) -- Issue right here
// }

// // Clear Game Function (using Start/End Button to clear game board)
// function clearGameBoard(towerOfHanoi) {
//     while (towerOfHanoi.firstChild) {
//         towerOfHanoi.removeChild(towerOfHanoi.firstChild);
//     }
// }


// Start and End Game Button (Main Functions)
function startGame() {
    tower_container.style.visibility = "visible";
    col_two_details.style.visibility = "visible";
    col_three_details.style.visibility = "visible";

    if (startBtn.textContent === "End Game") {
        startBtn.textContent === "Start Game";

        tower_container.style.visibility = "hidden";
        // The reload() method is used to reload the current document; same as the reload button in your browser.
        location.reload();
        return;
    } else {
        startBtn.textContent = "End Game";
    }
    // The map() method creates a new array populated with the results of 
    // calling a provided function on every element in the calling array (const towers). MDN Reference Used as help!
    //towersArray.map(clearGameBoard);
    currentDisc = null;
    counter = 0;
    //displayDiscMove();

    // Winning Condition - If all four discs are inside the third tower, the game is over. 
    // tower3.childElementCount === 4;
    function towerPlayerWin() {
        return towersArray[0].childNodes.length === 0 && towersArray[1].childNodes.length === 0;
    }


    function towerMovement(towerOfHanoi) {
        if (!currentDisc) {
            currentDisc = getLastDisc(towerOfHanoi);
        } else if (currentDisc && towerOfHanoi.childNodes.length === 0) {

            towerOfHanoi.appendChild(currentDisc);
            counter++;
            currentDisc = null;

        } else if (currentDisc) {
            let currentDiscWidth = parseInt(currentDisc.style.width);
            let topDiscWidth = parseInt(getLastDisc(towerOfHanoi).style.width);

            if (currentDiscWidth <= topDiscWidth) {
                towerOfHanoi.appendChild(currentDisc);
                counter++;
                currentDisc = null;
            }
        }
        //displayDiscMove();

        // If-Statement for Winning Condition
        // Use setTimeout Method to call the towerPlayerWin function to initialize the timer at 500 milliseconds
        // to alert the player has won the game. 
        // Note to Self: Practice more Template Literals
        if (towerPlayerWin()) {
            setTimeout(alert(`Congratulations! You won with ${counter} moves!`), 500);
        }
    }
    // Click event to execute the towerMovement function
    towersArray.map(function (values) {
        values.addEventListener("click", function (event) {
            towerMovement(event.target);
        })
    })
}