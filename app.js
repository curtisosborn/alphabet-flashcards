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
	let number = Math.floor(Math.random() * 26);
	letter_p.innerHTML = alphabet[number];
}

letter_p.addEventListener("click", function() {
	thousand();
});
