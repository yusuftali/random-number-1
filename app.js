console.log("*** WELCOME TO GUESS GAME ****")
let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let span = document.querySelector('.span');
let output = document.querySelector('.output');
let img = document.querySelector('.img');
let randomNumber = Math.ceil(Math.random() * 100);
let trial = 0;
btn.addEventListener("click", () => {
  let guess = input.value;
console.log(guess);
//?  Verilen hak kadar tahmin yapmak icin
if (isNaN(guess)) {
  output.innerText =`Please Enter A Number`;
} else if (guess < 1 || guess > 100) {
  output.innerText =`Please enter a number between 1-100`;
} else if (guess == randomNumber) {
  output.innerText =`Congrats, you won.`;
    window.setTimeout(function () {
    location.reload(true);
  }, 3000);
  trial++;
} else if (guess < randomNumber) {
  output.innerText =`⬆️ ${guess}`;
  trial++;
} else {
  output.innerText =`⬇️ ${guess}`;
  trial++;
  
}
input.focus();
input.value = "";
span.innerText =`${trial}`;
})
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    btn.click();
  }
});

