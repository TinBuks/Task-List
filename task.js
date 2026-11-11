const items = [];
const input = require("@mimo-org/input");
let running = true;

while (running) {
  console.log("Writing 1 will display the list, 2 will add a new item, 3 will remove an item, 4 will terminate the program.");
  choice = parseInt(input("Which option? "));
  if (choice === 4) {
    running = false;
  } else if (choice === 1) {
    displayList(items);
  } else if (choice === 2) {
    newItem = input("Enter new item to add: ");
    addItem(items, newItem);
  } else if (choice === 3) {
    removeChoice = input("Which item will be removed? ");
    removeItem(items, removeChoice);
  } else {
  console.log("Choose 1, 2, or 3");
  }
}

function displayList(items) {
  console.log("Here is the list of items:");
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}
function addItem(items, itemToAdd) {
  items.push(itemToAdd);
  console.log(items);
}
function removeItem(items, itemIndex) {
  displayList(items);
  if (itemIndex > 0 && itemIndex <= items.length) {
    const removedItem = items.splice(itemIndex - 1, 1)[0];
    console.log({removedItem} + "was removed");
    return removedItem;
  } else {
    console.log("Invalid number. Please try again.");
  }
}
