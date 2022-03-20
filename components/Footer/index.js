function footerComponent(el) {
	const footer = document.createElement("footer");
	footer.className = "footer";
	footer.innerHTML = `
        <img src="" alt="" class="footer__logo">
        <div class="redes">
            <ul class="redes__lista">
                <a href="https://www.instagram.com/tobiasfacello" target="blank_" class="lista__link">
                <i class="fa-brands fa-instagram-square fa-inverse fa-2xl item__img"></i>
                    Instagram
                </a>

                <a href="https://www.linkedin.com/in/tobiasfacello" target="blank_" class="lista__link">
                <i class="fa-brands fa-linkedin fa-inverse fa-2xl item__img"></i>
                    LinkedIn
                </a>

                <a href="https://www.github.com/tobiasfacello" target="blank_" class="lista__link">
                <i class="fa-brands fa-github-square fa-inverse fa-2xl item__img"></i>
                    GitHub
                </a>
            </ul>
        </div>
    `;
	el.appendChild(footer);
}
