		const nombre = document.getElementById("name");
		const correo = document.getElementById("correo");
		const pass = document.getElementById("password");
		const boton = document.getElementById("enviar");
		const resultado = document.querySelector(".resultado");
		const form = document.getElementById("formulario");
		

		boton.addEventListener("click", (e)=>{
			e.preventDefault();
			let error = validarCampos();
			if (error[0]) {
				resultado.innerHTML = error[1];
				resultado.classList.add("red");
			} else {
				resultado.innerHTML = "Solicitud enviada con Exito, revisa tu E-mail";
				resultado.classList.remove("red");
				resultado.classList.add("green");
				form.reset();

			}
		});

		function validarCampos() {
			let error = [];
			if (nombre.value.length < 4 || nombre.value.length > 10) {
				error[0] = true;
				error[1] = "El nombre debe tener entre 4 y 10 caracteres";
				return error;
			} else if (correo.value.length < 10 || correo.value.length > 100) {
				error[0] = true;
				error[1] = "El emial es invalido";
				return error;
				
			} else if (pass.value.length < 6 || pass.value.length > 16) {
				error[0] = true;
				error[1] = "La contraseña debe tener entre 6 y 16 caracteres";
				return error;
				
			}

			error[0] = false;
			return error;
		}