let lang = document.getElementById("lang");
// let langCurrentImg = document.getElementById("currentLang");

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

$.i18n = function (options) {
    options = $.extend(
        {},
        {
            lang: window.localStorage.getItem("language") || "en",
            data: $.i18n,
        },
        options
    );
    var langStore = options.data[options.lang];
    this.setLang = function (language){
        window.localStorage.setItem("language", language);
        langStore = options.data[language];
    };
    this.getItem = function (key) {
        return langStore[key];
    }
    return this;
}


$.i18n.tr={
    lang_icon: "<img src='https://flagcdn.com/48x36/tr.png' style='width: 1.25rem; height: 1rem;' alt='lang'>",
    
    
}
$.i18n.ru={
lang_icon: "<img src='https://flagcdn.com/48x36/ru.png' style='width: 1.25rem; height: 1rem;' alt='lang'>",
   
    
}
$.i18n.en={
lang_icon: "<img src='https://flagcdn.com/48x36/gb.png' style='width: 1.25rem; height: 1rem;' alt='lang'>",
    
    
}

var i18n = $.i18n();

var changeLabels = function () {
    $("[data-translate]").each(function () {
        var forLabel = $(this).attr("data-translate");
        this.innerHTML = i18n.getItem(forLabel);
    });
};

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setContactFormPlaceHolders (lang){
    // if (lang === "tr") {
    //     $('input[name="fullName"]').attr("placeholder", "Enter your Name");
    //     $('input[name="email"]').attr("placeholder", "Enter your Email");
    //     $('input[name="EMAIL"]').attr("placeholder", "Your Email");
    //     $('textarea[name="message"]').attr("placeholder", "Enter your Message");
    //   }
    //   if (lang === "en") {
    //     $('input[name="fullName"]').attr("placeholder", "Enter your Name");
    //     $('input[name="email"]').attr("placeholder", "Enter your Email");
    //     $('input[name="EMAIL"]').attr("placeholder", "Your Email");
    //     $('textarea[name="message"]').attr("placeholder", "Enter your Message");
    //   }
    //   if (lang === "ru") {
    //     $('input[name="fullName"]').attr("placeholder", "Enter your Name");
    //     $('input[name="email"]').attr("placeholder", "Enter your Email");
    //     $('input[name="EMAIL"]').attr("placeholder", "Your Email");
    //     $('textarea[name="message"]').attr("placeholder", "Enter your Message");
    //   }
}

$(document).ready(function () {
    const lang = getParameterByName("lang");
    if (lang) {
        window.localStorage.setItem("language", lang);
        i18n.setLang(lang);
    }
    changeLabels();
    setContactFormPlaceHolders(window.localStorage.getItem("language") || "en");

    // $("dropdownMenuButton").text(
    //     (window.localStorage.getItem("language") || "en").toUpperCase()
    // );
});

$("#lang")
    .find("a")
    .click(function(e) {
        var lang = this.href.slice(-2);
        i18n.setLang(lang);
        setContactFormPlaceHolders(lang)
        // $(".dropdownMenuButton").text(
        //     (window.localStorage.getItem("language") || "en").toUpperCase()
        // );

        const langQueryParam = getParameterByName("lang");
        if(langQueryParam) {
            var url = new URL(window.location.href);
            var search_params = url.searchParams;
            search_params.set("lang", lang);
            url.search = search_params.toString();
            var new_url = url.pathname + url.search;
            window.history.replaceState({}, "", new_url);
        }
        changeLabels();
        e.preventDefault();
    });