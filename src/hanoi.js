// Tower of Hanoi Begins
console.log("Hanoi is working");
const boxWidth = 120;
/*
1. Select a disc from the top of a tower
2. Drop the disc on top of another tower, if the rules allow
3. Check to see if the game is over (winning condition)
*/
let currentDisc;

const startBtn = document.querySelector("#startBtn");

let col_two_details = document.querySelector(".col_two_details");
let counter = 0;
let counterDashboard = document.querySelector(".counter");

let col_three_details = document.querySelector(".col_three_details");
let status = document.querySelector("#currentBlock");

const tower_container = document.querySelector(".tower-container");
const towers = [];