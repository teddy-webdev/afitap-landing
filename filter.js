const all_btn = document.querySelector('#all');
const kebap_btn = document.querySelector('#Kebaplar');
const mezeler_btn = document.querySelector('#mezeler');
const salatalar_btn = document.querySelector('#salatalar');
const arasıcaklar_btn = document.querySelector('#arasıcaklar');
const dürümler_btn = document.querySelector('#dürümler');
const diyetmenu_btn = document.querySelector('#diyetmenu');
const cocukmenu_btn = document.querySelector('#cocukmenu');
const alkolluicecekler_btn = document.querySelector('#alkolluicecekler');
const fırınurunleri_btn = document.querySelector('#fırınurunleri');

// all buttons

const list_1 = document.querySelector('#list_1');
const salatalar = document.querySelector('#salatalar_section');
const mezeler = document.querySelector('#mezeler_section');
const fırın = document.querySelector('#fırın_section');
const kebaplar = document.querySelector('#kebaplar_section');
const dürümler = document.querySelector('#dürümler_section');
const diyetmenü = document.querySelector('#diyetmenü_section');
const cocukmenusu = document.querySelector('#cocukmenusu_section');
const Rakı = document.querySelector('#Rakı_section');
const Şaraplar = document.querySelector('#Şaraplar_section');
const Viski = document.querySelector('#Viski_section');
const Biralar = document.querySelector('#Biralar_section');
const İçecekler = document.querySelector('#İçecekler_section');

// all sections


kebap_btn.addEventListener("click", () => {
    if (kebaplar.classList.contains("hide")) {
            kebaplar.classList.remove('hide')
        } else {
            kebaplar.classList.add('hide')
        }
})
mezeler_btn.addEventListener("click", () => {
    if (mezeler.classList.contains("hide")) {
            mezeler.classList.remove('hide')
        } else {
            mezeler.classList.add('hide')
        }
})
salatalar_btn.addEventListener("click", () => {
    if (salatalar.classList.contains("hide")) {
            salatalar.classList.remove('hide')
        } else {
            salatalar.classList.add('hide')
        }
})
arasıcaklar_btn.addEventListener("click", () => {
    if (list_1.classList.contains("hide")) {
            list_1.classList.remove('hide')
        } else {
            list_1.classList.add('hide')
        }
})
dürümler_btn.addEventListener("click", () => {
    if (dürümler.classList.contains("hide")) {
            dürümler.classList.remove('hide')
        } else {
            dürümler.classList.add('hide')
        }
})
diyetmenu_btn.addEventListener("click", () => {
    if (diyetmenü.classList.contains("hide")) {
            diyetmenü.classList.remove('hide')
        } else {
            diyetmenü.classList.add('hide')
        }
})
cocukmenu_btn.addEventListener("click", () => {
    if (cocukmenusu.classList.contains("hide")) {
            cocukmenusu.classList.remove('hide')
        } else {
            cocukmenusu.classList.add('hide')
        }
})
alkolluicecekler_btn.addEventListener("click", () => {
    if (Rakı.classList.contains("hide")) {
            Rakı.classList.remove('hide')
        } else {
            Rakı.classList.add('hide')
        }
})
fırınurunleri_btn.addEventListener("click", () => {
    if (fırın.classList.contains("hide")) {
            fırın.classList.remove('hide')
        } else {
            fırın.classList.add('hide')
        }
})