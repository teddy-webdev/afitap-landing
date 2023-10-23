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

    our_menu: "Our menu",
    _alls: "All",
    ara_sicaklars: "INTERMEDIATE MEALS",
    saladss: "SALADS",
    mezelers: "APPETIZERS",
    firins: "BAKERY PRODUCTS",
    kebabs: "KEBAPS",
    durumss: "WRAPS",
    diet_menus: "DIET MENU",
    kids_menus: "CHILDREN'S MENU",
    rakis: "RAKI",
    rakiss: "Raki",
    saraps: "WINES",
    viskis: "WHISKEY",
    biralars: "BEERS",
    iceceklers: "BEVERAGES",
    _all: "All",
    ara_sicaklar: "Intermediate Meals",
    salads: "Salads",
    mezeler: "Appetizers",
    firin: "Bakery Products",
    kebab: "Kebaps",
    durums: "Wraps",
    diet_menu: "Diet Menu",
    kids_menu: "Childrens's Menu",
    raki: "Raki",
    sarap: "Wines",
    viski: "Whiskey",
    biralar: "Beers",
    icecekler: "Beverages",

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

    our_menu: "Menümüz",
    _all: "Tümü",
    ara_sicaklar: "Ara Sıcaklar",
    salads: "Salatalar",
    mezeler: "Mezeler",
    firin: "Fırın Ürünleri",
    kebab: "Kebaplar",
    durums: "Dürümler",
    diet_menu: "Diyet Menü",
    kids_menu: "Çocuk Menüsü",
    raki: "Rakı",
    sarap: "Şaraplar",
    viski: "Viski",
    biralar: "Biralar",
    icecekler: "İçecekler",
    _alls: "TÜMÜ",
    ara_sicaklars: "ARA SICAKLAR",
    saladss: "SALATALAR",
    mezelers: "MEZELER",
    firins: "FIRIN ÜRÜNLERİ",
    kebabs: "KEBAPLAR",
    durumss: "DÜRÜMLER",
    diet_menus: "DİYET MENÜ",
    kids_menus: "ÇOCUK MENÜSÜ",
    rakis: "RAKI",
    rakiss: "Raki",
    saraps: "ŞARAPLAR",
    viskis: "VİSKİ",
    biralars: "BİRALAR",
    iceceklers: "İÇECEKLER",

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
    document.querySelector('input[name="dt_mc_emailid"]').placeholder =
      "E-posta adresinizi girin";

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
