function montarLogo(assets) {
	const headerEl = document.querySelector(".header");
	const footerEl = document.querySelector(".footer");

	const headerLogoEl = headerEl.querySelector(".header__logo");
	const footerLogoEl = footerEl.querySelector(".footer__logo");
	const imgEl = getLogoEl(assets);
	headerLogoEl.setAttribute("src", imgEl["fields"]["file"]["url"]);
	footerLogoEl.setAttribute("src", imgEl["fields"]["file"]["url"]);
}

function getLogoEl(assets) {
	const id = "5nwZDjXjIwzH2geOKc4Qd8";
	const imgEl = assets.find((asset) => {
		if (asset["fields"]["file"]["url"].includes(id)) {
			return asset;
		}
	});
	return imgEl;
}
