// function setpluma ()
// {
//     var color = this.style.backgroundColor;
//     console.log(color);
//     const pixeles = document.querySelectorAll(".pixel");

//     pixeles.forEach(pixel => {
//         pixel.addEventListener("click",  () => {
//             pixel.style.backgroundColor = color;
//         });
//     });
// }

const colores = document.querySelectorAll(".color");

colores.forEach(colorObj => {
    colorObj.addEventListener("click", () => {
        var color = colorObj.style.backgroundColor;
        console.log(color);
        const pixeles = document.querySelectorAll(".pixel");
    
        pixeles.forEach( pixel => {
            pixel.addEventListener("click",  () => {
                pixel.style.backgroundColor = color;
            });
        });
    });
});
