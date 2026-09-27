// Menu hambúrguer
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.querySelector(".sidebar1"); // botão Fechar

function toggleSidebar() {
  sidebar.classList.toggle("open");
}

hamburger.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);

// Carrossel automático
let slideIndex = 0;
const slides = document.querySelectorAll(".carrossel img");
const indicadores = document.querySelectorAll(".indicadores div");

function mostrarSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("ativo");
    indicadores[i].classList.remove("ativo");
    if (i === n) {
      slide.classList.add("ativo");
      indicadores[i].classList.add("ativo");
    }
  });
}

function proximoSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  mostrarSlide(slideIndex);
}

// Troca de slide a cada 3 segundos
setInterval(proximoSlide, 3000);

// Clique nos indicadores
indicadores.forEach((indicador, i) => {
  indicador.addEventListener("click", () => {
    slideIndex = i;
    mostrarSlide(slideIndex);
  });
});