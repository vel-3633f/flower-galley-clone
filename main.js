const nav = document.getElementById("js-nav");
const ham = document.getElementById("js-hamburger");
const header = document.getElementById("js-header");
const side = document.getElementById("js-side");
const title = document.getElementById("js-title");
const inf = document.getElementById("js-information");
const gallery = document.getElementById("js-gallery");
const galleryItem = document.getElementsByClassName("gallery-item");
const access = document.getElementsByClassName("access");

ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});

//スクロール時のイベントを追加
window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const inner = window.innerHeight;
  const width = window.innerWidth;
  // headerとsideをスクロールで登場
  if (scroll > inner) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }

  // サイドについて
  if (scroll > window.innerHeight + 200 && scroll < access[0].offsetTop - 100) {
    side.classList.add("show");
  } else {
    side.classList.remove("show");
  }
  // 画像を拡大
  const elem = document.getElementsByClassName("image-item");
  //現在のスクロール位置を取得して、10で除算
  const scrollY = scroll / 10;
  if (width > 900) {
    if (scrollY < 7) {
      elem[1].style.marginRight = scrollY * 3 + "px";
      elem[1].style.marginLeft = scrollY * 3 + "px";
      for (let item of elem) {
        item.style.width = 33 + "vw";
      }
    } else {
      for (let i = 0; i < 3; i++) {
        elem[i].style.width = scrollY - 7 + 33 + "vw";
      }
    }
  } else {
    elem[0].style.width = scrollY + 7 + 100 + "vw";
    elem[1].style.width = -scrollY + 100 + "vw";
    elem[2].style.width = scrollY + 7 + 100 + "vw";
  }

  // 下から登場
  if (scroll > title.offsetTop - inner / 1.4) {
    title.classList.add("show");
  }
  if (scroll > inf.offsetTop - inner / 1.4) {
    inf.classList.add("show");
  }
  if (scroll > gallery.offsetTop - inner / 1.4) {
    gallery.classList.add("show");
  }
  for (let i = 0; i < galleryItem.length; i++) {
    if (scroll > galleryItem[i].offsetTop - inner / 1.4) {
      galleryItem[i].classList.add("show");
    }
  }
  if (
    scroll > access[0].offsetTop - 100 &&
    scroll < access[0].offsetTop + 400
  ) {
    access[0].classList.add("back");
  } else {
    access[0].classList.remove("back");
  }
});
