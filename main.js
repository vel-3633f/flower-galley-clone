const nav = document.getElementById("js-nav");
const ham = document.getElementById("js-hamburger");
const header = document.getElementById("js-header");
const side = document.getElementById("js-side");

ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});

//スクロール時のイベントを追加
window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const inner = window.innerHeight;
  // headerとsideをスクロールで登場
  if (scroll > inner) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
  if (scroll > window.innerHeight + 200) {
    side.classList.add("show")
  } else {
    side.classList.remove("show");
  }
  // 画像を拡大
  const elem = document.getElementsByClassName('image-item');
  //現在のスクロール位置を取得して、10で除算
  const scrollY = scroll / 10;
  if (scrollY < 7) {
    elem[1].style.marginRight = scrollY * 3 + "px";
    elem[1].style.marginLeft = scrollY * 3 + "px";
  } else {
    for (let i = 0; i < 3; i++){
      elem[i].style.width = (scrollY - 7 + 33) + 'vw';
    }
  }

  // 下から登場
  const title = document.getElementById('js-title');
  const inf = document.getElementById('js-information');
  const gallery = document.getElementById('js-gallery');
  const galleryItem = document.getElementsByClassName('gallery-item')
  if (scroll > title.offsetTop - inner / 1.4) {
    title.classList.add("show");
  }
  if (scroll > inf.offsetTop - inner / 1.4) {
    inf.classList.add("show")
  }
  if (scroll > gallery.offsetTop - inner / 1.4) {
    gallery.classList.add("show")
  }
  for (let i = 0; i < galleryItem.length; i++){
    if (scroll > galleryItem[i].offsetTop - inner / 1.4) {
      galleryItem[i].classList.add("show");
    }
  }
});

