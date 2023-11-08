let lang = document.getElementById("lang");

function toggleLangBtn() {
  if (lang.className === "langList") {
    lang.classList.add("hide");
  } else {
    lang.classList.remove("hide");
    setTimeout(function () {
      lang.classList.add("hide");
    }, 3500);
  }
}

function i18n(options) {
  options = Object.assign(
    {},
    {
      lang: window.localStorage.getItem("language") || "en",
      data: i18nData,
    },
    options
  );
  let langStore = options.data[options.lang];
  this.setLang = function (language) {
    window.localStorage.setItem("language", language);
    langStore = options.data[language];
  };
  this.getItem = function (key) {
    return langStore[key];
  };
  return this;
}

const i18nData = {
  en: {
    lang_icon:
      "<img src='https://flagcdn.com/48x36/gb.png' style='width: 1.25rem; height: 1rem;' alt='lang'>",
    home_nav: "Home",
    menu_nav: "Menu",
    about_us: "About",
    contact: "Contact",
    reservation: "Reservation",

    main_t: "Make a Reservation",
    main_t_2: "Special Meals &amp;Events",
    main_desc:
      "Afitap Kebap Restaurant offers a great venue for special meals and events. Special events and meals held at this restaurant will help you create unforgettable memories.",
    m_cont: "Contact us by phone",
    r_prog:
      "<h6>Opening Hours</h6> <h4>Monday - Sunday</h4> <p>12:00 &#8211;02:00<br /></p>",
    main_o: "online reservation",
    main_o_2: "No Need to Wait for a Table",
    nppl: "How Many People",
    gner_w: "Get WhatsApp Link",
    e_find_m: "Events or Celebrations",
    e_find: "Find Event Venue",
    e_f_1: "Family Parties",
    e_f_1_d: "Birthday Celebrations",
    e_f_1_c:
      "Afitap Kebap Restaurant offers an unforgettable experience for you and your guests by bringing the flavors of Turkish cuisine to your birthday celebrations. You can contact the restaurant for details and reservations.",
    e_f_2: "Party Celebrations",
    e_f_2_d: "Official Meetings",
    e_f_2_c:
      "Afitap Kebap Restaurant helps you make your official meetings more efficient and enjoyable by providing an environment suitable for the needs of the business world. You can contact the restaurant for details and reservation.",

    our_socials: "Follow us : ",
    our_address:
      "<h6>Address</h6>Osman Örek Boulevard, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<br /> Kyrenia - TRNC",
    our_programs:
      "<h6>Opening Hours</h6> <h4>Monday - Sunday</h4> <strong>12:00 – 02:00 <br /> </strong>",
    our_contact: "Contact us :",
  },
  tr: {
    lang_icon:
      "<img src='https://flagcdn.com/48x36/tr.png' style='width: 1.25rem; height: 1rem;' alt='lang'>",
    home_nav: "Ana Sayfa",
    menu_nav: "Menü",
    about_us: "Hakkımızda",
    contact: "İletişim",
    reservation: "Rezervasyon",

    main_t: "Anında Reservasyon ",
    main_t_2: "Özel Yemekler &amp;Etkinlikler",
    main_desc:
      "Afitap Kebap Restoran, özel yemekler ve etkinlikler için harika bir mekan sunmaktadır. Bu restoranda düzenlenen özel etkinlikler ve yemekler, unutulmaz anılar yaratmanıza yardımcı olacaktır.",
    m_cont: "Telefon ile Bize ulaşın",
    r_prog:
      "<h6>Açılış Saatleri</h6> <h4>Pazartesi - Pazar</h4> <p>12:00 &#8211;02:00<br /></p>",
    main_o: "online rezarvasyon",
    main_o_2: "Masa Beklemeye Gerek yok",
    nppl: "Kaç Kişi",
    gner_w: "WhatsApp Bağlantısını Alın",
    e_find_m: "Etkinlikler veya Kutlamalar",
    e_find: "Etkinlik Yeri Bulunuz",
    e_f_1: "Aile Partileri",
    e_f_1_d: "Doğum Günü Kutlamaları",
    e_f_1_c:
      "Afitap Kebap Restoran, Türk mutfağının lezzetlerini doğum günü kutlamalarınıza taşıyarak siz ve misafirleriniz için unutulmaz bir deneyim sunar. Detaylar ve rezervasyon için restoran ile iletişime geçerek bilgi alabilirsiniz.",
    e_f_2: "Parti Kutlamaları",
    e_f_2_d: "Resmi Buluşmalar",
    e_f_2_c:
      "Afitap Kebap Restoran, iş dünyasının ihtiyaçlarına uygun bir ortam sunarak resmi buluşmalarınızı daha verimli ve keyifli hale getirmenize yardımcı olur. Detaylar ve rezervasyon için restoran ile iletişime geçebilirsiniz.",

    our_socials: "Bizi Takip Edin: ",
    our_address:
      "<h6>Adres</h6>Osman Örek Bulvarı, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<br /> Girne - KKTC",
    our_programs:
      "<h6>Açılış Saatleri</h6> <h4>Pazartesi - Pazar</h4> <strong>12:00 – 02:00 <br /> </strong>",
    our_contact: "Bize Ulaşın: ",
  },
};

const i18nInstance = new i18n();

function changeLabels() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(function (element) {
    const forLabel = element.getAttribute("data-translate");
    element.innerHTML = i18nInstance.getItem(forLabel);
  });
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setContactFormPlaceHolders(lang) {
  if (lang === "tr") {
    document.querySelector('input[name = "startDate"]').placeholder =
      "Tarih Seçin";
    document.querySelector('input[name = "ResTime"]').placeholder =
      "Zaman Seçin";
    document.querySelector('input[name="telefon"]').placeholder = "Tel No: ";
    document.querySelector('input[name = "email"]').placeholder = "E-posta";
    document.querySelector('input[name="dt_mc_emailid"]').placeholder =
      "E-posta adresinizi girin";
  } else {
    document.querySelector('input[name="startDate"]').placeholder =
      "Select Date";
    document.querySelector('input[name="ResTime"]').placeholder = "Select Time";
    document.querySelector('input[name="phone"]').placeholder = "Tel No: ";
    document.querySelector('input[name="email"]').placeholder = "Email";
    document.querySelector('input[name="dt_mc_emailid"]').placeholder =
      "Enter your Email";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const lang = getParameterByName("lang");
  if (lang) {
    window.localStorage.setItem("language", lang);
    i18nInstance.setLang(lang);
  }
  changeLabels();
  setContactFormPlaceHolders(window.localStorage.getItem("language") || "en");
});

document.getElementById("lang").addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    const lang = e.target.href.slice(-2);
    i18nInstance.setLang(lang);
    setContactFormPlaceHolders(lang);

    const langQueryParam = getParameterByName("lang");
    if (langQueryParam) {
      const url = new URL(window.location.href);
      const searchParams = url.searchParams;
      searchParams.set("lang", lang);
      url.search = searchParams.toString();
      const newUrl = url.pathname + url.search;
      window.history.replaceState({}, "", newUrl);
    }
    changeLabels();
    e.preventDefault();
  }
});
