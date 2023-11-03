const all_btn = document.querySelector("#all");
const kebap_btn = document.querySelector("#Kebaplar");
const mezeler_btn = document.querySelector("#mezeler");
const salatalar_btn = document.querySelector("#salatalar");
const arasıcaklar_btn = document.querySelector("#arasıcaklar");
const dürümler_btn = document.querySelector("#dürümler");
const diyetmenu_btn = document.querySelector("#diyetmenu");
const cocukmenu_btn = document.querySelector("#cocukmenu");
const icecekler_btn = document.querySelector("#icecekler");
const fırınurunleri_btn = document.querySelector("#fırınurunleri");
const raki_btn = document.querySelector("#raki_drink");
const viski_btn = document.querySelector("#Viski_btn");
const biralar_btn = document.querySelector("#Biralar_btn");
const saraplar_btn = document.querySelector("#Şaraplar_btn");

// all buttons

const list_1 = document.querySelector("#list_1");
const salatalar = document.querySelector("#salatalar_section");
const mezeler = document.querySelector("#mezeler_section");
const fırın = document.querySelector("#fırın_section");
const kebaplar = document.querySelector("#kebaplar_section");
const dürümler = document.querySelector("#dürümler_section");
const diyetmenü = document.querySelector("#diyetmenü_section");
const cocukmenusu = document.querySelector(".cocukmenusu_sections");
const Raki = document.querySelector(".Rakı_section");
const Şaraplar = document.querySelector(".Şaraplar_section");
const Viski = document.querySelector("#Viski_section");
const Biralar = document.querySelector(".Biralar_section");
const İçecekler = document.querySelector(".İçecekler_section");

// all sections
document.addEventListener("DOMContentLoaded", function () {
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
  Şaraplar.classList.add("hide");
  Raki.classList.add("hide");
  cocukmenusu.classList.add("hide");
  list_1.classList.remove("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
});

all_btn.addEventListener("click", () => {
  Viski.classList.remove("hide");
  Biralar.classList.remove("hide");
  İçecekler.classList.remove("hide");
  Şaraplar.classList.remove("hide");
  Raki.classList.remove("hide");
  cocukmenusu.classList.remove("hide");
  list_1.classList.remove("hide");
  kebaplar.classList.remove("hide");
  salatalar.classList.remove("hide");
  mezeler.classList.remove("hide");
  fırın.classList.remove("hide");
  dürümler.classList.remove("hide");
  diyetmenü.classList.remove("hide");
  cocukmenusu.classList.remove("hide");
});

kebap_btn.addEventListener("click", () => {
  if (kebaplar.classList.contains("hide")) {
    kebaplar.classList.remove("hide");
    // kebaplar.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
mezeler_btn.addEventListener("click", () => {
  if (mezeler.classList.contains("hide")) {
    mezeler.classList.remove("hide");
    // mezeler.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
salatalar_btn.addEventListener("click", () => {
  if (salatalar.classList.contains("hide")) {
    salatalar.classList.remove("hide");
    // salatalar.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
arasıcaklar_btn.addEventListener("click", () => {
  if (list_1.classList.contains("hide")) {
    list_1.classList.remove("hide");
    // list_1.scrollIntoView({ behavior: "smooth" });
  }
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
dürümler_btn.addEventListener("click", () => {
  if (dürümler.classList.contains("hide")) {
    dürümler.classList.remove("hide");
    //   dürümler.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
diyetmenu_btn.addEventListener("click", () => {
  if (diyetmenü.classList.contains("hide")) {
    diyetmenü.classList.remove("hide");
    //   diyetmenü.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
cocukmenu_btn.addEventListener("click", () => {
  if (cocukmenusu.classList.contains("hide")) {
    cocukmenusu.classList.remove("hide");
    //   cocukmenusu.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
icecekler_btn.addEventListener("click", () => {
  if (İçecekler.classList.contains("hide")) {
    İçecekler.classList.remove("hide");
    //   İçecekler.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
});
fırınurunleri_btn.addEventListener("click", () => {
  if (fırın.classList.contains("hide")) {
    fırın.classList.remove("hide");
    //   fırın.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
raki_btn.addEventListener("click", () => {
  if (Raki.classList.contains("hide")) {
    Raki.classList.remove("hide");
    //   Raki.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
viski_btn.addEventListener("click", () => {
  if (Viski.classList.contains("hide")) {
    Viski.classList.remove("hide");
    //   Viski.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
biralar_btn.addEventListener("click", () => {
  if (Biralar.classList.contains("hide")) {
    Biralar.classList.remove("hide");
    //   Biralar.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Şaraplar.classList.add("hide");
  Viski.classList.add("hide");
  İçecekler.classList.add("hide");
});
saraplar_btn.addEventListener("click", () => {
  if (Şaraplar.classList.contains("hide")) {
    Şaraplar.classList.remove("hide");
    //   Şaraplar.scrollIntoView({ behavior: "smooth" });
  }
  list_1.classList.add("hide");
  kebaplar.classList.add("hide");
  salatalar.classList.add("hide");
  mezeler.classList.add("hide");
  fırın.classList.add("hide");
  dürümler.classList.add("hide");
  diyetmenü.classList.add("hide");
  cocukmenusu.classList.add("hide");
  Raki.classList.add("hide");
  Viski.classList.add("hide");
  Biralar.classList.add("hide");
  İçecekler.classList.add("hide");
});
