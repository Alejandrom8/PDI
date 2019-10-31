const display = document.getElementById("display")

function makeDisplay(rows, cols, matrix = null){
    let finalDisplay = "<table id='grid'>";
    for(let i = 0; i < rows; i++){
        finalDisplay += "<tr>"
        for(let j = 0; j < cols; j++){
            // const pixel = matrix[i][j];
            // finalDisplay += `<td class='pixel' style='background-color:rgb(${pixel.r}, ${pixel.v}, ${pixel.a});'></td>`;
            finalDisplay += "<td class='pixel'><td>";
        }
        finalDisplay += "</tr>";
    }

    display.innerHTML = finalDisplay;

    const pixeles = document.querySelectorAll(".pixel");

    pixeles.forEach(pixel => {
        pixel.addEventListener("click",  () => {
            pixel.style.backgroundColor = "yellow";
        });
    });
}

function getGrid(){
    const grid = document.getElementById("grid");
}



// [
//     [{r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}]]
//     [{r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}]]
//     [{r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}]]
//     [{r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}]]
// ]