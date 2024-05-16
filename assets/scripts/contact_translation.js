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
    main_t: "Contact Us",
    up_text: "Get back to us",
    send_msg: "Send",
    thx: "Thank you! Your submission has been received!",
    oops: "Oops! Something went wrong while submitting the form.",
    c_addr:
      "<span class='pe-icon pe-map-marker'></span><h6>Address</h6>Osman Örek Boulevard, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<p > Kyrenia - TRNC</p>",
    c_rez:
      "<span class='pe-icon pe-phone'></span> <h6>Call Us</h6> <a href='tel:0 (392) 444 87 86 ' >Reservation: 0 (392) 444 87 86  </a>",
    c_mail:
      "<span class='pe-icon pe-mail'></span> <h6>Send Mail</h6> Email : <a href='mailto:info@afitapkebap.com' >info@afitapkebap.com </a>",
    c_prog:
      "<span class='pe-icon pe-timer'></span><h6>Opening Hours</h6> <h4>Monday - Sunday</h4> <strong>12:00 – 01:30 <br /> </strong>",
    c_desc:
      "Afitap Kebap's menu is rich and diverse. In addition to traditional Turkish kebabs, there are special appetizers, salads, hot appetizers, chicken kebabs, wraps, desserts and many more options. One of the special flavors of the restaurant, 'Grilled Halloumi', includes 'fresh halloumi' It is a delicious dish where cheese and vegetables are cooked on the grill. Similarly, 'Cyprus Pastrami' is a feast of taste where dried meat blended with special spices meets a special taste.",

    our_socials: "Follow us : ",
    our_address:
      "<h6>Address</h6>Osman Örek Boulevard, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<br /> Kyrenia - TRNC",
    our_programs:
      "<h6>Opening Hours</h6> <h4>Monday - Sunday</h4> <strong>12:00 – 01:30 <br /> </strong>",
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
    main_t: "Bize Ulaşın",
    up_text: "Bize geri dönüş yapın",
    send_msg: "Gönder",
    thx: "Teşekkür ederim! Gönderiminiz alındı!",
    oops: "Hata! Formu gönderirken bir şeyler ters gitti.",
    c_addr:
      "<span class='pe-icon pe-map-marker'></span><h6>Adres</h6>Osman Örek Bulvarı, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<p> Girne - KKTC</p>",
    c_rez:
      "<span class='pe-icon pe-phone'></span> <h6>Bizi Arayın</h6> <a href='tel:0 (392) 444 87 86 ' >Rezervasyon : 0 (392) 444 87 86 </a>",
    c_mail:
      "<span class='pe-icon pe-mail'></span> <h6>Mail Atın</h6> Email : <a href='mailto:info@afitapkebap.com' >info@afitapkebap.com</a>",
    c_prog:
      "<span class='pe-icon pe-timer'></span><h6>Açılış Saatleri</h6> <h4>Pazartesi - Pazar</h4> <strong>12:00 – 01:30 <br /> </strong>",
    c_desc:
      "Afitap Kebap'ın menüsü zengin ve çeşitlidir. Geleneksel Türk kebaplarının yanı sıra, özel mezeler, salatalar, ara sıcaklar, tavuk kebapları, dürümler, tatlılar ve daha birçok seçenek mevcuttur. Restoranın özel lezzetlerinden biri olan 'Izgara Hellim', taze hellim peyniri ve sebzelerin ızgarada pişirilerek sunulduğu bir enfes yemektir. Aynı şekilde 'Kıbrıs Pastırması' da, özel baharatlarla harmanlanmış ve kurutulmuş etin özel bir lezzetle buluştuğu bir lezzet şölenidir.",

    our_socials: "Bizi Takip Edin: ",
    our_address:
      "<h6>Adres</h6>Osman Örek Bulvarı, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<br /> Girne - KKTC",
    our_programs:
      "<h6>Açılış Saatleri</h6> <h4>Pazartesi - Pazar</h4> <strong>12:00 – 01:30 <br /> </strong>",
    our_contact: "Bize Ulaşın: ",
  },
  ru: {
    lang_icon:
      "<img src='https://flagcdn.com/48x36/ru.png' style='width: 1.25rem; height: 1rem;' alt='Язык'>",
    home_nav: "Главная",
    menu_nav: "Меню",
    about_us: "О нас",
    contact: "Контакты",
    reservation: "Бронирование",
    main_t: "Свяжитесь с нами",
    up_text: "Свяжитесь с нами",
    send_msg: "Отправить",
    thx: "Спасибо! Ваше сообщение получено!",
    oops: "Ошибка! Что-то пошло не так при отправке формы.",
    c_addr:
      "<span class='pe-icon pe-map-marker'></span><h6>Адрес</h6>Осман Орек Бульвар, улица 15 Касым, Апартаменты Консе и Ходжа, № 9-10<p> Гирне - Северный Кипр</p>",
    c_rez:
      "<span class='pe-icon pe-phone'></span> <h6>Звоните нам</h6> <a href='tel:0 (392) 444 87 86 ' >Бронирование : 0 (392) 444 87 86 </a>",
    c_mail:
      "<span class='pe-icon pe-mail'></span> <h6>Напишите нам</h6> Электронная почта: <a href='mailto:info@afitapkebap.com' >info@afitapkebap.com</a>",
    c_prog:
      "<span class='pe-icon pe-timer'></span><h6>Часы работы</h6> <h4>Понедельник - Воскресенье</h4> <strong>12:00 – 01:30 <br /> </strong>",
    c_desc:
      "Меню ресторана 'Афитап Кебап' богато и разнообразно. Оно включает в себя не только традиционные турецкие кебабы, но также специальные закуски, салаты, горячие закуски, куриные кебабы, буррито, десерты и многое другое. Одним из уникальных блюд ресторана является 'Гриль Халлуми' - восхитительное блюдо, в котором свежий халлуми с овощами готовится на гриле. Также стоит попробовать 'Кипрскую пастрами', где специально приготовленное и высушенное мясо встречается с особым вкусом.",
    our_socials: "Следите за нами: ",
    our_address:
      "<h6>Адрес</h6>Осман Орек Бульвар, улица 15 Касым, Апартаменты Консе и Ходжа, № 9-10<br /> Гирне - Северный Кипр",
    our_programs:
      "<h6>Часы работы</h6> <h4>Понедельник - Воскресенье</h4> <strong>12:00 – 01:30 <br /> </strong>",
    our_contact: "Свяжитесь с нами: ",
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
    (document.querySelector('input[name="fullName"]').placeholder = "İsminiz"),
      (document.querySelector('input[name="email"]').placeholder =
        "Email Addresi");
    document.querySelector('input[name="subject"]').placeholder = "Konu";
    document.querySelector('textarea[name="message"]').placeholder = "Mesaj";

    document.querySelector('input[name="dt_mc_emailid"]').placeholder =
      "E-posta adresinizi girin";
  } else if (lang === "ru") {
    (document.querySelector('input[name="fullName"]').placeholder = "Ваше имя"),
      (document.querySelector('input[name="email"]').placeholder =
        "Адрес электронной почты");
    document.querySelector('input[name="subject"]').placeholder = "Тема";
    document.querySelector('textarea[name="message"]').placeholder =
      "Сообщение";

    document.querySelector('input[name="dt_mc_emailid"]').placeholder =
      "Введите ваш адрес электронной почты";
  } else {
    (document.querySelector('input[name="fullName"]').placeholder =
      "Full Name"),
      (document.querySelector('input[name="email"]').placeholder =
        "Email Address");
    document.querySelector('input[name="subject"]').placeholder = "Subject";
    document.querySelector('textarea[name="message"]').placeholder = "Message";

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
