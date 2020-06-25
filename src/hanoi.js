// Tower of Hanoi Begins
// console.log("Hanoi is working");

/*
1. Select a disc from the top of a tower
2. Drop the disc on top of another tower, if the rules allow
3. Check to see if the game is over (winning condition)
*/

// Use Arrays for the 3 towers or 3 separate tower variables
const tower1 = document.querySelector("#tower1");
const tower2 = document.querySelector("#tower2");
const tower3 = document.querySelector("#tower3");

const disc_1 = document.getElementById("1");
const disc_2 = document.getElementById("2");
const disc_3 = document.getElementById("3");
const disc_4 = document.getElementById("4");

const towers = document.querySelectorAll(".tower");

const tower_container = document.querySelector(".tower-container");

//let towersArray = [tower1.children];
//console.log(towersArray);

// Tower and Discs - Game Functions
// Executing the movement of each disc to a different tower element
let currentDisc = null;
let gameMode = "pickUp"
// const getLastDisc = function list() {
//     list.childNodes[(list.childNodes.length - 1)];
// }

// Selected Discs Functions (must function/execute with Tower and Disc Game Functions)
let selectedDisc = document.querySelector("#currentBlock");

// Start and End Game Button (Main Functions) -- JS for gameDetails class (Game Controls Bar)
const startBtn = document.getElementById("#startBtn");
//let col_two_details = document.querySelector(".col_two_details");
//let col_three_details = document.querySelector(".col_three_details");
//startBtn.addEventListener("click", startGame);

// Learned from Randy in Demo and helped by Nikal Morgan (SE Coach)
const towerClick = function (event) {
    // tower_container.style.visibility = "visible";
    // col_two_details.style.visibility = "visible";
    // col_three_details.style.visibility = "visible";

    // if (startBtn.textContent === "End Game") {
    //     startBtn.textContent === "Start Game";

    //     tower_container.style.visibility = "hidden";
    //     // The reload() method is used to reload the current document; same as the reload button in your browser.
    //     location.reload();
    //     return;
    // } else {
    //     startBtn.textContent = "End Game";
    // }

    const towerOfHanoi = event.currentTarget;

    if (gameMode === "pickUp") {
        //console.log("Pick up your disc to make your move!");
        const disc = towerOfHanoi.lastElementChild;

        if (disc) {
            currentDisc = disc;
            currentDisc.style.backgroundColor = "yellow";
            gameMode = "dropDisc";
            selectedDisc.innerHTML = "--- Current Disc: " + currentDisc.id + " ---";
        } else {
            alert("No disc selected to pick up!");
        }
    } else {
        if (gameMode === "dropDisc") {
            //console.log("dropDisc")
            if (towerOfHanoi.childElementCount === 0) {
                towerOfHanoi.append(currentDisc)
                gameMode = "pickUp"
                selectedDisc.innerHTML = "---No Disc Selected---"
                currentDisc.style.backgroundColor = ""
                moveCount++
                moveCount_span.innerHTML = moveCount
            } else {
                let towerWidth = document.getElementById(towerOfHanoi.lastElementChild.id);

                if (towerWidth.dataset.width < currentDisc.dataset.width) {
                    gameMode = "pickUp";
                    currentDisc.style.backgroundColor = "";
                    currentDisc = "";
                    alert("Invalid Disc Move...Make another selection!");
                    return;
                } else {
                    towerOfHanoi.append(currentDisc);
                    gameMode = "pickUp";
                    currentDisc.style.backgroundColor = "";
                    selectedDisc.innerHTML = "---No Disc Selected---";
                    moveCount++;
                    moveCount_span.innerHTML = moveCount;
                }
            }
        }
    }
    // If-Statement for Winning Condition - If all four discs are inside the third tower, the game is over. 
    if (tower3.childElementCount === 4) {
        setTimeout(alert(`Congratulations! You won with ${moveCount} moves!`), 500);
    }
    // Use setTimeout Method to call the towerPlayerWin function to initialize the timer 
    // at 500 milliseconds to alert the player has won the game. 
    // Note to Self: Practice more Template Literals
}

// Moves Counter Functions
let moveCount = 0
let moveCount_span = document.querySelector('.counter')
for (let i = 0; i < towers.length; i++) {
    towers[i].addEventListener('click', towerClick)
}

// Clear Game Function (using Start/End Button to clear game board)
// function clearGameBoard(towerOfHanoi) {
//     while (towerOfHanoi.firstChild) {
//         towerOfHanoi.removeChild(towerOfHanoi.firstChild);
//     }
// }

//--------------------------------------------------------------------------------------------
// DRY - DON'T REPEAT YOURSELF!! LOL!!
// tower1.addEventListener("click", function (event) {
//     activeDisc = !activeDisc;
//     // This indicates the current pick up disc
//     if (activeDisc === true) {
//         if (tower1.hasChildNodes()) {
//             currentDisc = document.getElementById(tower1.lastElementChild.id);
//             tower1.removeChild(tower1.lastElementChild);
//         } else {
//             alert("Please select a tower to move the disc!");
//         }
//     } else {
//         tower1.appendChild(currentDisc);
//         //counter++;
//     }
// })

// tower2.addEventListener("click", function (event) {
//     activeDisc = !activeDisc;
//     // pick up disc
//     if (activeDisc === true) {
//         if (tower2.hasChildNodes()) {
//             currentDisc = document.getElementById(tower2.lastElementChild.id);
//             tower2.removeChild(tower2.lastElementChild);
//         } else {
//             alert("Please select a tower to move the disc!");
//         }
//     } else {
//         tower2.appendChild(currentDisc);
//         //counter++;
//     }
// })

// tower3.addEventListener("click", function (event) {
//     activeDisc = !activeDisc;
//     if (activeDisc === true) {

//         if (tower3.hasChildNodes()) {
//             currentDisc = document.getElementById(tower3.lastElementChild.id);
//             tower3.removeChild(tower3.lastElementChild);
//         } else {
//             alert("Please select a tower to move the disc!");
//         }
//     } else {
//         tower3.appendChild(currentDisc);
//         //counter++;
//     }
// })