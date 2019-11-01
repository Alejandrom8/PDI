function escalaGrises(rgb) {
    const red = rgb[0];
    const green = rgb[1];
    const blue = rgb[2];

    const media = Math.floor((red + green + blue) / 3)
    const nuevoColor = [media, media, media];
    return nuevoColor;
}

function allGray() {
    const newMatrix = [];
    const matrix = getGrid();
    console.log(matrix);
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            row.push(escalaGrises(matrix[i][j]));
        }
        newMatrix.push(row);
    }
    return newMatrix;
}