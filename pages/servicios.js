/*! Página de Servicios */

function main() {
	const headerContainer = document.querySelector(".seccion-header");
	const footerContainer = document.querySelector(".seccion-footer");
	headerComponent(headerContainer);
	footerComponent(footerContainer);

	function armarItems(items, assets) {
		montarLogo(assets);
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
