const display = document.getElementById("display")

function makeDisplay(rows, cols, matrix = null) {
    let finalDisplay = "<table id='grid'>";
    for (let i = 0; i < rows; i++) {
        finalDisplay += "<tr>"
        for (let j = 0; j < cols; j++) {
            if (matrix != null) {
                //ha metido una matriz
                const pixel = matrix[i][j];
                finalDisplay += `<td class='pixel' style='background-color:rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]});'></td>`;
            } else {
                finalDisplay += "<td class='pixel'></td>";
            }
        }
        finalDisplay += "</tr>";
    }

    display.innerHTML = finalDisplay;

    const pixeles = document.querySelectorAll(".pixel");

    pixeles.forEach(pixel => {
        pixel.addEventListener("click", () => {
            pixel.style.backgroundColor = "black";
        });
    });
}

function getGrid() {
    let matrix = [];
    const grid = document.getElementById("grid");
    const rows = grid.children[0].children;

    for (let i = 0; i < rows.length; i++) {
        let rowMatrix = []

        for (let j = 0; j < rows[i].children.length; j++) {

            const pixel = rows[i].children[j].style.backgroundColor;

            if (pixel != "") {
                const filtro1 = pixel.replace(/[a-z]*\(/, "");
                const filtro2 = filtro1.replace(/\)/, "");
                const filtro3 = filtro2.split(',');

                const filtro4 = filtro3.map(value => {
                    return parseInt(value);
                });

                rowMatrix.push(filtro4);
            } else {

                rowMatrix.push([255, 255, 255]);
            }
        }

        matrix.push(rowMatrix);
    }
    return matrix;
}




// [
//     [{r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}]]
//     [{r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}]]
//     [{r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}]]
//     [{r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}, {r: 40, v: 50, a: 200}]]
// ]