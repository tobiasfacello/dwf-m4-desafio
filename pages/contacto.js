function main() {
	const headerContainer = document.querySelector(".seccion-header");
	const contactContainer = document.querySelector(".seccion-contacto");
	const footerContainer = document.querySelector(".seccion-footer");
	headerComponent(headerContainer);
	contactComponent(contactContainer);
	footerComponent(footerContainer);

	function armarItems(assets) {
		montarLogo(assets);
	}

	fetch(
		"https://cdn.contentful.com/spaces/dpse4lvliyip/environments/master/entries?access_token=YzVXGfRAQxbnNkufAPhQDpv_4-8b2NM_D6KC59hhdco"
	)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			armarItems(data["includes"]["Asset"]);
		});
}

main();
