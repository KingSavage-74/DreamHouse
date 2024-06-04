const ImgForActive = document.querySelectorAll(".image_slider_container");

ImgForActive.forEach((Img) => {
    Img.addEventListener("mouseover", onTooltipClick)
    Img.addEventListener("mouseleave", onTooltipClick)
})

function onTooltipClick(evt) {
    evt.target.classList.toggle("image_slider_container--active");
}