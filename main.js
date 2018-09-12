function makeTextTable (rowsT, columnsT) {
    let columns = "";
    let result = "";

    for (i=0; i<columnsT; i++) {  
         columns = columns + "<th></th>"
    };
    for (i=0; i<rowsT; i++) {  
         result = result + "<tr>" + columns +"</tr>"
    };

    return result
};

function renderTable (text) {
    let table = document.createElement("table");
    table.innerHTML = text;
    table.id = "unstableElement";
    container.appendChild(table);
};

function minusRow () {
    tableInput.tr = tableInput.tr -1;
    let refresh = makeTextTable(tableInput.tr, tableInput.th);
    container.removeChild(document.getElementById("unstableElement"));
    renderTable(refresh);
};

function plusRow () {
     tableInput.tr = tableInput.tr +1;
     let refresh = makeTextTable(tableInput.tr, tableInput.th);
     container.removeChild(document.getElementById("unstableElement"));
     renderTable(refresh);
 };

 function minusColumn () {
    tableInput.th = tableInput.th -1;
    let refresh = makeTextTable(tableInput.tr, tableInput.th);
    container.removeChild(document.getElementById("unstableElement"));
    renderTable(refresh);
};

function plusColumn () {
    tableInput.th = tableInput.th +1;
    let refresh = makeTextTable(tableInput.tr, tableInput.th);
    container.removeChild(document.getElementById("unstableElement"));
    renderTable(refresh);
};

let tableInput = {tr:3, th:4};

let textTable = makeTextTable(tableInput.tr, tableInput.th);

let container = document.createElement("table");
container.id = "wrapper";
container.align = "center";
document.body.appendChild(container);

let btnPlusR = document.createElement("button");
btnPlusR.innerText = "plusR";
container.appendChild(btnPlusR);
btnPlusR.onclick = plusRow;

let btnMinusR = document.createElement("button");
btnMinusR.innerText = "minusR";
container.appendChild(btnMinusR);
btnMinusR.onclick = minusRow;

let btnPlusC = document.createElement("button");
btnPlusC.innerText = "plusC";
container.appendChild(btnPlusC);
btnPlusC.onclick = plusColumn;

let btnMinusC = document.createElement("button");
btnMinusC.innerText = "minusC";
container.appendChild(btnMinusC);
btnMinusC.onclick = minusColumn;


renderTable(textTable);
