let currentNumber = 1;
document.querySelector('#slide' + currentNumber).classList.add('show');
document.querySelector('#pin' + currentNumber).classList.add('selected');

let playing = false;
let interval;

for (let pinNumber = 1; pinNumber <=5; pinNumber++) {
  document
    .querySelector('#pin' + pinNumber)
    .addEventListener('click', () => {
      showSlide(pinNumber);
    });
}

function showNextSlide() {
  currentNumber++;
  if (currentNumber > 5) {
    currentNumber = 1;
  }
  showSlide(currentNumber);
}
document.querySelector('#next').addEventListener('click', showNextSlide);

function showPreviousSlide() {
  currentNumber--;
  if (currentNumber < 1) {
    currentNumber = 5;
  }
  showSlide(currentNumber);
}
document.querySelector('#prev').addEventListener('click', showPreviousSlide);

function showSlide (newNumber) {
  document.querySelector('.show').classList.remove('show');
  document.querySelector('#slide' + newNumber).classList.add('show');
  currentNumber = newNumber;
  selectPin(newNumber);
}

function selectPin(newNumber) {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('#pin' + newNumber).classList.add('selected');
}

function startSlideshow() {
  document.querySelector('#play').classList.add('on');
  playing = true;
  interval = setInterval(showNextSlide, 3000);
}

function stopSlideshow() {
  document.querySelector('#play').classList.remove('on');
  playing = false;
  clearInterval(interval);
}

function playButtonClicked() {
  if(playing === true) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}
document.querySelector('#play').addEventListener('click', playButtonClicked);