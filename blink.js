var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
//var LED = new Gpio(4, 'out'); //MAPPATURA SBAGLIATA, VEDI SOTTO 
var LED = new Gpio(516, 'out'); //use GPIO pin 516, and specify that it is output
var blinkInterval = setInterval(blinkLED, 2000); //run the blinkLED function every ....

function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}
