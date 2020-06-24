const display = () => {

    while (status.firstChild) {
        status.removeChild(status.firstChild);
    }
    if (currentPiece) {
        let elemClone = currentPiece.cloneNode(true);
        status.appendChild(elemClone);
    } else {
        status.innerHTML = "-- select block --";
    }
    counterDashboard.innerText = counter;
}

for (let i = 1; i <= 3; i++) {
    towers.push(document.querySelector(`#tower${i}`));
}

function clearBoard(tower) {
    while (tower.firstChild) {
        tower.removeChild(tower.firstChild);
    }
}

let numOfBlocks = blockSelect.options[blockSelect.selectedIndex].value;




startBtn.addEventListener('click', startGame);


function startGame() {
    grid.style.visibility = "visible";
    detail_col_two.style.visibility = "visible";
    detail_col_three.style.visibility = "visible";
    if (startBtn.textContent == "End Game") {
        startBtn.textContent = "Start Game";
        grid.style.visibility = "hidden";
        location.reload();
        return;
    } else {
        startBtn.textContent = "End Game";
    }
    towersArray.map(clearBoard);
    currentPiece = null;
    counter = 0;
    display()

    function didPlayerWin() {
        return towersArray[0].childNodes.length === 0 && towersArray[1].childNodes.length === 0;
    }

    function createMovement(tower) {
        if (!currentPiece) {
            currentPiece = getLastItem(tower);
        } else if (currentPiece && tower.childNodes.length === 0) {

            tower.appendChild(currentPiece);
            counter++;
            currentPiece = null;
        } else if (currentPiece) {

            let currentPieceWidth = parseInt(currentPiece.style.width);
            let topPieceWidth = parseInt(getLastItem(tower).style.width);

            if (currentPieceWidth <= topPieceWidth) {
                tower.appendChild(currentPiece);
                counter++;
                currentPiece = null;
            }
        }
        display();

        if (didPlayerWin()) {
            setTimeout(() => alert(`Congrats, you win level:${numOfBlocksSelected} in ${counter} moves!`), 500);
        }
    }
    towersArray.map(value) {
        value.addEventListener("click", function event() {
            createMovement(event.target)
        })
    }
}