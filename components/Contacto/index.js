function contactComponent(el) {
	const contacto = document.createElement("section");
	contacto.className = "home__contacto";
	contacto.innerHTML = `
    <h2 class="contacto__titulo">Escribime</h2>
            <form action="" class="contacto__form" onsubmit="event.preventDefault()">
                <div class="form__section">
                    <label for="nombre" class="section__label">NOMBRE</label>
                    <input id="nombre" type="text" class="section__input">
                </div>

                <div class="form__section">
                    <label for="email" class="section__label">EMAIL</label>
                    <input id="email" type="email" class="section__input">
                </div>

                <div class="form__section">
                    <label class="section__label" for="mensaje">Mensaje</label>
                    <textarea id="mensaje" cols="30" rows="7" class="section__mensaje"></textarea>
                </div>

                <div class="form__button-container">
                    <button class="form__submit-button">Enviar</button>
                </div>
            </form>
    `;
	el.appendChild(contacto);
}
