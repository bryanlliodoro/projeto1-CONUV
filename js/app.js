/* Funções compartilhadas: imagens do S3, aviso de configuração, item da galeria e menu. */
(function () {
  const BASE = (window.ATLAS_CONFIG.S3_BASE_URL || "").replace(/\/$/, "");
  const CONFIGURADO = BASE && !BASE.includes("SEU-BUCKET");

  window.s3 = (path) => `${BASE}/${path}`;

  /* Quando uma imagem não carrega (link do S3 não configurado ou arquivo faltando),
     mostra um quadro colorido com o NOME EXATO do arquivo que deve ser enviado ao S3. */
  const PALETA = ["#c8553d", "#2a6f6b", "#d9a441", "#5b4b8a", "#3d6b9c", "#8a5a44"];
  window.fallbackImg = function (img, seed, path) {
    const c1 = PALETA[seed % PALETA.length], c2 = PALETA[(seed + 2) % PALETA.length];
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs>
      <rect width='400' height='500' fill='url(#g)'/>
      <rect x='24' y='24' width='352' height='452' rx='14' fill='none' stroke='white' stroke-width='3' stroke-dasharray='14 10' opacity='.75'/>
      <text x='200' y='215' text-anchor='middle' font-family='Arial,sans-serif' font-size='24' font-weight='700' fill='white'>COLOQUE AQUI</text>
      <text x='200' y='252' text-anchor='middle' font-family='Arial,sans-serif' font-size='21' fill='white'>${path || ""}</text>
      <text x='200' y='285' text-anchor='middle' font-family='Arial,sans-serif' font-size='15' fill='white' opacity='.85'>(imagem no bucket S3)</text>
    </svg>`;
    img.onerror = null;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  };

  window.exposicaoDe = (im) => EXPOSICOES.find((e) => e.id === im.exp);

  // Uma imagem da galeria. "i" é a posição na lista exibida (usada pelo lightbox).
  window.itemImagem = function (im, i) {
    const e = exposicaoDe(im);
    return `
      <figure class="obra" data-i="${i}" tabindex="0" role="button" aria-label="Ampliar ${im.titulo}">
        <img src="${s3(im.arquivo)}" alt="${im.titulo}, exposição ${e.titulo}" loading="lazy"
             onerror="fallbackImg(this, ${IMAGENS.indexOf(im) + 1}, '${im.arquivo}')">
        <figcaption><b>${im.titulo}</b><span>${e.titulo} · ${e.artista}</span></figcaption>
      </figure>`;
  };

  document.addEventListener("DOMContentLoaded", () => {
    // Faixa amarela enquanto o link do S3 não foi colocado
    if (!CONFIGURADO) {
      document.body.insertAdjacentHTML("afterbegin",
        `<div class="aviso-s3">⚠ Link do AWS S3 ainda não configurado: abra <code>js/config.js</code> e cole o link em <code>S3_BASE_URL</code>.</div>`);
    }
    const btn = document.getElementById("menu-btn"), nav = document.getElementById("nav");
    if (btn) {
      btn.addEventListener("click", () => btn.setAttribute("aria-expanded", nav.classList.toggle("aberto")));
      nav.addEventListener("click", (ev) => { if (ev.target.tagName === "A") nav.classList.remove("aberto"); });
    }
    const ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();
  });
})();
