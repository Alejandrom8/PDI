const botonGrises = document.getElementById("grises");

botonGrises.addEventListener("click", function() {
    const gray = allConvertedTo(escalaGrises);
    makeDisplay(gray.length, gray[0].length, gray);
});

const botonNegativo = document.getElementById("negativo");

botonNegativo.addEventListener("click", function() {
    const neg = allConvertedTo(negativo);
    makeDisplay(neg.length, neg[0].length, neg);
});

const contrastInput = document.getElementById("contraste");

contrastInput.addEventListener("change", () => {
    const newView = allConvertedTo(adjustContrast, contrastInput.value);
    makeDisplay(newView.length, newView[0].length, newView);
});

const comp = document.getElementById("complementario");

comp.addEventListener("click", () => {
    const newView = allConvertedTo(complementario);
    makeDisplay(newView.length, newView[0].length, newView);
});