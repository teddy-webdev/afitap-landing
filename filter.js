document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productItems = document.querySelectorAll(".dt-product-item");
  const arasıcaklar = document.querySelector(".wpb_wrapper-ara-sıcaklar"); 
  const kebaplar = document.querySelector(".wpb_wrapper-kebaplar"); 
  const salatalar = document.getElementById("salatalar"); 
  const dürümler = document.getElementById("dürümler"); 
  const diyetmenu = document.querySelector(".wpb_wrapper-diyet-menü"); 
  const cocukmenu = document.querySelector(".wpb_wrapper-cocuk-menusu"); 
  const mesrubat = document.querySelector(".wpb_wrapper-icecekler"); 
  const mezeler = document.querySelector(".wpb_wrapper-mezeler");
  const fırın = document.querySelector(".wpb_wrapper-fırın"); 
  const alkollu =document.querySelector(".wpb_wrapper-alkollu-icecekler")

  filterButtons.forEach(button => {
      button.addEventListener("click", function() {
          const filterValue = this.getAttribute("data-filter");

          arasıcaklar.style.display = filterValue === "ara-sıcaklar" ? "block" : "none";
          kebaplar.style.display = filterValue === "kebaplar" ? "block" : "none";
          mezeler.style.display = filterValue === "mezeler" ? "block" : "none";
          salatalar.style.display = filterValue === "salatalar" ? "block" : "none";
          dürümler.style.display = filterValue === "dürümler" ? "block" : "none";
          diyetmenu.style.display = filterValue === "diyet-menu" ? "block" : "none";
          cocukmenu.style.display = filterValue === "cocuk-menu" ? "block" : "none";
          alkollu.style.display = filterValue === "alkollu-icecekler" ? "block" : "none";
          fırın.style.display = filterValue === "fırın-urunleri" ? "block" : "none";
          alkollu.style.display = filterValue === "alkollu-urunleri" ? "block" : "none";
          mesrubat.style.display = filterValue === "mesrubat-urunleri" ? "block" : "none";



          // Filter product items
          productItems.forEach(item => {
              if (filterValue === "all" || item.classList.contains(filterValue)) {
                  item.style.display = "block";
              } else {
                  item.style.display = "none";
              }
          });
      });
  });
});
