// let lang = document.getElementById("lang");

// function toggleLangBtn() {
//   if (lang.className === "langList") {
//     lang.classList.add("hide");
//   } else {
//     lang.classList.remove("hide");
//     setTimeout(function () {
//       lang.classList.add("hide");
//     }, 3500);
//   }
// }

// function i18n(options) {
//   options = Object.assign(
//     {},
//     {
//       lang: window.localStorage.getItem("language") || "en",
//       data: i18nData,
//     },
//     options
//   );
//   let langStore = options.data[options.lang];
//   this.setLang = function (language) {
//     window.localStorage.setItem("language", language);
//     langStore = options.data[language];
//   };
//   this.getItem = function (key) {
//     return langStore[key];
//   };
//   return this;
// }

// const i18nData = {
//   en: {
//     lang_icon: "<img src='https://flagcdn.com/48x36/gb.png' style='width: 1.25rem; height: 1rem;' alt='lang'>",
//     home_nav: "Home",
//     menu_nav: "Menu",
//     about_us: "About",
//     contact: "Contact",
//     reservation: "Reservation",

//     our_socials: "Follow us : ",
//     our_address: "<h6>Address</h6>Osman Örek Boulevard, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<br /> Kyrenia - TRNC",
//     our_programs: "<h6>Opening Hours</h6> <h4>Monday - Sunday</h4> <strong>12:00 – 01:30 <br /> </strong>",
//     our_contact: "Contact us :"
//   },
//   tr: {
//     lang_icon: "<img src='https://flagcdn.com/48x36/tr.png' style='width: 1.25rem; height: 1rem;' alt='lang'>",
//     home_nav: "Ana Sayfa",
//     menu_nav: "Menü",
//     about_us: "Hakkımızda",
//     contact: "İletişim",
//     reservation: "Rezervasyon",

//     our_socials: "Bizi Takip Edin: ",
//     our_address: "<h6>Adres</h6>Osman Örek Bulvarı, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<br /> Girne - KKTC",
//     our_programs: "<h6>Açılış Saatleri</h6> <h4>Pazartesi - Pazar</h4> <strong>12:00 – 01:30 <br /> </strong>",
//     our_contact: "Bize Ulaşın: "
// }

// };

// const i18nInstance = new i18n();

// function changeLabels() {
//   const elements = document.querySelectorAll("[data-translate]");
//   elements.forEach(function (element) {
//     const forLabel = element.getAttribute("data-translate");
//     element.innerHTML = i18nInstance.getItem(forLabel);
//   });
// }

// function getParameterByName(name, url = window.location.href) {
//   name = name.replace(/[\[\]]/g, "\\$&");
//   const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
//   const results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return "";
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

// function setContactFormPlaceHolders(lang) {
//   if (lang === "tr") {
//     document.querySelector('input[name="dt_mc_emailid"]').placeholder =
//       "E-posta adresinizi girin";

//   }
//   else {
//     document.querySelector('input[name="dt_mc_emailid"]').placeholder = "Enter your Email";

//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const lang = getParameterByName("lang");
//   if (lang) {
//     window.localStorage.setItem("language", lang);
//     i18nInstance.setLang(lang);
//   }
//   changeLabels();
//   setContactFormPlaceHolders(window.localStorage.getItem("language") || "en");

// });

// document.getElementById("lang").addEventListener("click", function (e) {
//   if (e.target.tagName === "A") {
//     const lang = e.target.href.slice(-2);
//     i18nInstance.setLang(lang);
//     setContactFormPlaceHolders(lang);

//     const langQueryParam = getParameterByName("lang");
//     if (langQueryParam) {
//       const url = new URL(window.location.href);
//       const searchParams = url.searchParams;
//       searchParams.set("lang", lang);
//       url.search = searchParams.toString();
//       const newUrl = url.pathname + url.search;
//       window.history.replaceState({}, "", newUrl);
//     }
//     changeLabels();
//     e.preventDefault();
//   }
// });

<>
  <title>
    Afitap Kebap | Kebap Restaurant in Girne - Explore our menu for delicious
    Turkish kebaps
  </title>
  <link rel="canonical" href="https://afitapkebap.com/" />
  <meta
    name="description"
    content="Savor the flavors of authentic Turkish kebabs and fast food at Afitap Kebap in Girne [Kyrenia]. Explore our menu for delicious shawarma, gyros, doner kebab, and more. Dine in or order for takeout and delivery."
  />
  <meta
    name="og:description"
    content="Savor the flavors of authentic Turkish kebabs and fast food at Afitap Kebap in Girne [Kyrenia]. Explore our menu for delicious shawarma, gyros, doner kebab, and more. Dine in or order for takeout and delivery."
  />
  <meta property="og:url" content="https://afitapkebap.com" />
  <meta name="googlebot" content="index, follow" />
  <meta name="robosts" content="index, follow" />
  <meta name="revisit-after" content="7 days" />
  <meta
    name="keywords"
    content="Turkish kebabs, Authentic Turkish cuisine, Kebab Restaurant, Turkish grill, Mediteraneans flavors, Turkish restaurant, Takkeout and delivery, fast food kebabs, doner kebab, Hummus, Baklava, Pide, Turkish Piza (Pide), lefkosa turkish restaurant, Nicosia kebab house, Kebab takeaway, family deals, happy hour, fresh ingredients, healthy options, grilled kebabs, salad bars, low-fat cuisine"
  />
</>;
