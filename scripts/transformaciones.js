function escalaGrises(rgb) {
    const red = rgb[0];
    const green = rgb[1];
    const blue = rgb[2];

    const media = Math.floor((red + green + blue) / 3)
    const nuevoColor = [media, media, media];
    return nuevoColor;
}

function complementario(rgb) {
    const red = rgb[0];
    const green = rgb[1];
    const blue = rgb[2];

    rgb[0] = blue;
    rgb[1] = red;
    rgb[2] = green;

    return rgb;
}

function negativo(rgb) {
    const matrizIdentidadNegativa = [
        [-1, 0, 0],
        [0, -1, 0],
        [0, 0, -1]
    ];

    const withe = [255, 255, 255];

    let nuevoVector = [];

    matrizIdentidadNegativa.forEach(row => {
        const val1 = row[0] * rgb[0];
        const val2 = row[1] * rgb[1];
        const val3 = row[2] * rgb[2];
        const result = val1 + val2 + val3;
        nuevoVector.push(result);
    });

    nuevoVector = [nuevoVector[0] + withe[0], nuevoVector[1] + withe[1], nuevoVector[2], withe[2]];
    return nuevoVector;
}

function adjustContrast(rgb, adjuster) {
    let f = (259 * (adjuster + 255)) / (255 * (259 - adjuster));
    let matrixAdjuster = [
        [f, 0, 0],
        [0, f, 0],
        [0, 0, f]
    ];
    let v1 = [-128, -128, -128],
        v2 = [128, 128, 128];
    //[r,g,b] = v1 + T*rgb + v2
    let nuevoVector = [];
    matrixAdjuster.forEach(row => {
        const val1 = row[0] * rgb[0];
        const val2 = row[1] * rgb[1];
        const val3 = row[2] * rgb[2];
        const result = val1 + val2 + val3;
        nuevoVector.push(Math.floor(result));
    });

    return nuevoVector;
}

function allConvertedTo(filter, optionalParameter = null) {
    const newMatrix = [];
    const matrix = getGrid();
    console.log(matrix);
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            let newValue;
            if (optionalParameter) {
                newValue = filter(matrix[i][j], optionalParameter)
            } else {
                newValue = filter(matrix[i][j])
            }
            row.push(newValue);
        }
        newMatrix.push(row);
    }
    return newMatrix;
}