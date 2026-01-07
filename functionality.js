const bingoTerms = ["Circle back", "Touch base", "Synergy", "Low-hanging fruit", "Think outside the box", "Take it offline", "Win-win", "Paradigm shift", "Best practice", "Ping me", "Deep dive", "Drill down", "Hard stop", "Action item", "Loop me in", "Pivot", "Unpack", "Bandwidth", "Table it", "Move the needle", "Birds eye view", "Core competency", "Scalable", "Blue sky thinking", "Value-add", "Holistic approach", "Align / Alignment", "Silos", "On my radar", "Run it up the flagpole", "Deliverables", "The Deck", "Capacity", "Ideate", "Leverage", "Touchpoint", "KPI", "Stakeholder", "How the sausage gets made"];

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}

function initGame() {
	const board = document.getElementById("bingo-board");
	const shuffledTerms = shuffle([...bingoTerms]);
	const selectedTerms = shuffledTerms.slice(0, 24);

	let termIndex = 0;

	for (let i = 0; i < 25; i++) {
		const square = document.createElement("div");
		square.classList.add("square");

		if (i === 12) {
			square.textContent = "FREE SPACE";
			square.classList.add("free-space");
		} else {
			square.textContent = selectedTerms[termIndex];
			termIndex++;

			square.addEventListener("click", function () {
				this.classList.toggle("selected");
			});
		}

		board.appendChild(square);
	}
}

window.onload = initGame;
