export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  metaDescription: string;
  summary: string;
  overview: readonly [string, string];
  assessmentPoints: readonly string[];
  faqs: readonly ServiceFaq[];
  relatedSlugs: readonly string[];
};

export const services = [
  {
    slug: "atom-serum",
    title: "Atom Serum",
    metaDescription:
      "Kayseri atom serum uygulaması hakkında kapsam, uygunluk değerlendirmesi ve randevu bilgisi. Sahabiye, Kocasinan'daki sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de atom serum hakkında bilgi almak, size uygun içeriğin nasıl belirlendiğini öğrenmek ve randevu oluşturmak için sağlık kabinimizle iletişime geçebilirsiniz.",
    overview: [
      "Atom serum adı, vitamin ve mineral gibi bileşenleri içerebilen destek uygulamaları için kullanılan genel bir ifadedir. Tek ve herkes için standart bir formülü yoktur; içerik, doz ve uygulama gerekliliği kişinin sağlık durumu değerlendirilerek belirlenmelidir.",
      "Kayseri Atom Serum Sağlık Kabini’nde süreç; mevcut şikâyetlerin, hastalıkların, kullanılan ilaçların ve varsa güncel tetkiklerin konuşulmasıyla başlar. Uygun görülmeyen durumlarda uygulama yapılmaması veya ilgili sağlık kuruluşuna yönlendirme en doğru yaklaşım olabilir.",
    ],
    assessmentPoints: [
      "Mevcut hastalıklar, alerji öyküsü ve düzenli kullanılan ilaçlar",
      "Yakın zamanda yapılan tetkikler ve varsa hekim önerisi",
      "Planlanan içeriğin kişisel ihtiyaç ve güvenlik açısından uygunluğu",
    ],
    faqs: [
      {
        question: "Atom serum nedir?",
        answer:
          "Atom serum, farklı vitamin ve mineral bileşenleri içerebilen destek uygulamalarını tanımlamak için kullanılan yaygın bir addır. İçeriği standart değildir ve kişiye özel değerlendirme gerektirir.",
      },
      {
        question: "Atom serum herkese uygulanır mı?",
        answer:
          "Hayır. Kronik hastalıklar, gebelik, emzirme, alerjiler ve kullanılan ilaçlar gibi etkenler uygunluğu değiştirebilir. Ön değerlendirme yapılmadan uygulama planlanmamalıdır.",
      },
      {
        question: "Kayseri atom serum randevusu nasıl alınır?",
        answer:
          "Telefon veya WhatsApp üzerinden sağlık kabinimize ulaşarak ön bilgi verebilir ve Sahabiye, Kocasinan konumumuz için randevu talep edebilirsiniz.",
      },
    ],
    relatedSlugs: ["vitamin-serumlari", "mineral-destek-serumlari", "enerji-ve-yorgunluk-serumlari"],
  },
  {
    slug: "glutatyon-tedavisi",
    title: "Glutatyon Tedavisi",
    metaDescription:
      "Kayseri glutatyon tedavisi hakkında uygulama, değerlendirme ve randevu bilgisi. Sahabiye, Kocasinan'daki sağlık kabinimizle iletişime geçin.",
    summary:
      "Kayseri’de glutatyon tedavisi hakkında güvenilir süreç bilgisi almak ve kişisel uygunluğunuzu değerlendirmek için bizimle iletişime geçin.",
    overview: [
      "Glutatyon vücutta doğal olarak bulunan ve hücresel süreçlerde rol alan bir bileşiktir. Glutatyon içeren uygulamaların gerekliliği, uygulama yolu ve planı kişiden kişiye değişebilir; belirli bir sonuç veya hastalıktan korunma garantisi olarak değerlendirilmemelidir.",
      "Uygulama öncesinde kişinin sağlık öyküsü, kullandığı ilaçlar ve uygulamadan beklentisi birlikte ele alınır. Kayseri’deki sağlık kabinimizde güncel kapsam ve randevu bilgisi paylaşılır; gerekli durumlarda hekim değerlendirmesi istenir.",
    ],
    assessmentPoints: [
      "Alerji öyküsü ile mevcut böbrek, karaciğer ve solunum sistemi sorunları",
      "Düzenli ilaçlar, takviyeler ve devam eden tedaviler",
      "Uygulamanın amacı, önerilen yöntem ve kişiye özel plan",
    ],
    faqs: [
      {
        question: "Glutatyon tedavisi ne amaçla değerlendirilir?",
        answer:
          "Glutatyon içeren uygulamalar destek amacıyla gündeme gelebilir. Kişiye sağlayabileceği olası fayda ve riskler sağlık durumu üzerinden değerlendirilmelidir; sonuç garantisi verilemez.",
      },
      {
        question: "Glutatyon uygulaması öncesi bilgi vermem gerekir mi?",
        answer:
          "Evet. Hastalıklarınızı, alerjilerinizi, kullandığınız ilaç ve takviyeleri eksiksiz paylaşmanız güvenli planlama için önemlidir.",
      },
      {
        question: "Kayseri'de glutatyon tedavisi için nasıl ulaşabilirim?",
        answer:
          "0551 860 01 38 numarasından arayabilir veya WhatsApp üzerinden Sahabiye'deki sağlık kabinimizden bilgi ve randevu isteyebilirsiniz.",
      },
    ],
    relatedSlugs: ["antioksidan-tedavileri", "c-vitamini-serumu", "atom-serum"],
  },
  {
    slug: "vitamin-serumlari",
    title: "Vitamin Serumları",
    metaDescription:
      "Kayseri vitamin serumları için içerik, uygunluk ve uygulama süreci hakkında bilgi alın. Sahabiye, Kocasinan sağlık kabininden randevu isteyin.",
    summary:
      "Kayseri vitamin serumları hakkında içerik ve uygulama seçeneklerini öğrenmek, kişisel değerlendirme ve randevu için sağlık kabinimize ulaşabilirsiniz.",
    overview: [
      "Vitamin serumları, belirli vitaminlerin damar yoluyla verilmesini içeren uygulamalardır. Ağızdan beslenmenin yerine geçmez ve yalnızca kişinin ihtiyacı, sağlık durumu ve uygun uygulama yolu değerlendirildikten sonra planlanmalıdır.",
      "Her vitaminin kullanım amacı, dozu ve risk profili farklıdır. Bu nedenle hazır bir içerik seçmek yerine şikâyetler, beslenme durumu, tetkikler ve hekim önerileri dikkate alınır. Kayseri’deki sağlık kabinimiz uygulama kapsamını ön görüşmede açıklar.",
    ],
    assessmentPoints: [
      "Hangi vitamin desteğinin neden düşünüldüğü ve varsa tetkik sonuçları",
      "Beslenme düzeni, emilim sorunları ve kullanılan diğer takviyeler",
      "Doz, uygulama yolu ve olası etkileşimlerin sağlık profesyonelince değerlendirilmesi",
    ],
    faqs: [
      {
        question: "Vitamin serumu seçimi nasıl yapılır?",
        answer:
          "Seçim yalnızca isim veya popülerliğe göre yapılmaz. Kişinin ihtiyacı, sağlık öyküsü, tetkikleri ve profesyonel değerlendirme birlikte dikkate alınır.",
      },
      {
        question: "Vitamin serumları beslenmenin yerini tutar mı?",
        answer:
          "Hayır. Dengeli beslenme temel yaklaşımdır. Serum uygulaması ancak uygun bir gerekçe ve kişisel değerlendirme varsa destekleyici olarak planlanabilir.",
      },
      {
        question: "Kayseri vitamin serumu için randevu gerekli mi?",
        answer:
          "Uygunluk ve güncel yoğunluk bilgisini netleştirmek için gelmeden önce telefon veya WhatsApp üzerinden randevu almanızı öneririz.",
      },
    ],
    relatedSlugs: ["c-vitamini-serumu", "b12-vitamini-enjeksiyonu", "mineral-destek-serumlari"],
  },
  {
    slug: "mineral-destek-serumlari",
    title: "Mineral Destek Serumları",
    metaDescription:
      "Kayseri mineral destek serumları hakkında değerlendirme, uygulama ve randevu bilgisi alın. Sahabiye, Kocasinan sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de mineral destek serumlarının kapsamı ve size uygun olup olmadığı hakkında bilgi almak için profesyonel ön değerlendirme talep edebilirsiniz.",
    overview: [
      "Mineraller sinir, kas, kan ve metabolizma işlevleri dahil pek çok fizyolojik süreçte rol alır. Ancak gereksiz veya uygunsuz mineral uygulaması fayda sağlamadığı gibi istenmeyen etkilere de yol açabilir.",
      "Mineral destek serumu planlanırken belirtiler tek başına yeterli kabul edilmez. Beslenme durumu, laboratuvar sonuçları, böbrek fonksiyonları, ilaçlar ve eşlik eden hastalıklar dikkate alınır. İçerik ve uygulama planı bu değerlendirmeye göre netleştirilir.",
    ],
    assessmentPoints: [
      "Şüphelenilen eksikliğe ilişkin güncel laboratuvar sonuçları",
      "Böbrek fonksiyonları, kalp-damar öyküsü ve sıvı dengesi",
      "İlaçlarla veya diğer mineral takviyeleriyle olası etkileşimler",
    ],
    faqs: [
      {
        question: "Mineral destek serumu hangi mineralleri içerir?",
        answer:
          "İçerik tek tip değildir. Uygun görülen mineraller ve miktarları kişinin ihtiyacına ve sağlık profesyonelinin değerlendirmesine göre belirlenir.",
      },
      {
        question: "Mineral eksikliği yalnızca belirtilerden anlaşılır mı?",
        answer:
          "Benzer belirtilerin farklı nedenleri olabilir. Bu yüzden gerektiğinde laboratuvar tetkiki ve hekim değerlendirmesiyle nedenin netleştirilmesi önemlidir.",
      },
      {
        question: "Kayseri mineral destek serumu bilgisi nereden alınır?",
        answer:
          "Kocasinan Sahabiye'deki sağlık kabinimize telefon veya WhatsApp üzerinden ulaşarak kapsam ve randevu bilgisi alabilirsiniz.",
      },
    ],
    relatedSlugs: ["magnezyum-destegi", "demir-takviyesi", "cinko-takviyesi"],
  },
  {
    slug: "bagisiklik-guclendirme-serumlari",
    title: "Bağışıklık Güçlendirme Serumları",
    metaDescription:
      "Kayseri bağışıklık destek serumları için içerik, uygunluk ve randevu bilgisi alın. Sahabiye, Kocasinan'daki sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de bağışıklık desteği amacıyla sunulan serumlar hakkında bilgi alın; kişisel ihtiyacınız ve güvenli uygulama koşulları birlikte değerlendirilsin.",
    overview: [
      "Bağışıklık sistemi tek bir vitamin ya da uygulamayla çalışan basit bir yapı değildir. Uyku, beslenme, stres, mevcut hastalıklar ve eksiklikler bir bütün olarak ele alınmalıdır. Destek serumları hastalığı önleme veya tedavi etme garantisi vermez.",
      "Bu başlık altındaki içerikler kişisel ihtiyaca göre farklılaşabilir. Kayseri’deki sağlık kabinimizde ön görüşme yapılarak mevcut belirtiler, sık geçirilen hastalıklar, ilaçlar ve varsa tetkikler konuşulur; uygun yaklaşım hakkında bilgi verilir.",
    ],
    assessmentPoints: [
      "Sık enfeksiyon yakınmaları ve değerlendirilmesi gereken altta yatan nedenler",
      "Beslenme, uyku düzeni, kronik hastalıklar ve mevcut tedaviler",
      "Destek içeriğinin gerekliliği, sınırları ve olası riskleri",
    ],
    faqs: [
      {
        question: "Bağışıklık serumu hastalıklardan korur mu?",
        answer:
          "Hiçbir serum tüm hastalıklara karşı koruma garantisi vermez. Aşılama, dengeli beslenme, uyku ve hekim önerileri temel önlemlerdir.",
      },
      {
        question: "Bağışıklık desteği içeriği herkeste aynı mıdır?",
        answer:
          "Hayır. İhtiyaçlar ve riskler kişiden kişiye değişir. İçerik ancak sağlık öyküsü ve gerekli değerlendirmeler sonrasında ele alınmalıdır.",
      },
      {
        question: "Kayseri bağışıklık destek serumu randevusu nasıl alınır?",
        answer:
          "Telefon veya WhatsApp üzerinden Sahabiye, Kocasinan'daki sağlık kabinimize ulaşarak bilgi ve randevu talep edebilirsiniz.",
      },
    ],
    relatedSlugs: ["vitamin-serumlari", "c-vitamini-serumu", "cinko-takviyesi"],
  },
  {
    slug: "enerji-ve-yorgunluk-serumlari",
    title: "Enerji ve Yorgunluk Serumları",
    metaDescription:
      "Kayseri enerji ve yorgunluk serumları hakkında güvenli değerlendirme ve randevu bilgisi alın. Sahabiye'deki sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de yorgunluk için destek serumu düşünüyorsanız önce olası nedenlerin ve kişisel uygunluğun değerlendirilmesi hakkında bilgi alın.",
    overview: [
      "Yorgunluk; uyku düzensizliği ve yoğun tempodan kansızlık, tiroit sorunları, enfeksiyonlar veya başka sağlık durumlarına kadar birçok nedenle ilişkili olabilir. Bu nedenle belirtiyi yalnızca geçici olarak bastırmak yerine nedenini araştırmak önemlidir.",
      "Enerji desteği adıyla sunulan serumların içeriği standart değildir ve herkese uygun olmayabilir. Ön görüşmede yorgunluğun süresi, eşlik eden belirtiler, kullanılan ilaçlar ve varsa tetkikler değerlendirilir. Gerekirse uygulamadan önce hekime yönlendirme yapılır.",
    ],
    assessmentPoints: [
      "Yorgunluğun ne zamandır sürdüğü ve günlük yaşama etkisi",
      "Uyku, beslenme, stres düzeyi ve eşlik eden belirtiler",
      "Kansızlık veya diğer nedenler için yapılmış tetkikler ve hekim görüşü",
    ],
    faqs: [
      {
        question: "Yorgunluk serumu her yorgunlukta uygun mudur?",
        answer:
          "Hayır. Yorgunluğun çok farklı nedenleri olabilir. Uzayan, şiddetlenen veya başka belirtilerle birlikte olan yorgunluk öncelikle hekim tarafından değerlendirilmelidir.",
      },
      {
        question: "Uygulama öncesi tetkik istenir mi?",
        answer:
          "Kişinin öyküsüne ve belirtilerine göre güncel tetkik veya hekim görüşü gerekebilir. Bu ihtiyaç ön değerlendirmede konuşulur.",
      },
      {
        question: "Kayseri yorgunluk serumu için nasıl bilgi alırım?",
        answer:
          "0551 860 01 38 numarasını arayabilir ya da WhatsApp üzerinden sağlık kabinimize kısa bir ön bilgi iletebilirsiniz.",
      },
    ],
    relatedSlugs: ["b12-vitamini-enjeksiyonu", "demir-takviyesi", "magnezyum-destegi"],
  },
  {
    slug: "c-vitamini-serumu",
    title: "C Vitamini Serumu",
    metaDescription:
      "Kayseri C vitamini serumu için uygunluk, uygulama süreci ve randevu bilgisi alın. Sahabiye, Kocasinan sağlık kabinimizle iletişime geçin.",
    summary:
      "Kayseri’de C vitamini serumu hakkında doz, uygulama ve kişisel uygunluk sürecini öğrenmek için sağlık kabinimizden bilgi alabilirsiniz.",
    overview: [
      "C vitamini normal fizyolojik süreçlerde rol alan ve besinlerle alınabilen bir vitamindir. Damar yoluyla C vitamini uygulaması ağızdan alımla aynı değildir; daha yüksek kan düzeylerine ulaşabildiği için uygunluk ve doz profesyonel değerlendirme gerektirir.",
      "Her kişide aynı yaklaşım kullanılmaz. Böbrek hastalığı veya taş öyküsü, bazı enzim eksiklikleri, kullanılan ilaçlar ve planlanan doz güvenlik açısından önem taşır. Kayseri’de C vitamini serumu hakkında bilgi alırken sağlık geçmişinizi eksiksiz paylaşmanız beklenir.",
    ],
    assessmentPoints: [
      "Böbrek hastalığı, böbrek taşı ve sıvı dengesi öyküsü",
      "Kullanılan ilaçlar, devam eden tedaviler ve bilinen enzim eksiklikleri",
      "Uygulamanın gerekçesi, planlanan doz ve profesyonel takip ihtiyacı",
    ],
    faqs: [
      {
        question: "C vitamini serumu herkese uygun mudur?",
        answer:
          "Hayır. Özellikle bazı böbrek sorunları ve özel sağlık durumlarında uygun olmayabilir. Kişisel değerlendirme yapılması gerekir.",
      },
      {
        question: "C vitamini serumu hastalık tedavisi yerine geçer mi?",
        answer:
          "Hayır. Tanı veya tedavi amacıyla yürütülen hekim planının yerine geçmez. Kullanım amacı ve sınırları uygulama öncesinde açıkça değerlendirilmelidir.",
      },
      {
        question: "Kayseri C vitamini serumu randevusu nasıl oluşturulur?",
        answer:
          "Sahabiye'deki sağlık kabinimize telefon veya WhatsApp üzerinden ulaşarak ön değerlendirme ve randevu bilgisi isteyebilirsiniz.",
      },
    ],
    relatedSlugs: ["vitamin-serumlari", "glutatyon-tedavisi", "antioksidan-tedavileri"],
  },
  {
    slug: "b12-vitamini-enjeksiyonu",
    title: "B12 Vitamini Enjeksiyonu",
    metaDescription:
      "Kayseri B12 vitamini enjeksiyonu için tetkik, uygunluk ve randevu süreci hakkında bilgi alın. Sahabiye sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de B12 vitamini enjeksiyonu öncesi eksiklik, hekim önerisi ve uygulama planının nasıl değerlendirildiği hakkında bilgi alın.",
    overview: [
      "B12 vitamini kan hücreleri ve sinir sistemiyle ilişkili önemli görevler üstlenir. Eksiklik; beslenme biçimi, emilim sorunları, bazı hastalıklar veya ilaçlarla ilişkili olabilir. Belirtiler başka durumlarla karışabildiğinden yalnızca yakınmalara göre enjeksiyon planlanmamalıdır.",
      "Enjeksiyon gerekliliği, kullanılacak form, doz ve sıklık hekim önerisi ve tetkiklerle belirlenir. Uygulama öncesinde reçete veya tedavi planı ile alerji ve ilaç bilgileri kontrol edilir. Sağlık kabinimiz uygulama ve randevu süreci hakkında bilgi sağlar.",
    ],
    assessmentPoints: [
      "B12 düzeyi ve gerektiğinde ilgili diğer kan tetkikleri",
      "Eksikliğin olası nedeni, belirtiler ve hekim tarafından belirlenen plan",
      "Alerjiler, kullanılan ilaçlar ve daha önceki enjeksiyon deneyimleri",
    ],
    faqs: [
      {
        question: "B12 enjeksiyonu için tahlil gerekir mi?",
        answer:
          "B12 eksikliği ve olası nedenleri çoğunlukla klinik değerlendirme ve kan tetkikleriyle ele alınır. Gerekli tetkiklere hekiminiz karar vermelidir.",
      },
      {
        question: "B12 iğnesinin sıklığı nasıl belirlenir?",
        answer:
          "Sıklık eksikliğin düzeyine, nedenine, kullanılan ürüne ve hekim planına göre değişir. Kişisel plan olmadan standart bir takvim uygulanmaz.",
      },
      {
        question: "Kayseri B12 iğnesi uygulaması için nasıl randevu alırım?",
        answer:
          "Hekim öneriniz veya uygulama planınızla birlikte telefon ya da WhatsApp üzerinden sağlık kabinimizden randevu isteyebilirsiniz.",
      },
    ],
    relatedSlugs: ["vitamin-serumlari", "enerji-ve-yorgunluk-serumlari", "demir-takviyesi"],
  },
  {
    slug: "magnezyum-destegi",
    title: "Magnezyum Desteği",
    metaDescription:
      "Kayseri magnezyum desteği için ihtiyaç, uygunluk ve uygulama süreci hakkında bilgi alın. Sahabiye, Kocasinan sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de magnezyum desteği seçenekleri, kişisel ihtiyaç ve güvenli uygulama koşulları hakkında sağlık kabinimizden bilgi alabilirsiniz.",
    overview: [
      "Magnezyum kas, sinir ve enerji metabolizması dahil pek çok süreçte rol alan bir mineraldir. Kas krampları veya yorgunluk gibi yakınmalar her zaman magnezyum eksikliğini göstermez; benzer belirtilerin farklı nedenleri olabilir.",
      "Desteğin ağızdan mı yoksa başka bir yolla mı planlanacağı, doz ve süre kişiye göre belirlenir. Böbrek fonksiyonları, kalp ritmiyle ilgili öykü ve kullanılan ilaçlar özellikle önemlidir. Gereksiz yüksek dozlardan kaçınmak için profesyonel değerlendirme yapılır.",
    ],
    assessmentPoints: [
      "Yakınmaların süresi, beslenme ve varsa magnezyum tetkikleri",
      "Böbrek fonksiyonları ve kalp ritmiyle ilgili sağlık öyküsü",
      "İlaçlar, diğer takviyeler ve en uygun destek yolunun belirlenmesi",
    ],
    faqs: [
      {
        question: "Her kas krampında magnezyum gerekir mi?",
        answer:
          "Hayır. Krampların sıvı kaybı, yoğun egzersiz, dolaşım veya başka sağlık sorunları gibi farklı nedenleri olabilir. Nedenin değerlendirilmesi gerekir.",
      },
      {
        question: "Magnezyum desteği böbrek hastalarına uygun mudur?",
        answer:
          "Böbrek sorunlarında magnezyumun vücuttan atılımı değişebilir. Bu kişilerin hekim değerlendirmesi olmadan destek kullanmaması önemlidir.",
      },
      {
        question: "Kayseri magnezyum desteği için nereden bilgi alabilirim?",
        answer:
          "Sahabiye, Kocasinan'daki sağlık kabinimize 0551 860 01 38 numarasından veya WhatsApp üzerinden ulaşabilirsiniz.",
      },
    ],
    relatedSlugs: ["mineral-destek-serumlari", "enerji-ve-yorgunluk-serumlari", "aminoasit-serumlari"],
  },
  {
    slug: "demir-takviyesi",
    title: "Demir Takviyesi",
    metaDescription:
      "Kayseri demir takviyesi için tahlil, hekim planı, uygulama ve randevu bilgisi alın. Sahabiye, Kocasinan sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de demir takviyesi uygulaması için tahlil ve hekim planına dayalı güvenli süreç hakkında sağlık kabinimizden bilgi alın.",
    overview: [
      "Demir eksikliği ve demir eksikliği anemisi aynı değerlendirme içinde ele alınsa da her kansızlığın nedeni demir eksikliği değildir. Hemoglobin, ferritin ve gerekli görülen diğer tetkikler ile eksikliğin nedeni hekim tarafından değerlendirilmelidir.",
      "Damar yoluyla veya farklı yolla demir uygulaması; ağızdan tedaviye yanıt, emilim, eksikliğin düzeyi ve klinik ihtiyaç doğrultusunda planlanır. Doz ve ürün hekim planına göre kontrol edilir; uygulama sırasında olası reaksiyonlar açısından profesyonel takip gerekir.",
    ],
    assessmentPoints: [
      "Güncel hemogram, ferritin ve hekim tarafından istenen diğer tetkikler",
      "Demir eksikliğinin nedeni ve belirlenmiş tedavi planı",
      "Önceki demir uygulamalarına verilen yanıt ve alerji öyküsü",
    ],
    faqs: [
      {
        question: "Demir takviyesi tahlil yapılmadan uygulanır mı?",
        answer:
          "Demir fazlalığı da zararlı olabileceği için eksiklik ve uygulama gerekliliği tetkik ve hekim değerlendirmesiyle belirlenmelidir.",
      },
      {
        question: "Damar yoluyla demir uygulamasına kim karar verir?",
        answer:
          "Uygulama gerekliliği, ürün, doz ve seans planı hastanın klinik durumunu değerlendiren hekim tarafından belirlenmelidir.",
      },
      {
        question: "Kayseri demir takviyesi uygulaması için ne getirmeliyim?",
        answer:
          "Güncel tetkiklerinizi, hekim isteminizi veya reçetenizi ve kullandığınız ilaçların bilgisini yanınızda bulundurmanız istenir.",
      },
    ],
    relatedSlugs: ["b12-vitamini-enjeksiyonu", "enerji-ve-yorgunluk-serumlari", "mineral-destek-serumlari"],
  },
  {
    slug: "cinko-takviyesi",
    title: "Çinko Takviyesi",
    metaDescription:
      "Kayseri çinko takviyesi için ihtiyaç, doz, güvenli kullanım ve randevu bilgisi alın. Sahabiye, Kocasinan sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de çinko takviyesi hakkında ihtiyaç, uygulama seçeneği ve güvenli kullanım sürecini öğrenmek için bizimle iletişime geçin.",
    overview: [
      "Çinko bağışıklık, yara iyileşmesi ve hücresel işlevlerde rol alan temel minerallerden biridir. Bununla birlikte daha fazla çinko her zaman daha iyi anlamına gelmez; gereksiz veya uzun süreli yüksek doz kullanım başka mineral dengelerini etkileyebilir.",
      "Takviye gerekliliği; beslenme, emilim sorunları, belirtiler, kullanılan ürünler ve gerektiğinde tetkikler üzerinden değerlendirilir. Uygulama yolu ve doz kişisel ihtiyaca göre ele alınmalı, devam eden tedavilerle olası etkileşimler kontrol edilmelidir.",
    ],
    assessmentPoints: [
      "Beslenme durumu, emilim sorunları ve çinko eksikliği riski",
      "Hâlihazırda kullanılan multivitamin veya mineral ürünleri",
      "Doz, kullanım süresi ve bakır gibi diğer minerallerle denge",
    ],
    faqs: [
      {
        question: "Çinko takviyesi sürekli kullanılabilir mi?",
        answer:
          "Uzun süreli ve yüksek doz kullanım uygun olmayabilir. İhtiyaç, doz ve süre sağlık profesyoneliyle belirlenmelidir.",
      },
      {
        question: "Çinko takviyesi bağışıklığı kesin olarak güçlendirir mi?",
        answer:
          "Çinko normal bağışıklık işlevlerinde rol alır ancak tek başına hastalıklardan korunma garantisi sağlamaz. Eksiklik ve kişisel ihtiyaç değerlendirilmelidir.",
      },
      {
        question: "Kayseri çinko takviyesi için nasıl bilgi alabilirim?",
        answer:
          "Telefon veya WhatsApp üzerinden Sahabiye'deki sağlık kabinimize ulaşarak mevcut uygulama kapsamını ve randevu durumunu öğrenebilirsiniz.",
      },
    ],
    relatedSlugs: ["mineral-destek-serumlari", "bagisiklik-guclendirme-serumlari", "vitamin-serumlari"],
  },
  {
    slug: "aminoasit-serumlari",
    title: "Aminoasit Serumları",
    metaDescription:
      "Kayseri aminoasit serumları için içerik, kişisel uygunluk ve uygulama süreci hakkında bilgi alın. Sahabiye sağlık kabinimizden randevu isteyin.",
    summary:
      "Kayseri’de aminoasit serumlarının kapsamı, hangi durumlarda değerlendirilebildiği ve kişisel uygunluk süreci hakkında bilgi alın.",
    overview: [
      "Aminoasitler proteinlerin yapı taşlarıdır ve normal beslenmeyle alınır. Damar yoluyla aminoasit içeren uygulamalar rutin beslenmenin yerine geçmez; klinik ihtiyaç, beslenme durumu ve uygulama amacı açık biçimde değerlendirilmelidir.",
      "İçerik ve miktar kişinin yaşına, genel sağlık durumuna, böbrek ve karaciğer fonksiyonlarına ve mevcut beslenme planına göre değişebilir. Kayseri’deki sağlık kabinimizde uygulama kapsamı anlatılır ve gerekli profesyonel değerlendirme tamamlanmadan işlem planlanmaz.",
    ],
    assessmentPoints: [
      "Beslenme durumu, uygulama amacı ve günlük protein alımı",
      "Böbrek ve karaciğer fonksiyonları ile metabolik hastalık öyküsü",
      "Planlanan aminoasit içeriği, doz ve diğer tedavilerle uyumu",
    ],
    faqs: [
      {
        question: "Aminoasit serumu normal beslenmenin yerini tutar mı?",
        answer:
          "Hayır. Dengeli beslenmenin yerine kullanılmaz. Damar yoluyla destek ancak belirlenmiş bir ihtiyaç ve profesyonel plan kapsamında değerlendirilmelidir.",
      },
      {
        question: "Aminoasit serumunun içeriği standart mıdır?",
        answer:
          "Hayır. Ürün içeriği ve miktarları farklılaşabilir. Kişinin ihtiyacı ve güvenlik koşulları üzerinden uygun seçenek belirlenir.",
      },
      {
        question: "Kayseri aminoasit serumu randevusu nasıl alınır?",
        answer:
          "Sağlık kabinimize telefon veya WhatsApp üzerinden ulaşarak ön bilgi paylaşabilir ve Sahabiye konumumuz için randevu isteyebilirsiniz.",
      },
    ],
    relatedSlugs: ["enerji-ve-yorgunluk-serumlari", "magnezyum-destegi", "vitamin-serumlari"],
  },
  {
    slug: "antioksidan-tedavileri",
    title: "Antioksidan Tedavileri",
    metaDescription:
      "Kayseri antioksidan tedavileri hakkında içerik, uygunluk değerlendirmesi ve randevu bilgisi alın. Sahabiye sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de antioksidan tedavileri adıyla sunulan desteklerin kapsamı, kanıt sınırları ve kişisel uygunluk süreci hakkında bilgi alın.",
    overview: [
      "Antioksidan, farklı maddeleri kapsayan geniş bir tanımdır. Bu maddelerin vücuttaki işlevleri ve takviye olarak kullanılmalarının etkileri aynı değildir. Bir uygulamanın antioksidan olarak adlandırılması tek başına etkinlik veya güvenlik kanıtı oluşturmaz.",
      "Planlama sırasında kullanılacak bileşen, hedeflenen amaç, mevcut hastalıklar ve devam eden tedaviler açıkça ele alınır. Uygulama tıbbi bir tedavinin yerine konmaz ve kesin sonuç vaadiyle sunulmaz. Kayseri’de güncel kapsam için sağlık kabinimizle görüşebilirsiniz.",
    ],
    assessmentPoints: [
      "Kullanılması düşünülen bileşenin içeriği ve uygulama gerekçesi",
      "Devam eden tedavilerle olası etkileşimler ve sağlık öyküsü",
      "Beklentilerin gerçekçi biçimde konuşulması ve kanıt sınırları",
    ],
    faqs: [
      {
        question: "Antioksidan tedavisi tek bir uygulama mıdır?",
        answer:
          "Hayır. Antioksidan farklı bileşenleri tanımlayan genel bir kavramdır. İçerik, uygulama yolu ve amaç açıkça belirtilmelidir.",
      },
      {
        question: "Antioksidan uygulamalar kesin sonuç verir mi?",
        answer:
          "Hayır. Kişisel yanıtlar değişebilir ve kesin sonuç garantisi verilemez. Olası fayda, risk ve bilimsel kanıt düzeyi değerlendirilmelidir.",
      },
      {
        question: "Kayseri antioksidan tedavileri için nasıl ulaşabilirim?",
        answer:
          "0551 860 01 38 numarasından arayabilir veya WhatsApp üzerinden sağlık kabinimizden içerik ve randevu bilgisi isteyebilirsiniz.",
      },
    ],
    relatedSlugs: ["glutatyon-tedavisi", "c-vitamini-serumu", "nad-tedavisi"],
  },
  {
    slug: "nad-tedavisi",
    title: "NAD+ Tedavisi",
    metaDescription:
      "Kayseri NAD+ tedavisi hakkında güncel kapsam, kanıt sınırları, uygunluk ve randevu bilgisi alın. Sahabiye sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de NAD+ tedavisi hakkında uygulama kapsamını, kişisel uygunluğu ve beklentilerin neden dikkatle değerlendirilmesi gerektiğini öğrenin.",
    overview: [
      "NAD+ hücresel enerji süreçlerinde rol alan doğal bir koenzimdir. NAD+ içeren damar yolu uygulamaları son yıllarda popülerleşmiş olsa da genel zindelik, yaşlanmayı geciktirme veya belirli hastalıklar için ileri sürülen sonuçların tamamı güçlü klinik kanıtlarla doğrulanmış değildir.",
      "Bu nedenle uygulama; kesin sonuç vaadi yerine mevcut kanıtlar, olası riskler, kişinin sağlık durumu ve alternatif yaklaşımlar konuşularak değerlendirilmelidir. Kayseri’de NAD+ tedavisinin güncel olarak sunulup sunulmadığını ve uygulama koşullarını randevu öncesinde teyit edebilirsiniz.",
    ],
    assessmentPoints: [
      "Uygulamadan beklenen hedef ve bu hedefe ilişkin bilimsel kanıtların sınırları",
      "Mevcut hastalıklar, ilaçlar ve devam eden tedavi planları",
      "Uygulama süresi, takip koşulları ve olası istenmeyen etkiler",
    ],
    faqs: [
      {
        question: "NAD+ tedavisi nedir?",
        answer:
          "NAD+ içeren ürünlerin damar yoluyla uygulanmasını ifade eder. Popüler kullanım alanları bulunsa da her iddia için kanıt düzeyi aynı değildir ve kişisel değerlendirme gerekir.",
      },
      {
        question: "NAD+ uygulaması gençleşme garantisi verir mi?",
        answer:
          "Hayır. Gençleşme, hastalık tedavisi veya kesin enerji artışı garantisi verilemez. Beklentiler mevcut bilimsel veriler ışığında değerlendirilmelidir.",
      },
      {
        question: "Kayseri NAD+ tedavisi sunuluyor mu?",
        answer:
          "Güncel hizmet kapsamını, uygunluk koşullarını ve randevu durumunu 0551 860 01 38 numarasından veya WhatsApp üzerinden teyit edebilirsiniz.",
      },
    ],
    relatedSlugs: ["antioksidan-tedavileri", "enerji-ve-yorgunluk-serumlari", "atom-serum"],
  },
  {
    slug: "ozon-tedavisi",
    title: "Ozon Tedavisi",
    metaDescription:
      "Kayseri ozon tedavisi hakkında güncel hizmet kapsamı, uygunluk, uygulama yöntemi ve randevu bilgisi için sağlık kabinimize ulaşın.",
    summary:
      "Kayseri’de ozon tedavisi hakkında yöntem, güncel hizmet kapsamı, kişisel uygunluk ve profesyonel değerlendirme sürecini öğrenin.",
    overview: [
      "Ozon tedavisi farklı uygulama yöntemleri için kullanılan bir başlıktır; yöntemlerin kullanım alanları, riskleri ve kanıt düzeyleri birbirinden farklıdır. Ozon gazı solunmamalıdır ve uygulama yalnızca uygun ekipman, yetkin profesyonel değerlendirme ve belirlenmiş yöntemle ele alınmalıdır.",
      "Ozon uygulaması standart tıbbi tedavilerin yerine geçmez ve her sağlık durumu için uygun değildir. Kayseri’de ozon tedavisinin güncel olarak sunulup sunulmadığını, hangi yöntemin kullanıldığını ve uygunluk koşullarını randevu oluşturmadan önce sağlık kabinimizden teyit edebilirsiniz.",
    ],
    assessmentPoints: [
      "Düşünülen uygulama yönteminin açıkça tanımlanması ve gerekçesi",
      "Mevcut hastalıklar, kullanılan ilaçlar ve özel risk durumları",
      "Yetkin uygulama koşulları, enfeksiyon kontrolü ve takip planı",
    ],
    faqs: [
      {
        question: "Ozon tedavisi tek bir yöntem midir?",
        answer:
          "Hayır. Farklı uygulama yöntemleri bu adla anılabilir. Yöntem, amaç, riskler ve kanıt düzeyi uygulama öncesinde net biçimde açıklanmalıdır.",
      },
      {
        question: "Ozon solunarak uygulanabilir mi?",
        answer:
          "Ozon gazının solunması zararlıdır. Uygulama yalnızca tanımlı yöntemlerle ve yetkin sağlık profesyonelleri tarafından değerlendirilmelidir.",
      },
      {
        question: "Kayseri ozon tedavisi sunuluyor mu?",
        answer:
          "Güncel hizmet kapsamını ve kullanılan yöntemi telefon veya WhatsApp üzerinden sağlık kabinimizden randevu öncesinde teyit edebilirsiniz.",
      },
    ],
    relatedSlugs: ["antioksidan-tedavileri", "glutatyon-tedavisi", "nad-tedavisi"],
  },
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof services)[number]["slug"];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service) {
  return service.relatedSlugs
    .map((slug) => getService(slug))
    .filter((related): related is (typeof services)[number] => Boolean(related));
}
