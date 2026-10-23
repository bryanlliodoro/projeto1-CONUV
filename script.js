// Menu mobile
const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("#menu");
if (btn && nav) {
  btn.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    btn.setAttribute("aria-expanded", aberto);
  });
}

// Lightbox das obras
const obras = document.querySelectorAll(".obra");
if (obras.length) {
  const dlg = document.createElement("dialog");
  dlg.id = "lightbox";
  dlg.innerHTML = '<button type="button" aria-label="Fechar">Fechar ✕</button><img alt=""><p></p>';
  document.body.appendChild(dlg);
  const img = dlg.querySelector("img");
  const legenda = dlg.querySelector("p");
  obras.forEach((o) => {
    o.addEventListener("click", () => {
      const i = o.querySelector("img");
      img.src = i.src;
      img.alt = i.alt;
      legenda.textContent = o.querySelector("figcaption")?.innerText.replace("\n", " · ") || i.alt;
      dlg.showModal();
    });
  });
  dlg.addEventListener("click", (e) => { if (e.target !== img) dlg.close(); });
}