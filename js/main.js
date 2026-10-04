const form = document.getElementById("form-contato");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const tipo = document.getElementById("tipo").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  const texto =
    `Olá! Me chamo ${nome}.\n` +
    `Tipo de projeto: ${tipo}\n` +
    `Ideia: ${mensagem}`;

  const url = "https://wa.me/5531991276230?text=" + encodeURIComponent(texto);
  window.open(url, "_blank");
});

/* ===== Tema claro/escuro ===== */
const raiz = document.documentElement;
const botaoTema = document.getElementById("tema");

const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) raiz.dataset.tema = temaSalvo;

botaoTema.addEventListener("click", () => {
  const sistemaEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const atual = raiz.dataset.tema || (sistemaEscuro ? "escuro" : "claro");
  const novo = atual === "escuro" ? "claro" : "escuro";
  raiz.dataset.tema = novo;
  localStorage.setItem("tema", novo);
});

/* ===== Animação ao rolar ===== */
const itens = document.querySelectorAll(".secao h2, .cartao, .passos li, .sobre");
itens.forEach((el) => el.classList.add("revelar"));

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

itens.forEach((el) => observador.observe(el));