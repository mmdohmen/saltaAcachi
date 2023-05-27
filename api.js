// Define el arreglo de ciudades con sus IDs correspondientes
const ciudades = [
	{ nombre: "Salta Capital", id: 3838233 },
	{ nombre: "Iruya", id: 3854965 },
	{ nombre: "Cafayate", id: 3855065 },
	{ nombre: "Cachi", id: 3864538 }
];

  // Obtiene el contenedor del clima en el DOM
const contenedorClima = document.getElementById("clima-container");
// Clave API de OpenWeatherMap
const apiKey = "bf59789b664a93df39d16fe1ea194eda";

  // Iterar sobre las ciudades y obtener el clima de cada una
ciudades.forEach(ciudad => {
	obtenerClima(ciudad);
});

function obtenerClima(ciudad) {
	// Configura la URL de la API de OpenWeatherMap con el ID de la ciudad y la clave de API
	const url = `https://api.openweathermap.org/data/2.5/weather?id=${ciudad.id}&appid=bf59789b664a93df39d16fe1ea194eda&units=metric&lang=es`;

	// Realizar la solicitud a la API
	fetch(url)
	.then(response => response.json())
	.then(data => {
		// Obtiene la información relevante del clima de la respuesta de la API
		const temperatura = data.main.temp;
		const descripcion = data.weather[0].description;
		const humedad = data.main.humidity;

		// Crea elementos para mostrar el clima de la ciudad actual
		const contenedorCiudad = document.createElement("div");
		const nombreCiudadElemento = document.createElement("h2");
		const temperaturaElemento = document.createElement("p");
		const descripcionElemento = document.createElement("p");
		const humedadElemento = document.createElement("p");
		const iconoElemento = document.createElement("i");

		// Asigna contenido y clases a los elementos
		nombreCiudadElemento.textContent = ciudad.nombre;
		temperaturaElemento.textContent = `Temperatura: ${temperatura}°C`;
		descripcionElemento.textContent = `Descripción: ${descripcion}`;
		humedadElemento.textContent = `Humedad: ${humedad}%`;

		// Asigna clases a los elementos
		nombreCiudadElemento.classList.add("city-weather-item");
		temperaturaElemento.classList.add("city-weather-item");
		descripcionElemento.classList.add("city-weather-item");
		humedadElemento.classList.add("city-weather-item");
		iconoElemento.classList.add("city-weather-item", "fas");

		// Asigna una clase de icono específica según la descripción del clima
		if (descripcion.includes("despejado") || descripcion.includes("soleado") || descripcion.includes("cielo claro")) {
			iconoElemento.classList.add("fa-sun");
		}else if (descripcion.includes("muy nuboso") || descripcion.includes("nuboso") || descripcion.includes("nubes")) {
			iconoElemento.classList.add("fa-cloud");
		}else if (descripcion.includes("lluvia") || descripcion.includes("lluvioso")) {
			iconoElemento.classList.add("fa-cloud-rain");
		} else if (descripcion.includes("nieve")) {
		iconoElemento.classList.add("fa-snowflake");
		} else if (descripcion.includes("tormenta")) {
			iconoElemento.classList.add("fa-bolt");
		}else if (descripcion.includes("parcialmente nuboso") || descripcion.includes("cielo raro")) {
			iconoElemento.classList.add("fa-sun-cloud");
		}else {
		  iconoElemento.classList.add("fa-question-circle"); // Icono predeterminado en caso de estado del clima desconocido
		}

		// Agrega elementos al contenedor de la ciudad
		contenedorCiudad.appendChild(nombreCiudadElemento);
		contenedorCiudad.appendChild(temperaturaElemento);
		contenedorCiudad.appendChild(descripcionElemento);
		contenedorCiudad.appendChild(humedadElemento);
		contenedorCiudad.appendChild(iconoElemento);

		// Agrega el contenedor de la ciudad al contenedor principal del clima
		contenedorClima.appendChild(contenedorCiudad);
	})
	.catch(error => {
		console.log("Error:", error);
	});
}













