// 1. Поднятие картинки при наведении
const ImgForActive = document.querySelectorAll(".image_rising_container");
ImgForActive.forEach((Img) => {
    Img.addEventListener("mouseover", onTooltipClick)
    Img.addEventListener("mouseleave", onTooltipClick)
})

function onTooltipClick(evt) {
    evt.target.classList.toggle("image_rising_container--active");
}

// 2. Прогрессбар сверху
const progressBar = document.querySelector(".progressbar");
const windowHeiht = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    const windowScroll = window.scrollY;
    const progressBarWidth = (windowScroll / windowHeiht).toFixed(2);

    progressBar.setAttribute("style", `transform: scaleX(${progressBarWidth});`);
});


// 3. Движение картинок зажатой мышкой
const slider = document.querySelector('.img_conrainer_interior_slider');

let isDragging = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', (event) => {
  isDragging = true;
  startX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});

slider.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  event.preventDefault();
  const x = event.pageX - slider.offsetLeft;
  const walk = (x - startX) ; 
  slider.scrollLeft = scrollLeft - walk;
});

//