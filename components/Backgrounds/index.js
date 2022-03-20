function montarBackground(assets) {
	const bienvenidaEl = document.querySelector(".home__bienvenida");
	const mobileMockupEl = getMobileMockup(assets);
	const desktopMockupEl = getDesktopMockup(assets);

	const mobileMediaQuery = window.matchMedia("(min-width: 320px)");
	const desktopMediaQuery = window.matchMedia("(min-width: 475px)");

	if (desktopMediaQuery.matches) {
		bienvenidaEl.style.backgroundImage = `url("${desktopMockupEl["fields"]["file"]["url"]}")`;
	} else if (mobileMediaQuery.matches) {
		bienvenidaEl.style.backgroundImage = `url("${mobileMockupEl["fields"]["file"]["url"]}")`;
	}
}

function getMobileMockup(assets) {
	const id = "23IXwDRHQujIw5JY5qFtPR";
	const imgEl = assets.find((asset) => {
		if (asset["fields"]["file"]["url"].includes(id)) {
			return asset;
		}
	});
	return imgEl;
}

function getDesktopMockup(assets) {
	const id = "1mmJdUFFHkze93zVQyrZo4";
	const imgEl = assets.find((asset) => {
		if (asset["fields"]["file"]["url"].includes(id)) {
			return asset;
		}
	});
	return imgEl;
}
