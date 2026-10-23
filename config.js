// =============== KONFIGURASI MAKTABAH MALIKA ===============
// PENTING: file ini ikut ter-publish di GitHub Pages, jadi semua isi bisa
// dilihat siapa saja. Jangan isi key rahasia di sini kecuali sudah dibatasi
// (lihat README). Idealnya key 21 Kitab lewat proxy (Cloudflare Worker).
window.MALIKA_CONFIG = {
  googleBooksKey: "AIzaSyAtZPC5BHLz_9sWrwy6lJL2cyXRQrttGm8",          // Google Books API key (batasi dengan HTTP referrer!)
  openAlexMailto: "AIzaSyAJq1ohtLjh6jxMTiqnRzmc-K4LqsWR9gY",          // OpenAlex tidak butuh key; isi email agar masuk "polite pool"

  // Ahmad Sanusi API (21 Kitab) — SESUAIKAN setelah cek https://api.ahmadsanusi.com/docs
  sanusi: {
    enabled: true,
    baseUrl: "https://api.ahmadsanusi.com",
    searchPath: "/v1/kitab",          // dari Swagger: GET /v1/kitab (cari nama/pengarang/kategori)
    queryParam: "q",                  // nama parameter kata kunci
    extraParams: { limit: 10 },       // parameter tambahan
    apiKey: "ask_qiSMHUMto-8dO1PByPr_C1lMbjtteTnY86LkKGwUB4w", // key 21 Kitab (terlihat publik di GitHub Pages)
    apiKeyHeader: "X-API-Key"         // nama header; kosongkan jika key dikirim lewat query
  }
};
