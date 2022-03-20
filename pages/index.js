function main() {
	const headerContainer = document.querySelector(".home__bienvenida");
	const contactContainer = document.querySelector(".seccion-contacto");
	const footerContainer = document.querySelector(".seccion-footer");
	headerComponent(headerContainer);
	contactComponent(contactContainer);
	footerComponent(footerContainer);

	function armarItems(items, assets) {
		montarLogo(assets);
		montarBackground(assets);
		montarPresentacion(items, assets);
		montarServicios(items, assets);
	}

	fetch(
		"https://cdn.contentful.com/spaces/dpse4lvliyip/environments/master/entries?access_token=YzVXGfRAQxbnNkufAPhQDpv_4-8b2NM_D6KC59hhdco"
	)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			armarItems(data["items"], data["includes"]["Asset"]);
		});
}

main();
