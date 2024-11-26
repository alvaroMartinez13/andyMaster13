window.onload = function () {
    const container = document.querySelector(".estrellas");
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const estrella = document.createElement("div");
        estrella.classList.add("estrella");

        estrella.style.top = Math.random() * 100 + "vh";

        estrella.style.left = Math.random() * 100 + "vw";

        const starSize = Math.random() * 2 + 1;

        estrella.style.width = starSize + "px";
        estrella.style.height = starSize + "px";

        const randomColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
        estrella.style.backgroundColor = randomColor;

        const animationDuration = Math.random() * 1.5 + 1.5;
        estrella.style.animationDuration = `${animationDuration}s`;

        container.appendChild(estrella);
    }
};

document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";
    document.querySelector("main").style.display = "none";
    document.getElementById("menu_carta").style.display = "flex";

    document.querySelectorAll('[id="carta_menu"]').forEach((carta) => {
        carta.style.display = "flex";
    });
    document.getElementById("cerrar").style.display = "flex";
});

document.getElementById("cerrar").addEventListener('click', () => {
    document.querySelector("main").style.display = "flex";

    document.getElementById("menu").style.display = "flex";

    document.querySelectorAll('[id="carta_menu"]').forEach((carta) => {
        carta.style.display = "none";
    });

    document.getElementById("cerrar").style.display = "none";

    document.getElementById("menu_carta").style.top = "none";

    document.querySelector(".cartas_info").style.display = "none";

    document.querySelector(".carta_info").classList.remove("volteada");

    document.querySelector(".info_titulo").innerHTML = ""; 
    document.querySelector(".info_descripcion").innerHTML = ""; 
    document.querySelector(".img_container_Ob").innerHTML = ""; 
    document.querySelector(".titulo_Ob").innerHTML = "";

});

document.querySelectorAll(".card").forEach((carta) => {
    carta.addEventListener('click', (event) => {
        document.getElementById("menu").style.display = "none";
        document.querySelector("main").style.display = "none";

        const cartaId = event.target.getAttribute("data-id");

        document.getElementById("menu_carta").style.display = "flex";
        document.querySelectorAll('#carta_menu').forEach(carta => {
            carta.style.display = 'none';
        });

        document.getElementById("menu_carta").style.top = "10%";
        document.getElementById("cerrar").style.display = "flex";

        document.querySelector(".cartas_info").style.display = "flex";

        document.getElementById("info_carta_trasera").style.display = "flex";

        fetch('../data/cartas_proyectos.json')
            .then(response => response.json())
            .then(data => {

                const carta = data.carta[cartaId];

                const contenedor_Titulo = document.querySelector(".info_titulo");
                const titulo_Desc = document.createElement('h2');
                titulo_Desc.innerHTML = carta.tema;

                contenedor_Titulo.appendChild(titulo_Desc);

                const contenedor_Desc = document.querySelector(".info_descripcion");
                const Descripcion = document.createElement('p');
                Descripcion.innerHTML = carta.info;

                contenedor_Desc.appendChild(Descripcion);

                const contenedor_Imagen = document.querySelector(".img_container_Ob");
                const imagen = document.createElement('img');
                imagen.src = carta.image;

                contenedor_Imagen.appendChild(imagen);

                const contenedor_H3 = document.querySelector(".titulo_Ob");
                const titulo_Obj = document.createElement('h3');
                titulo_Obj.innerHTML = carta.titulo;

                contenedor_H3.appendChild(titulo_Obj);
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON:', error);
            });

    });
});

document.querySelector(".carta_info").addEventListener("animationend", () => {
    setTimeout(() => {
        document.querySelector(".carta_info").classList.add("volteada");
    }, 500);
    document.querySelector(".info_texto").style.display = "flex";
});