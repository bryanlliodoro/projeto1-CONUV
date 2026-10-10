/* ============================================================================
 *  LISTA DAS 35 IMAGENS DO SITE
 *
 *  O campo "arquivo" é o caminho da imagem DENTRO do bucket S3.
 *  Se os seus arquivos tiverem outros nomes, é só trocar o texto de "arquivo"
 *  aqui (é o único lugar). O site monta o endereço assim:
 *      S3_BASE_URL (js/config.js)  +  "/"  +  arquivo
 * ========================================================================== */

window.EXPOSICOES = [
  { id: 1, titulo: "Luz e Sombra",       artista: "Marina Teixeira", categoria: "Fotografia" },
  { id: 2, titulo: "Cores do Sertão",    artista: "Rafael Nogueira", categoria: "Pintura" },
  { id: 3, titulo: "Matéria Viva",       artista: "Coletivo Barro",  categoria: "Escultura" },
  { id: 4, titulo: "Pixels e Pigmentos", artista: "Julia Andrade",   categoria: "Arte Digital" },
  { id: 5, titulo: "Memória do Traço",   artista: "Carlos Mendes",   categoria: "Desenho" },
  { id: 6, titulo: "Entre Fios",         artista: "Ateliê Trama",    categoria: "Instalação" },
];

window.IMAGENS = [
  // ---- 6 capas das exposições (pasta exposicoes/) ----
  { arquivo: "exposicoes/luz-e-sombra.jpg",       titulo: "Capa: Luz e Sombra",       exp: 1 },
  { arquivo: "exposicoes/cores-do-sertao.jpg",    titulo: "Capa: Cores do Sertão",    exp: 2 },
  { arquivo: "exposicoes/materia-viva.jpg",       titulo: "Capa: Matéria Viva",       exp: 3 },
  { arquivo: "exposicoes/pixels-e-pigmentos.jpg", titulo: "Capa: Pixels e Pigmentos", exp: 4 },
  { arquivo: "exposicoes/memoria-do-traco.jpg",   titulo: "Capa: Memória do Traço",   exp: 5 },
  { arquivo: "exposicoes/entre-fios.jpg",         titulo: "Capa: Entre Fios",         exp: 6 },

  // ---- 29 obras (pasta obras/) ----
  { arquivo: "obras/obra-01.jpg", titulo: "Viaduto ao amanhecer",   exp: 1 },
  { arquivo: "obras/obra-02.jpg", titulo: "Janela 14",              exp: 1 },
  { arquivo: "obras/obra-03.jpg", titulo: "Reflexo na Paulista",    exp: 1 },
  { arquivo: "obras/obra-04.jpg", titulo: "Sombra longa",           exp: 1 },
  { arquivo: "obras/obra-05.jpg", titulo: "Mandacaru",              exp: 2 },
  { arquivo: "obras/obra-06.jpg", titulo: "Estrada de terra",       exp: 2 },
  { arquivo: "obras/obra-07.jpg", titulo: "Vaqueiro",               exp: 2 },
  { arquivo: "obras/obra-08.jpg", titulo: "Seca e flor",            exp: 2 },
  { arquivo: "obras/obra-09.jpg", titulo: "Raiz",                   exp: 3 },
  { arquivo: "obras/obra-10.jpg", titulo: "Torso de barro",         exp: 3 },
  { arquivo: "obras/obra-11.jpg", titulo: "Arco",                   exp: 3 },
  { arquivo: "obras/obra-12.jpg", titulo: "Fôrma e vazio",          exp: 3 },
  { arquivo: "obras/obra-13.jpg", titulo: "Glitch azul",            exp: 4 },
  { arquivo: "obras/obra-14.jpg", titulo: "Pixel orgânico",         exp: 4 },
  { arquivo: "obras/obra-15.jpg", titulo: "Neon em aquarela",       exp: 4 },
  { arquivo: "obras/obra-16.jpg", titulo: "Código e pigmento",      exp: 4 },
  { arquivo: "obras/obra-17.jpg", titulo: "Autorretrato a nanquim", exp: 5 },
  { arquivo: "obras/obra-18.jpg", titulo: "Mãos",                   exp: 5 },
  { arquivo: "obras/obra-19.jpg", titulo: "Cidade em grafite",      exp: 5 },
  { arquivo: "obras/obra-20.jpg", titulo: "Estudo de panos",        exp: 5 },
  { arquivo: "obras/obra-21.jpg", titulo: "Trama vermelha",         exp: 6 },
  { arquivo: "obras/obra-22.jpg", titulo: "Cortina de fibras",      exp: 6 },
  { arquivo: "obras/obra-23.jpg", titulo: "Tingimento natural",     exp: 6 },
  { arquivo: "obras/obra-24.jpg", titulo: "Fio solto",              exp: 6 },
  { arquivo: "obras/obra-25.jpg", titulo: "Esquina iluminada",      exp: 1 },
  { arquivo: "obras/obra-26.jpg", titulo: "Mulher na feira",        exp: 2 },
  { arquivo: "obras/obra-27.jpg", titulo: "Moldura de ferro",       exp: 3 },
  { arquivo: "obras/obra-28.jpg", titulo: "Paisagem sintética",     exp: 4 },
  { arquivo: "obras/obra-29.jpg", titulo: "Perfil a lápis",         exp: 5 },
];
