export const site = {
  name: "Kayseri Atom Serum",
  businessName: "Kayseri Atom Serum Sağlık Kabini",
  url: "https://kayseriatomserum.com",
  phoneDisplay: "0538 697 69 73",
  phoneHref: "tel:+905386976973",
  telephone: "+905386976973",
  whatsapp:
    "https://wa.me/905386976973?text=Merhaba%2C%20Kayseri%20Atom%20Serum%20hizmetleri%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.",
} as const;

export const routes = [
  { href: "/#anasayfa", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetlerimiz" },
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#sikca-sorulan-sorular", label: "Sıkça Sorulan Sorular" },
] as const;

export const faqs = [
  {
    question: "Kayseri Atom Serum nerede bulunuyor?",
    answer:
      "Kayseri Atom Serum Sağlık Kabini Kayseri’de hizmet verir. Konum ve randevu için 0538 697 69 73 numaralı telefondan veya WhatsApp üzerinden iletişime geçebilirsiniz.",
  },
  {
    question: "Bilgi ve randevu için nasıl iletişime geçebilirim?",
    answer:
      "0538 697 69 73 numaralı telefonu arayabilir veya aynı numara üzerinden WhatsApp bağlantısını kullanabilirsiniz.",
  },
  {
    question: "WhatsApp üzerinden bilgi alabilir miyim?",
    answer:
      "Evet. WhatsApp bağlantısını kullanarak hizmet kapsamı ve randevu süreci hakkında bilgi isteyebilirsiniz.",
  },
  {
    question: "Hizmet bölgesi neresidir?",
    answer:
      "Hizmet bölgemiz Kayseri’dir. Konum ve randevu için sağlık kabiniyle iletişime geçebilirsiniz.",
  },
  {
    question: "Çalışma saatlerini nereden öğrenebilirim?",
    answer:
      "Çalışma saatleri için 0538 697 69 73 numaralı telefondan güncel bilgi alabilirsiniz.",
  },
] as const;
