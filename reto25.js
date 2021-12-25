function canMouseEat(direction, game) {
    let mice = [0,0];
    let food = [];
    game.forEach((row, index) => {
        let findMice = row.findIndex(element => element === 'm');
        if (findMice != -1) mice= [index,findMice];
        let findFood = row.findIndex(element => element === '*');
        if (findFood != -1) food[index] = findFood;
    });
    switch (direction) {
        case 'right':
            return food[mice[0]]?food[mice[0]]===mice[1]+1:false;
            break;
        case 'left':
            return food[mice[0]]?food[mice[0]]===mice[1]-1:false;
            break;
        case 'up':
            return food[mice[0]-1]?food[mice[0]-1]===mice[1]:false;
            break;
        case 'down':
            return food[mice[0]+1]?food[mice[0]+1]===mice[1]:false;
            break;
    }
}

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]
  
 console.log(canMouseEat('up',    room))   // false
  console.log(canMouseEat('down',  room))   // true
  console.log(canMouseEat('right', room))   // false
  console.log(canMouseEat('left',  room))   // false

  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]
  console.log(canMouseEat('up',    room2))   // false
  console.log(canMouseEat('down',  room2))   // false
  console.log(canMouseEat('right', room2))   // true
  console.log(canMouseEat('left',  room2))   // false

