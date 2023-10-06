const board = document.getElementById("board");
let SQUARES_NUMBER;

const colorHEX = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getRandomColor() {
    let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNum = (max) => Math.floor(Math.random() * max);

    color += colorHEX[randomNum(colorHEX.length)];
  }

  return color
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";

}

function createSquares() {
  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
  
    square.addEventListener("mouseover", () => {
      setColor(square);
    });
  
    square.addEventListener("mouseleave", () => {
      removeColor(square);
    });
  
    board.append(square);
  }
}

function setSquaresCount() {
  let width = window.innerWidth;
  if (width < 510) {
    SQUARES_NUMBER = 300;
  } else {
    SQUARES_NUMBER = 500;

  }
  board.innerHTML = '';
  createSquares();
}

setSquaresCount();

window.addEventListener("resize", setSquaresCount);