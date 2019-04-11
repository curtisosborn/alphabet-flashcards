let letter_p = document.getElementById("new-letter");

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function thousand() {
  let randomArray = {
    random0: Math.random(),
    random1: Math.random(),
    random2: Math.random(),
    random3: Math.random()
  };
  let pickRandom = Math.floor(Math.random() * 4);
  let number = Math.floor(randomArray[`random${pickRandom}`] * 26);
  letter_p.innerHTML = alphabet[number].toUpperCase();
  // console.log(randomArray.random1, randomArray.random2, randomArray.random3, randomArray.random0);
  // console.log(randomArray[`random${pickRandom}`]);
}

function testRandom() {
  for (var i = 0; i < 1000; i++) {
    let randomArray = {
      random0: Math.random(),
      random1: Math.random(),
      random2: Math.random(),
      random3: Math.random()
    };
    let pickRandom = Math.floor(Math.random() * 4);
    let number = Math.floor(randomArray[`random${pickRandom}`] * 26);
    console.log(alphabet[number].toUpperCase());
  }
}

letter_p.addEventListener("click", function() {
  thousand();
});

// testRandom();
