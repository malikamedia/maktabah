// =============== KONFIGURASI MAKTABAH MALIKA ===============
// PENTING: file ini ikut ter-publish di GitHub Pages, jadi semua isi bisa
// dilihat siapa saja. Jangan isi key rahasia di sini kecuali sudah dibatasi
// (lihat README). Idealnya key 21 Kitab lewat proxy (Cloudflare Worker).
window.MALIKA_CONFIG = {
  googleBooksKey: "",          // Google Books API key (batasi dengan HTTP referrer!)
  openAlexMailto: "",          // OpenAlex tidak butuh key; isi email agar masuk "polite pool"

  // Ahmad Sanusi API (21 Kitab) — SESUAIKAN setelah cek https://api.ahmadsanusi.com/docs
  sanusi: {
    enabled: true,
    baseUrl: "https://api.ahmadsanusi.com",
    searchPath: "/search",            // ganti sesuai endpoint pencarian di Swagger
    queryParam: "q",                  // nama parameter kata kunci
    extraParams: { limit: 10 },       // parameter tambahan
    apiKey: "",                       // key 21 Kitab (lebih aman via proxy)
    apiKeyHeader: "X-API-Key"         // nama header; kosongkan jika key dikirim lewat query
  }
};
