const display = document.getElementById("display")

function makeDisplay(rows, cols){
    let finalDisplay = "<table id='grid'>";
    for(let i = 0; i < rows; i++){
        finalDisplay += "<tr>"
        for(let j = 0; j < cols; j++){
            finalDisplay += "<td class='pixel'></td>";
        }
        finalDisplay += "</tr>";
    }
    display.innerHTML = finalDisplay;
}