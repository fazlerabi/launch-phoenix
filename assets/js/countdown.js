let div = document.getElementById("countdown");
let distance = 24 * 60 * 60 * 1000;

let x = setInterval(function () {
  // Get today's date and time
  // Find the distance between now and the count down date

  distance -= 1000;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  let daystr = `<div class=" days time " >${days} <span>DAYS</span></div>`;
  let minstr = `<div class=" hours time " >${hours} <span>HOURS</span></div>`;
  let hourstr = `<div class=" mins time " >${minutes} <span>MINS</span></div>`;
  let secstr = `<div class=" secs time " >${seconds} <span>SECONDS</span></div>`;
  div.innerHTML = daystr + minstr + hourstr + secstr;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    div.innerHTML = "EXPIRED";
  }
}, 1000);
