function headerComponent(el) {
	const headerEl = document.createElement("header");
	headerEl.className = "header";
	headerEl.innerHTML = `
    <a class="home__link" href="./index.html">
    <img class="header__logo" src="" alt="Logo">
    </a>
    <div class="header__open-menu-burger">
    <i class="fa-solid fa-bars fa-inverse fa-2xl header__menu-burger"></i>
    </div>
    <div class="header__nav">
        <li class="nav__link"><a href="./portfolio.html">Portfolio</a></li>
        <li class="nav__link"><a href="./servicios.html">Servicios</a></li>
        <li class="nav__link"><a href="./contacto.html">Contacto</a></li>
        <div class="header__close-menu-burger">
        <i class="fa-solid fa-times fa-inverse fa-2xl header__close-menu"></i>
        </div>

    </div>
    `;

	const navEl = headerEl.querySelector(".header__nav");
	const openMenu = headerEl.querySelector(".header__open-menu-burger");
	const closeMenu = headerEl.querySelector(".header__close-menu-burger");

	openMenu.addEventListener("click", () => {
		navEl.style.display = "flex";
		navEl.style.top = "0%";
	});

	closeMenu.addEventListener("click", () => {
		navEl.style.top = "-110%";
	});

	el.insertBefore(headerEl, el.firstChild);
}
