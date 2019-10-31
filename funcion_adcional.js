function setpluma ()
{
    var color = this.style.backgroundColor
    const pixeles = document.querySelectorAll(".pixel");

    pixeles.forEach(pixel => {
        pixel.addEventListener("click",  () => {
            pixel.style.backgroundColor = color;
        });
    });
}


