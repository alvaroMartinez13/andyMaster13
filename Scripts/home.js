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
  document.querySelector("main").style.display = "none";
  document.querySelector("hr").style.display = "none";
  document.querySelector("footer").style.display = "none";
  document.getElementById("menu").style.display = "none";

  document.getElementById("menu_cartas").style.display = "flex";
  document.getElementById("cerrar").style.display = "flex";
});

document.getElementById("cerrar").addEventListener('click', () => {
    document.querySelector("main").style.display = "flex";
    document.querySelector("hr").style.display = "flex";
    document.querySelector("footer").style.display = "flex";
    document.getElementById("menu").style.display = "flex";
  
    document.getElementById("menu_cartas").style.display = "none";

    document.getElementById("cerrar").style.display = "none";
});
