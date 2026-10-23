// =============== KONFIGURASI MAKTABAH MALIKA ===============
window.MALIKA_CONFIG = {
  googleBooksKey: "AIzaSyAtZPC5BHLz_9sWrwy6lJL2cyXRQrttGm8",          // Kosongkan jika fokus ke Kitab Kuning untuk menghindari error 429
  openAlexMailto: "AIzaSyAJq1ohtLjh6jxMTiqnRzmc-K4LqsWR9gY",          

  sanusi: {
    enabled: true,
    baseUrl: "https://api.ahmadsanusi.com",
    searchPath: "/v1/kitab",          // Digunakan untuk daftar/pencarian kitab
    queryParam: "q",                  
    extraParams: { limit: 15 },       
    apiKey: "ask_qiSMHUMto-8dO1PByPr_C1lMbjtteTnY86LkKGwUB4w", 
    apiKeyHeader: "X-API-Key"         
  }
};
