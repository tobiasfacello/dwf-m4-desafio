function montarPresentacion(items, assets) {
	const itemContainerEl = document.querySelector(".home__presentacion");

	items.find((item) => {
		if (item["fields"].hasOwnProperty("aboutMeTitle")) {
			const nombreEl = itemContainerEl.querySelector(".sobre-mi__titulo");
			const descripcionEl = itemContainerEl.querySelector(
				".sobre-mi__descripcion"
			);

			nombreEl.textContent =
				item["fields"]["aboutMeTitle"]["content"][0]["content"][0][
					"value"
				];
			descripcionEl.innerHTML =
				item["fields"]["aboutMeDescription"]["content"][0][
					"content"
				][0]["value"];
			const imgEl = itemContainerEl.querySelector(
				".presentacion__img-perfil"
			);
			const urlValue = getAboutMeImgEl(assets);
			imgEl.setAttribute("src", urlValue[0]["fields"]["file"]["url"]);
		}
	});
}

function getAboutMeImgEl(assets) {
	const id = "12XgqcUTLKiShNZV3aQt2b";
	const imgEl = assets.filter((asset) => {
		if (asset["fields"]["file"]["url"].includes(id)) {
			return asset;
		}
	});
	return imgEl;
}
