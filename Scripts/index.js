const inicio = document.getElementById("clic");
const barajar = document.getElementById("barajas_inicio");
const cartasVuelan = document.getElementById("cartas_vuelan");

window.onload = function () {
    const container = document.querySelector('.estrellas');
    const numberOfStars = 150; 

    for (let i = 0; i < numberOfStars; i++) {
      const estrella = document.createElement('div');
      estrella.classList.add('estrella');
  
      estrella.style.top = Math.random() * 100 + 'vh'; 

      estrella.style.left = Math.random() * 100 + 'vw'; 
  
      
      const starSize = Math.random() * 5 + 1; 

      estrella.style.width = starSize + 'px';
      estrella.style.height = starSize + 'px';
  

      const randomColor = `hsl(${Math.random() * 360}, 100%, 80%)`; 
      estrella.style.backgroundColor = randomColor;
  

      const animationDuration = Math.random() * 1.5 + 1.5; 
      estrella.style.animationDuration = `${animationDuration}s`;
  
      container.appendChild(estrella);
    }
};

inicio.addEventListener("click", () => {
  barajar.style.display = "none";

  setTimeout(() => {
    cartasVuelan.style.display = "block";

    const cartas = document.querySelectorAll(".carta_vuela");
    cartas.forEach((carta, index) => {
      carta.style.setProperty("--i", index);
    });

    const duracionAnimacion = 2000;

    const retrasoPorCarta = 500;

    const numeroCartas = cartas.length;

    const tiempoTotal =
      duracionAnimacion + retrasoPorCarta * (numeroCartas - 1);

    setTimeout(() => {
      window.location.href = "/pages/home.html";
    }, tiempoTotal);
  }, 800);
});
