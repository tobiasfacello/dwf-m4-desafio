function montarServicios(items, assets) {
	const itemContainerEl = document.querySelector(".servicios__lista");
	const tplEl = document.querySelector(".servicio-tpl");

	items.map((item) => {
		if (item["fields"].hasOwnProperty("serviceName")) {
			const nombreEl = tplEl.content.querySelector(".servicio__nombre");
			const descripcionEl = tplEl.content.querySelector(
				".servicio__descripcion"
			);

			nombreEl.textContent = item["fields"]["serviceName"];
			descripcionEl.textContent = item["fields"]["serviceDescription"];
			const imgEl = tplEl.content.querySelector(".servicio__img");
			const urlValue = getServiceImgEl(item, assets);
			imgEl.setAttribute("src", urlValue[0]["fields"]["file"]["url"]);

			const clonTplEl = document.importNode(tplEl.content, true);
			itemContainerEl.appendChild(clonTplEl);
		}
	});
}

function getServiceImgId(item) {
	const imgId = item["fields"]["servicesImg"][0]["sys"]["id"];
	return imgId;
}

function getServiceImgEl(item, assets) {
	const id = getServiceImgId(item);
	const urlImg = assets.filter((asset) => {
		if (asset["fields"]["file"]["url"].includes(id)) {
			return asset;
		}
	});
	return urlImg;
}

function montarPortfolio(items, assets) {
	const itemContainerEl = document.querySelector(".portfolio__lista");
	const tplEl = document.querySelector(".project-tpl");

	items.find((item) => {
		if (item["fields"].hasOwnProperty("title")) {
			const nombreEl = tplEl.content.querySelector(".servicio__nombre");
			const descripcionEl = tplEl.content.querySelector(
				".servicio__descripcion"
			);
			const detallesEl = tplEl.content.querySelector(
				".servicio__detalles"
			);

			nombreEl.textContent = item["fields"]["title"];
			descripcionEl.textContent =
				item["fields"]["description"].substring(0, 150) + "...";
			detallesEl.setAttribute("href", item["fields"]["url"]);

			const imgEl = tplEl.content.querySelector(".servicio__img");
			const urlValue = getProjectImgEl(item, assets);
			imgEl.setAttribute("src", urlValue[0]["fields"]["file"]["url"]);

			const clonTplEl = document.importNode(tplEl.content, true);
			itemContainerEl.appendChild(clonTplEl);
		}
	});
}

function getProjectImgId(item) {
	const imgId = item["fields"]["image"][0]["sys"]["id"];
	return imgId;
}

function getProjectImgEl(item, assets) {
	const id = getProjectImgId(item);
	const urlImg = assets.filter((asset) => {
		if (asset["fields"]["file"]["url"].includes(id)) {
			return asset;
		}
	});
	return urlImg;
}
