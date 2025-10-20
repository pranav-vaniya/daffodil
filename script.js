if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("./sw.js");
}

const timeSelectContainer = document.querySelector(".time-select-container");
const clockContainer = document.querySelector(".clock-container");
const player1TimeContainer = document.querySelector(".player-1-remaining-time");
const player2TimeContainer = document.querySelector(".player-2-remaining-time");
let player1RemainingTime = 0;
let player2RemainingTime = 0;

// time in seconds
function setClock(time) {
	timeSelectContainer.style.display = "none";
	clockContainer.style.display = "flex";
	setPlayer1Time(time);
	setPlayer2Time(time);
}

function setPlayer1Time(time) {
	const minutes = Math.floor(time / 60);
	const remainingSeconds = time % 60;
	const formattedMinutes = String(minutes).padStart(0, "0");
	const formattedSeconds = String(remainingSeconds).padStart(2, "0");

	player1RemainingTime = time;
	player1TimeContainer.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
}

function setPlayer2Time(time) {
	const minutes = Math.floor(time / 60);
	const remainingSeconds = time % 60;
	const formattedMinutes = String(minutes).padStart(0, "0");
	const formattedSeconds = String(remainingSeconds).padStart(2, "0");

	player2RemainingTime = time;
	player2TimeContainer.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
}
