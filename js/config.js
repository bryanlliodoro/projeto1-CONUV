/* ============================================================================
 *
 *   >>>>>>>>>>   COLE AQUI O LINK DO SEU BUCKET S3   <<<<<<<<<<
 *
 *   Este é o ÚNICO lugar do site onde você precisa colocar o link da AWS.
 *   Todas as imagens (exposições e obras) são carregadas a partir dele.
 *
 *   Formato:  https://NOME-DO-BUCKET.s3.REGIAO.amazonaws.com
 *   Exemplo:  https://galeria-atlas-assets.s3.sa-east-1.amazonaws.com
 *
 *   - Sem barra "/" no final.
 *   - O bucket precisa ter a política de leitura pública (veja o README).
 *
 * ========================================================================== */

window.ATLAS_CONFIG = {

  // ⬇⬇⬇  TROQUE O TEXTO ENTRE ASPAS PELO LINK DO SEU S3  ⬇⬇⬇
  S3_BASE_URL: "https://SEU-BUCKET.s3.sa-east-1.amazonaws.com",
  // ⬆⬆⬆  TROQUE O TEXTO ENTRE ASPAS PELO LINK DO SEU S3  ⬆⬆⬆

};
