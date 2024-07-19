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

    about_main: "About us",
    main_t: "Begining",
    main_desc:
      "Afitap Kebap is a kebab restaurant that offers the most delicious dishes of traditional Turkish cuisine. Meticulous meals prepared with delicious and fresh ingredients aim to offer an unforgettable experience to its guests. Afitap Kebap offers quality and satisfying meals to its customers with special recipes and carefully selected ingredients that reflect the rich heritage of Turkish cuisine.",
    fndr: "Founder",
    bgnh: "Begin here",
    date_1: "June 2020",
    restrnt: "Information About The Restaurant",
    desc_1:
      "Our country deserves the best of everything. . We are trying to do whatever is necessary for our city. With its stylish and spacious atmosphere, personalized service and rich menu",
    date_2: "June 2020",
    rht1: "Comfortable Seating Areas",
    desc_2:
      "Afitap Kebap offers its guests a pleasant experience with its cozy and comfortable seating areas. The interior of our restaurant has a spacious and modern design and aims to offer an atmosphere where our guests can relax comfortably and enjoy their meals.",
    kbpc: "Kebap Types",
    kbpym: "Kebab dishes",
    desc_3:
      "At Afitap Kebap restaurant, we offer delicious and various kebab dishes.",
    date_3: "June 2020",
    rstnm: "OUr Restaurant",
    date_4: "June 2020",
    desc_4:
      "As Afitap Kebap, we carefully prepare traditional kebab recipes and offer them to our guests. We are waiting for you to delight your palate with our delicious meat varieties, special spices and expertly cooked kebabs.",
    siparis: "Order",

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

    about_main: "Hakkımızda",
    main_t: "Başlangıç",
    main_desc:
      "Afitap Kebap, geleneksel Türk mutfağının en lezzetli yemeklerini sunan bir kebap restoranıdır. Lezzetli ve taze malzemelerle titizlikle hazırlanan yemekler, misafirlerine unutulmaz bir deneyim sunmayı amaçlamaktadır. Afitap Kebap, Türk mutfağının zengin mirasını yansıtan özel tarifler ve özenle seçilmiş malzemelerle müşterilerine kaliteli ve doyurucu yemekler sunmaktadır.",
    fndr: "Kurucu",
    bgnh: "Buradan başla",
    date_1: "Haziran 2020",
    restrnt: "Restoran Hakkında Bilgi",
    desc_1:
      "Ülkemiz her şeyin en iyisini hak ediyor. Şehrimiz için gerekli olan her şeyi yapmaya çalışıyoruz. Şık ve ferah atmosferi, kişiselleştirilmiş hizmeti ve zengin menüsü ile",
    date_2: "Haziran 2020",
    rht1: "Rahat Oturma Alanları",
    desc_2:
      "Afitap Kebap, misafirlerine konforlu ve keyifli bir deneyim sunar. Restoranımızın iç mekanı ferah ve modern bir tasarıma sahiptir ve misafirlerimizin rahatça dinlenebilecekleri ve yemeklerinin tadını çıkarabilecekleri bir ortam sunmayı amaçlar.",
    kbpc: "Kebap Çeşitleri",
    kbpym: "Kebap Yemekleri",
    desc_3:
      "Afitap Kebap restoranında lezzetli ve çeşitli kebap yemekleri sunuyoruz.",
    date_3: "Haziran 2020",
    rstnm: "Restoranımız",
    date_4: "Haziran 2020",
    desc_4:
      "Afitap Kebap olarak geleneksel kebap tariflerini özenle hazırlıyor ve misafirlerimize sunuyoruz. Lezzetli et çeşitleri, özel baharatlar ve uzmanca pişirilmiş kebaplarımız ile damaklarınızı şenlendirmeniz için sizi bekliyoruz.",
    siparis: "Sipariş",

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
    about_main: "О нас",
    main_t: "Введение",
    main_desc:
      "Afitap Kebap - это ресторан кебаба, предлагающий самые вкусные блюда традиционной турецкой кухни. Блюда, приготовленные с вниманием и из свежих ингредиентов, призваны предоставить посетителям незабываемый опыт. Afitap Kebap предлагает качественные и насыщенные блюда, отражающие богатое наследие турецкой кухни, с особыми рецептами и тщательно отобранными ингредиентами.",
    fndr: "Основатель",
    bgnh: "Начало",
    date_1: "Июнь 2020",
    restrnt: "Информация о Ресторане",
    desc_1:
      "Наша страна заслуживает только лучшего. Мы стараемся предоставить все необходимое для нашего города. Стильная и просторная атмосфера, персонализированное обслуживание и разнообразное меню -",
    date_2: "Июнь 2020",
    rht1: "Уютные Зоны для Отдыха",
    desc_2:
      "Afitap Kebap предлагает посетителям комфортный и приятный опыт. Внутреннее пространство нашего ресторана имеет светлый и современный дизайн, и наша цель - предоставить посетителям удобное место для отдыха и наслаждения едой.",
    kbpc: "Виды Кебаба",
    kbpym: "Блюда с Кебабом",
    desc_3:
      "В ресторане Afitap Kebap мы предлагаем разнообразные и вкусные блюда с кебабом.",
    date_3: "Июнь 2020",
    rstnm: "О Нашем Ресторане",
    date_4: "Июнь 2020",
    desc_4:
      "В Afitap Kebap мы готовим и предлагаем блюда с кебабом, приготовленные с заботой, чтобы порадовать ваши вкусовые рецепторы. Мы приготовляем вкусные виды мяса, используем специальные приправы и профессионально готовим кебабы, чтобы оставить незабываемые впечатления.",
    siparis: "Заказать",
    our_socials: "Следите за нами: ",
    our_address:
      "<h6>Адрес</h6> Осман Орек Бульвар, улица 15 Консе и Хокана, дом № 9-10<br /> Гирне - Северный Кипр",
    our_programs:
      "<h6>Часы Работы</h6> <h4>Понедельник - Воскресенье</h4> <strong>12:00 – 01:30 <br /> </strong>",
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
    document.querySelector('input[name="dt_mc_emailid"]').placeholder =
      "E-posta adresinizi girin";
  } else if (lang === "ru") {
    document.querySelector('input[name="dt_mc_emailid"]').placeholder =
      "Введите свой адрес электронной почты";
  } else {
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
