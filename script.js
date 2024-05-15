// locoScroll imported
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main-div'),
    smooth: true
});

function page3Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
page3Animation()

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });
}
swiperAnimation()


function loader() {
    let loading = document.querySelector("#loader");
    let h1 = loading.querySelector("h2");
    function textChange() {
      // console.log("no error");
      setTimeout(function () {
        h1.innerText = "Experiences";
      }, 1000);
      setTimeout(function () {
        h1.innerText = "Contents";
      }, 2000);
    }
    textChange();
    setTimeout(function () {
      loading.style.top = "-100%";
    }, 3000);
  }
  loader();