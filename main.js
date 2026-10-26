/* Comportamento da página. Os dados editáveis ficam em config.js */

const waLink = t => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;

document.querySelectorAll(".js-book").forEach(a => {
  a.href = CONFIG.linkAgendamento || waLink(CONFIG.mensagemPadrao);
});

document.getElementById("bookForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  let t = `Olá, Josélia! Sou ${f.get("nome")} e gostaria de agendar uma consulta. Atendimento para: ${f.get("quem")}.`;
  if (f.get("msg")) t += ` ${f.get("msg")}`;
  window.open(waLink(t), "_blank", "noopener");
});

const burger = document.querySelector(".burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => { if (e.target.closest("a")) { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

document.getElementById("ano").textContent = new Date().getFullYear();
