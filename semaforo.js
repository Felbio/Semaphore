const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopInterval();   
  turnOn[event.target.id]();   
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; 

const changeColor = () => {
  const colors = ['red', 'green', 'yellow'];
  const color = colors[ colorIndex ];
  turnOn[color]();
  nextIndex();
}

const stopInterval = () => {
    clearInterval(intervalId);
}

const turnOn = {
  'red' : () => img.src = './img/red.png',
  'yellow' : () => img.src = './img/yellow.png',
  'green' : () => img.src = './img/green.png',
  'automatic' : () => intervalId = setInterval( changeColor, 2000 )
}

buttons.addEventListener('click', trafficLight);