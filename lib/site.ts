export const site = {
  name: "Kayseri Atom Serum",
  businessName: "Kayseri Atom Serum Sağlık Kabini",
  url: "https://kayseriatomserum.com",
  phoneDisplay: "0551 860 01 38",
  phoneHref: "tel:+905518600138",
  telephone: "+905518600138",
  whatsapp:
    "https://wa.me/905518600138?text=Merhaba%2C%20Kayseri%20Atom%20Serum%20hizmetleri%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.",
  streetAddress: "Sahabiye Mahallesi, Arda Sokak",
  postalCode: "38015",
  locality: "Kocasinan",
  region: "Kayseri",
  address: "Sahabiye Mahallesi, Arda Sokak, 38015 Kocasinan / Kayseri",
} as const;

export const routes = [
  { href: "/#anasayfa", label: "Ana Sayfa" },
  { href: "/#hizmetler", label: "Hizmetlerimiz" },
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#sikca-sorulan-sorular", label: "Sıkça Sorulan Sorular" },
] as const;

export const faqs = [
  {
    question: "Kayseri Atom Serum nerede bulunuyor?",
    answer:
      "Kayseri Atom Serum Sağlık Kabini; Sahabiye Mahallesi, Arda Sokak, 38015 Kocasinan / Kayseri adresinde yer alır.",
  },
  {
    question: "Bilgi ve randevu için nasıl iletişime geçebilirim?",
    answer:
      "0551 860 01 38 numaralı telefonu arayabilir veya aynı numara üzerinden WhatsApp bağlantısını kullanabilirsiniz.",
  },
  {
    question: "WhatsApp üzerinden bilgi alabilir miyim?",
    answer:
      "Evet. WhatsApp bağlantısını kullanarak hizmet kapsamı ve randevu süreci hakkında bilgi isteyebilirsiniz.",
  },
  {
    question: "Hizmet bölgesi neresidir?",
    answer:
      "Ana hizmet bölgesi Kayseri'dir. Konum ve hizmet kapsamı hakkında güncel bilgi almak için doğrudan sağlık kabiniyle iletişime geçebilirsiniz.",
  },
  {
    question: "Çalışma saatlerini nereden öğrenebilirim?",
    answer:
      "Çalışma saatleri için 0551 860 01 38 numaralı telefondan güncel bilgi alabilirsiniz.",
  },
] as const;
