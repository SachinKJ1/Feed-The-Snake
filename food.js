import { onSnake,expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
let food = getRandomFoodPosition();
let expanstion_rate = 3;
export function update() {
if(onSnake(food)){
    expandSnake(expanstion_rate)
    food = getRandomFoodPosition()
}
}

export function draw(gameBoard) {
  const foodElelment = document.createElement("div");
  foodElelment.style.gridRowStart = food.y;
  foodElelment.style.gridColumnStart = food.x;
  foodElelment.classList.add("food");
  gameBoard.appendChild(foodElelment);
}

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}