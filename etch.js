// create 16 x 16 grid using DOM

let color = 'black';

document.getElementById("btn").onclick = function() {
  reset();
  let size = prompt("How many squares per side?");

  if(size >= 2 && size <= 100) {
    createGrid(size);
  }
  else {
    alert("Set a size between 2 and 100");
  }
  
}

function createGrid(size) {


  let container = document.querySelector("#grid");
  
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for(let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.height = `500 / ${size}`;
    square.style.width = `500 / ${size}`;
    container.appendChild(square);
  
    // container.insertAdjacentElement("beforeend", square); 
    // this also works insead of appendChild
  
    square.addEventListener('mouseenter', () => 
      square.style.backgroundColor = 'black'
    );

  }
}

function reset() {
  let container = document.querySelector("#grid");
  let square = container.querySelectorAll('div');
  square.forEach((div) => div.style.backgroundColor = 'white')
}

// function divColor() {
//   if(this.document.getElementById === btn2) {
//     return "#" + ((1<<24)*Math.random() | 0).toString(16);
//   }
//   else {
//     return 'black';
//   }
  
// }

