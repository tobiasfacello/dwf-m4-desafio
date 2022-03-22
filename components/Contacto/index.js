function contactComponent(el) {
	const contacto = document.createElement("section");
	contacto.className = "home__contacto";
	contacto.innerHTML = `
    <h2 class="contacto__titulo">Escribime</h2>
            <form action="post" class="contacto__form" onsubmit="event.preventDefault()">
                <div class="form__section">
                    <label for="nombre" class="section__label">NOMBRE</label>
                    <input id="nombre" type="text" class="section__input" required>
                </div>

                <div class="form__section">
                    <label for="email" class="section__label">EMAIL</label>
                    <input id="email" type="email" class="section__input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                </div>

                <div class="form__section">
                    <label class="section__label" for="mensaje">Mensaje</label>
                    <textarea id="mensaje" cols="30" rows="7" class="section__mensaje" required></textarea>
                </div>

                <div class="form__button-container">
                    <button class="form__submit-button">Enviar</button>
                </div>
            </form>
    `;

	const form = contacto.querySelector(".contacto__form");
	const nombreEl = contacto.querySelector("#nombre");
	const emailEl = contacto.querySelector("#email");
	const mensajeEl = contacto.querySelector("#mensaje");

	function validarFormulario(event) {
		if (event.target.checkValidity() == true) {
			event.target.setAttribute("style", "border-color: #15b560");
		} else if (event.target.checkValidity() == false) {
			event.target.setAttribute("style", "border-color: #e43333");
		}
	}

	nombreEl.addEventListener("keyup", (event) => validarFormulario(event));
	nombreEl.addEventListener("blur", (event) => validarFormulario(event));

	emailEl.addEventListener("keyup", (event) => validarFormulario(event));
	emailEl.addEventListener("blur", (event) => validarFormulario(event));

	mensajeEl.addEventListener("keyup", (event) => validarFormulario(event));
	mensajeEl.addEventListener("blur", (event) => validarFormulario(event));

	form.addEventListener("submit", () => {
		const mensaje = {
			to: "tobiasfacellodeveloper@gmail.com",
			message: `Nombre: ${nombreEl.value}\n Email: ${emailEl.value}\n Mensaje: "${mensajeEl.value}".`,
		};
		fetch("https://apx-api.vercel.app/api/utils/dwf", {
			method: "POST",
			body: JSON.stringify(mensaje),
			headers: { "content-type": "application/json" },
		}).catch((error) => {
			console.log(error);
		});
		nombreEl.value = "";
		emailEl.value = "";
		mensajeEl.value = "";

		nombreEl.setAttribute("style", "border-color: #2c2c2c");
		emailEl.setAttribute("style", "border-color: #2c2c2c");
		mensajeEl.setAttribute("style", "border-color: #2c2c2c");

		swal({
			title: "Mensaje enviado correctamente! 🚀",
			text: "Gracias por su mensaje, el destinatario lo contestará en la brevedad.",
			icon: "success",
			button: true,
		});
	});

	el.appendChild(contacto);
}
