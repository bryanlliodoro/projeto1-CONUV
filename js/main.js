/* Página única: colagem do topo, galeria com as 35 imagens, filtro por exposição e lightbox. */
document.addEventListener("DOMContentLoaded", () => {
  const mosaico = document.getElementById("mosaico");
  const chips = document.getElementById("chips-exp");
  const contador = document.getElementById("contador");
  let filtro = 0;
  let lista = [];

  // Colagem do topo: 5 imagens
  document.getElementById("colagem").innerHTML = [6, 12, 18, 24, 30].map((n) => {
    const im = IMAGENS[n];
    return `<figure><img src="${s3(im.arquivo)}" alt="${im.titulo}" onerror="fallbackImg(this, ${n + 1}, '${im.arquivo}')"></figure>`;
  }).join("");

  // Filtros por exposição
  chips.innerHTML =
    `<button class="chip ativo" data-exp="0">Todas (${IMAGENS.length})</button>` +
    EXPOSICOES.map((e) => `<button class="chip" data-exp="${e.id}">${e.titulo} (${IMAGENS.filter((i) => i.exp === e.id).length})</button>`).join("");

  function render() {
    lista = IMAGENS.filter((im) => !filtro || im.exp === filtro);
    mosaico.innerHTML = lista.map(itemImagem).join("");
    contador.textContent = `${lista.length} imagens`;
  }

  chips.addEventListener("click", (ev) => {
    const b = ev.target.closest(".chip");
    if (!b) return;
    chips.querySelectorAll(".chip").forEach((c) => c.classList.remove("ativo"));
    b.classList.add("ativo");
    filtro = Number(b.dataset.exp);
    render();
  });

  // Lightbox com anterior/próxima
  document.body.insertAdjacentHTML("beforeend",
    `<div id="lightbox" hidden>
       <button id="lb-fechar" aria-label="Fechar">✕</button>
       <button class="lb-nav lb-ant" aria-label="Anterior">‹</button>
       <img alt=""><p></p>
       <button class="lb-nav lb-prox" aria-label="Próxima">›</button>
     </div>`);
  const box = document.getElementById("lightbox");
  const lbImg = box.querySelector("img");
  let atual = 0;

  function mostrar(i) {
    atual = (i + lista.length) % lista.length;
    const im = lista[atual], e = exposicaoDe(im);
    lbImg.onerror = () => fallbackImg(lbImg, IMAGENS.indexOf(im) + 1, im.arquivo);
    lbImg.src = s3(im.arquivo);
    lbImg.alt = im.titulo;
    box.querySelector("p").textContent = `${im.titulo} · ${e.titulo}, ${e.artista}  (${atual + 1}/${lista.length})`;
    box.hidden = false;
  }
  const fechar = () => (box.hidden = true);

  box.addEventListener("click", (ev) => {
    if (ev.target.closest(".lb-ant")) return mostrar(atual - 1);
    if (ev.target.closest(".lb-prox")) return mostrar(atual + 1);
    fechar();
  });
  document.addEventListener("keydown", (ev) => {
    if (box.hidden) return;
    if (ev.key === "Escape") fechar();
    if (ev.key === "ArrowLeft") mostrar(atual - 1);
    if (ev.key === "ArrowRight") mostrar(atual + 1);
  });
  mosaico.addEventListener("click", (ev) => { const f = ev.target.closest(".obra"); if (f) mostrar(Number(f.dataset.i)); });
  mosaico.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") { const f = ev.target.closest(".obra"); if (f) mostrar(Number(f.dataset.i)); }
  });

  render();
});
