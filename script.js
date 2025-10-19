if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("./sw.js");
}

window.addEventListener("resize", () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
});
