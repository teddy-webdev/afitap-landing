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
    lang_icon: "<img src='https://flagcdn.com/48x36/gb.png' style='width: 1.25rem; height: 1rem;' alt='lang'>",
    home_nav: "Home",
    menu_nav: "Menu",
    about_us: "About",
    contact: "Contact",
    reservation: "Reservation",
    taste_home: "Taste the Difference",
    since_date: "Since 2020",
    experience_env: "Experience the magnificent environment",
    famous_cuis: "Famous Cuisine",
    today_meal: "Afitap Specials",
    tasting_menu: "Our picks for you",
    we_celebrate: "We Celebrate",
    local_seasonal: "Local and Seasonal Dishes",
    farm_table: "From Farm to Table",
    resto: "Restaurant",
    date: "Date",
    resto_desc: "AFİTAP KEBAP is a subsidiary of Musmer Trading Limited",
    sensitive: "Sensitive",
    services: "Our Service",
    services_desc: "Afitap Kebap invites you to an unforgettable gastronomic experience with its unique atmosphere and delicious food. The rich menu, carefully prepared by master chefs, brings together local and international flavors. The flavors combined with the hospitable service approach will ensure you have an unforgettable evening at this restaurant.",
    delicious_n: "More than 96 delicious &amp; beautiful",
    recipes_menu: "Recipes",
    comfort: "For your comfort",
    amaz_recipes: "Amazing Recipes",
    high_quality: "High Quality",
    high_quality_desc: "It is a kebab restaurant that stands out with its high quality approach. Our flavors, prepared with the freshest and most exclusive ingredients, meet the attentive touches of our masters.",
    inspiring_recipes: "Inspiring Recipes",
    inspiring_recipes_desc: "It offers not just food but also an inspiring experience. By combining the traditional taste of kebabs with modern interpretations, we leave unforgettable traces on the palate.",
    healthy_foods: "Healthy foods",
    healthy_foods_desc: "It adds a healthy touch to the kebab experience. Delicacies prepared with fresh and nutritious ingredients offer traditional taste with a modern and healthy approach. Magnificent health and taste.",
    exp_employees: "Experienced emplpoyees",
    exp_employees_desc: "The cornestone of our restaurant's success is the devoted contributions of our experienced employes. Our team, from master chefs to waiters, each specialized in their own field, takes the kebab experience to the next level.",
    princ_materials: "Principled Materials",
    princ_materials_desc: "Starting with the philosophy of 'Primitive ingredients' it brings the kebab experience together with pure and natural flavors. By expertly processing select and fresh ingredients, we combine the essenceof traditional kebabs with modern presentations.",
    fast_serv: "Fast Service",
    fast_serv_desc: "Our restaurant brings together sped and taste with its 'Quick Service'. We offer kebab lovers a fresh and carefully prepared delicacies as soon as possible. This fast service leaves a taste in your palate while placing your orders.",
    have_fun: "Have fun with your family and friends",
    coupon_img: " <img src='./assets/kupon afitap ENG.png' alt=''>",
    fun_disc: "<strong>25% Discount</strong> 15% coupon for familly parties",
    h_snack: "Healthy Snacks",
    h_snack_desc: "Our restaurant further enriches the kebab experience with he 'Healthy Snacks' option that combines health and taste",
    h_drinks: "Healthy Drinks",
    h_drinks_desc: "Our drinks prepared with natural and fresh ingredients, offer a refreshing and flavorfull alternative",
    c_desert: "Chocolate Desserts",
    c_desert_desc: "Chocolate desserts are also waiting for you for an extraordinary taste experience",
    soft_d: "Fresh Soft Drinks",
    soft_d_desc: "A taste journey that freshens the palate with fresh soft drinks awaits you.",
    p_meals: "Packaged Meals",
    p_meals_desc: "Our restaurant is also at your service with packaged meals, ofering solutions suitable for the fast pace of life",
    s_dish: "Spicy Dishes",
    s_dish_desc: "We suggest as specil experience to spicy food lovers with taste that ignite the palate.",
    face_u: "In front of you",
    our_food: "Our Food",
    our_food_desc: "It is full of flavors that leave unforgetable marks on the palate. By presenting traditional kebabs with a modern interpretation, we offer an experience where taste and creativity meet. Our dishes, prepared with selected ingredients and expert chefs, offer a taste that can be felt carefully on every palate. ",
    our_socials: "Follow us : ",
    our_address: "<h6>Address</h6>Osman Örek Boulevard, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<br /> Kyrenia - TRNC",
    our_programs: "<h6>Opening Hours</h6> <h4>Monday - Sunday</h4> <strong>12:00 – 02:00 <br /> </strong>",
    our_contact: "Contact us :"
  },
  tr: {
    lang_icon: "<img src='https://flagcdn.com/48x36/tr.png' style='width: 1.25rem; height: 1rem;' alt='lang'>",
    home_nav: "Ana Sayfa",
    menu_nav: "Menü",
    about_us: "Hakkımızda",
    contact: "İletişim",
    reservation: "Rezervasyon",
    taste_home: "Farkı Tat",
    since_date: "2020'den Beri",
    experience_env: "Muhteşem Ortamı Deneyimleyin",
    famous_cuis: "Ünlü Mutfak",
    today_meal: "Afitap Özel Fırsatları",
    tasting_menu: "Sizin için",
    we_celebrate: "Kutluyoruz",
    local_seasonal: "Yerel ve Mevsimsel Lezzetler",
    farm_table: "Çiftlikten Sofraya",
    resto: "Restoran",
    date: "Tarih",
    resto_desc: "AFİTAP KEBAP, Musmer Trading Limited'ın bir yan kuruluşudur.",
    sensitive: "Duyarlı",
    services: "Hizmetlerimiz",
    services_desc: "Afitap Kebap, benzersiz atmosferi ve lezzetli yemekleriyle unutulmaz bir gastronomik deneyim için sizi davet ediyor. Usta şefler tarafından özenle hazırlanan zengin menü, yerel ve uluslararası lezzetleri bir araya getiriyor. Misafirperver hizmet anlayışıyla birleşen lezzetler, bu restoranda unutulmaz bir akşam geçirmenizi sağlayacaktır.",
    delicious_n: "96'dan Fazla Lezzetli ve Güzel",
    recipes_menu: "Tarifler",
    comfort: "Konforunuz İçin",
    amaz_recipes: "Harika Tarifler",
    high_quality: "Yüksek Kalite",
    high_quality_desc: "Yüksek kalite anlayışıyla öne çıkan bir kebap restoranıdır. En taze ve en seçkin malzemelerle hazırlanan lezzetlerimiz, ustalarımızın titiz dokunuşlarıyla buluşur.",
    inspiring_recipes: "İlham Veren Tarifler",
    inspiring_recipes_desc: "Sadece yemek değil, aynı zamanda ilham veren bir deneyim sunar. Geleneksel kebap lezzetini modern yorumlarla birleştirerek damaklarda unutulmaz izler bırakırız.",
    healthy_foods: "Sağlıklı Yiyecekler",
    healthy_foods_desc: "Kebap deneyimine sağlıklı bir dokunuş ekler. Taze ve besleyici malzemelerle hazırlanan lezzetler, geleneksel tadı modern ve sağlıklı bir yaklaşımla sunar. Muhteşem sağlık ve lezzet.",
    exp_employees: "Deneyimli Çalışanlar",
    exp_employees_desc: "Restoranımızın başarısının temeli, deneyimli çalışanlarımızın özverili katkılarıdır. Usta şeflerden garsonlara kadar her biri kendi alanında uzmanlaşmış olan ekibimiz, kebap deneyimini bir üst seviyeye taşır.",
    princ_materials: "İlkeli Malzemeler",
    princ_materials_desc: "'İlkel malzemeler' felsefesiyle başlayarak, kebap deneyimini saf ve doğal lezzetlerle buluşturur. Seçilmiş ve taze malzemeleri ustaca işleyerek, geleneksel kebapların özünü modern sunumlarla bir araya getiririz.",
    fast_serv: "Hızlı Hizmet",
    fast_serv_desc: "Restoranımız, 'Hızlı Servis' ile hızı ve lezzeti bir araya getirir. Kebap severlere mümkün olan en kısa sürede taze ve özenle hazırlanan lezzetler sunar. Bu hızlı hizmet, siparişlerinizi verirken damakta bir tat bırakır.",
    have_fun: "Aileniz ve Arkadaşlarınızla Eğlenin",
    coupon_img: " <img src='./assets/kupon afitap.png' alt=''>",
    fun_disc: "<strong>25% İndirim</strong> Aile partileri için 15% indirim kuponu",
    h_snack: "Sağlıklı Atıştırmalıklar",
    h_snack_desc: "Restoranımız, sağlık ve lezzeti bir araya getiren 'Sağlıklı Atıştırmalıklar' seçeneği ile kebap deneyimini daha da zenginleştirir.",
    h_drinks: "Sağlıklı İçecekler",
    h_drinks_desc: "Doğal ve taze malzemelerle hazırlanan içeceklerimiz, ferahlatıcı ve lezzetli bir alternatif sunar.",
    c_desert: "Çikolatalı Tatlılar",
    c_desert_desc: "Sıradışı bir tat deneyimi için sizi çikolatalı tatlılar da bekliyor.",
    soft_d: "Taze İçecekler",
    soft_d_desc: "Taze içeceklerle damakları canlandıran bir tat yolculuğu sizi bekliyor.",
    p_meals: "Paketli Yemekler",
    p_meals_desc: "Restoranımız, hızlı yaşam temposuna uygun çözümler sunan paketli yemeklerle de hizmetinizdedir.",
    s_dish: "Baharatlı Yemekler",
    s_dish_desc: "Baharatlı yemek sevenlere damakları ateşleyen lezzetler sunmamızı öneriyoruz.",
    face_u: "Sizin Önünüzde",
    our_food: "Yemeklerimiz",
    our_food_desc: "Damaklarda unutulmaz izler bırakan lezzetlerle doludur. Geleneksel kebapları modern bir yorumla sunarak tat ve yaratıcılığın buluştuğu bir deneyim sunuyoruz. Seçilmiş malzemelerle ve uzman şeflerle hazırlanan yemeklerimiz, her damakta dikkatle hissedilen bir lezzet sunar.",
    our_socials: "Bizi Takip Edin: ",
    our_address: "<h6>Adres</h6>Osman Örek Bulvarı, 15 Kasım Sokak, Konce & Hocanın Apt. No:9-10<br /> Girne - KKTC",
    our_programs: "<h6>Açılış Saatleri</h6> <h4>Pazartesi - Pazar</h4> <strong>12:00 – 02:00 <br /> </strong>",
    our_contact: "Bize Ulaşın: "
},
ru: {
  lang_icon: "<img src='https://flagcdn.com/48x36/ru.png' style='width: 1.25rem; height: 1rem;' alt='Язык'>",
  home_nav: "Главная",
  menu_nav: "Меню",
  about_us: "О нас",
  contact: "Контакты",
  reservation: "Бронирование",
  taste_home: "Уникальный Вкус",
  since_date: "С 2020 года",
  experience_env: "Почувствуйте Удивительную Атмосферу",
  famous_cuis: "Известная Кухня",
  today_meal: "Специальные Предложения сегодня",
  tasting_menu: "Для Вас",
  we_celebrate: "Мы Празднуем",
  local_seasonal: "Местные и Сезонные Вкусы",
  farm_table: "От Фермы к Столу",
  resto: "Ресторан",
  date: "Дата",
  resto_desc: "АФИТАП КЕБАП - это дочернее предприятие Musmer Trading Limited.",
  sensitive: "Чувствительный",
  services: "Наши Услуги",
  services_desc: "Afitap Kebap приглашает вас на незабываемый гастрономический опыт с уникальной атмосферой и вкусными блюдами. Богатое меню, приготовленное опытными поварами, объединяет местные и международные вкусы. Сочетание гостеприимного обслуживания и вкусов позволит вам провести незабываемый вечер в этом ресторане.",
  delicious_n: "Более 96 Вкусных и Красивых Блюд",
  recipes_menu: "Рецепты",
  comfort: "Для Вашего Комфорта",
  amaz_recipes: "Удивительные Рецепты",
  high_quality: "Высокое Качество",
  high_quality_desc: "Ресторан, выделяющийся высоким качеством. Наши вкусные блюда, приготовленные из самых свежих и отборных ингредиентов, сливаются с мастерским прикосновением наших поваров.",
  inspiring_recipes: "Вдохновляющие Рецепты",
  inspiring_recipes_desc: "Мы предлагаем не только блюда, но и вдохновляющий опыт. Мы сочетаем традиционные вкусы кебаба с современными интерпретациями, чтобы оставить незабываемые впечатления на вашем вкусе.",
  healthy_foods: "Здоровая Еда",
  healthy_foods_desc: "Мы добавляем здоровое прикосновение к кебабу. Блюда, приготовленные из свежих и питательных ингредиентов, предлагают традиционный вкус в современном и здоровом исполнении. Здоровье и вкус великолепно сочетаются.",
  exp_employees: "Опытные Сотрудники",
  exp_employees_desc: "Основой успеха нашего ресторана является преданная работа опытных сотрудников. Наша команда, начиная от опытных поваров и заканчивая официантами, специализируется в своей области и поднимает кебаб-опыт на новый уровень.",
  princ_materials: "Принципиальные Ингредиенты",
  princ_materials_desc: "Мы объединяем кебаб-опыт, начиная с философии 'принципиальных ингредиентов', и сочетаем его с чистыми и натуральными вкусами. Выбранные и свежие ингредиенты мастерски обрабатываются, чтобы представить традиционные вкусы кебаба в современной подаче.",
  fast_serv: "Быстрое Обслуживание",
  fast_serv_desc: "Наш ресторан объединяет скорость и вкус с 'Быстрым Обслуживанием'. Мы предлагаем кебаб-любителям свежие и заботливо приготовленные блюда в кратчайшие сроки. Это быстрое обслуживание оставит вас с великолепным вкусом при заказе.",
  have_fun: "Проведите Время с Семьей и Друзьями",
  coupon_img: " <img src='./assets/kupon afitap RUS.png' alt=''>",
  fun_disc: "<strong>25% Скидка</strong> на семейные вечеринки, 15% купон на скидку",
  h_snack: "Здоровые Закуски",
  h_snack_desc: "Наш ресторан обогащает кебаб-опыт 'Здоровыми Закусками', сочетающими в себе здоровье и вкус.",
  h_drinks: "Здоровые Напитки",
  h_drinks_desc: "Наши напитки, приготовленные из натуральных и свежих ингредиентов, предлагают освежающую и вкусную альтернативу.",
  c_desert: "Шоколадные Десерты",
  c_desert_desc: "Вас также ждут шоколадные десерты для необычного вкусового опыта.",
  soft_d: "Свежие Напитки",
  soft_d_desc: "Свежие напитки ожидают вас, принося вкусное путешествие для ваших вкусовых рецепторов.",
  p_meals: "Упакованные Блюда",
  p_meals_desc: "Наш ресторан также предлагает упакованные блюда, соответствующие быстрому темпу жизни.",
  s_dish: "Пикантные Блюда",
  s_dish_desc: "Мы рекомендуем нашим любителям пикантных блюд для оживления вкусовых рецепторов.",
  face_u: "Перед Вами",
  our_food: "Наши Блюда",
  our_food_desc: "Они полны вкусов, оставляя незабываемые впечатления на вашем вкусе. Мы предлагаем традиционные кебабы с современными интерпретациями, где вкус и творчество соединяются. Наши блюда, приготовленные из отобранных ингредиентов и опытными поварами, доставляют удовольствие каждому гурману.",
  our_socials: "Следите за нами: ",
  our_address: "<h6>Адрес</h6> Осман Орек Бульвар, 15 улица Консе и Хокана, дом № 9-10<br /> Гирне - Северный Кипр",
  our_programs: "<h6>Часы Работы</h6> <h4>Понедельник - Воскресенье</h4> <strong>12:00 – 02:00 <br /> </strong>",
  our_contact: "Свяжитесь с нами: "
}


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
  // Replace this code with your desired translations
  // Example:
  if (lang === "tr") {
    document.querySelector('input[name="dt_mc_emailid"]').placeholder =
      "E-posta adresinizi girin";

  }
  else if (lang === "ru") {
    document.querySelector('input[name="dt_mc_emailid"]').placeholder =
      "Введите свой адрес электронной почты";

  }
  else {
    document.querySelector('input[name="dt_mc_emailid"]').placeholder = "Enter your Email";

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

  // document.querySelector('.dropdownMenuButton').textContent = (window.localStorage.getItem("language") || "en").toUpperCase();
});

document.getElementById("lang").addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    const lang = e.target.href.slice(-2);
    i18nInstance.setLang(lang);
    setContactFormPlaceHolders(lang);
    // document.querySelector('.dropdownMenuButton').textContent = (window.localStorage.getItem("language") || "en").toUpperCase();

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


