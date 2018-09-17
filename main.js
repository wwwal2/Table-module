// table creation block
function makeTextTable (rowsT, columnsT) {
    let columns = "";
    let result = "";

    for (let i=0; i<columnsT; i++) {  
         columns = columns + "<td></td>"
    };
    for (let i=0; i<rowsT; i++) {  
         result = result + "<tr>" + columns +"</tr>"
    };

    return result
};

const renderTable = (text) => {
    let table = document.createElement("table");
    table.innerHTML = text;
    table.id = "unstableElement";
    container.appendChild(table);
};

// table reforming block
const minusRow = () => {
    tableInput.tr = tableInput.tr -1;
    let refresh = makeTextTable(tableInput.tr, tableInput.td);
    container.removeChild(document.getElementById("unstableElement"));
    renderTable(refresh);
    if (tableInput.tr === 1) document.getElementById("Rminus").style.display = "none";
};

const plusRow = () => {
    tableInput.tr = tableInput.tr +1;
    let refresh = makeTextTable(tableInput.tr, tableInput.td);
    container.removeChild(document.getElementById("unstableElement"));
    renderTable(refresh);
    document.getElementById("Rminus").style.display = "block";
};

const minusColumn = () => {
    tableInput.td = tableInput.td -1;
    let refresh = makeTextTable(tableInput.tr, tableInput.td);
    container.removeChild(document.getElementById("unstableElement"));
    renderTable(refresh);
    if (tableInput.td === 1) document.getElementById("Cminus").style.display = "none";
};

const plusColumn = () => {
    tableInput.td = tableInput.td +1;
    let refresh = makeTextTable(tableInput.tr, tableInput.td);
    container.removeChild(document.getElementById("unstableElement"));
    renderTable(refresh);
    document.getElementById("Cminus").style.display = "block";
};

// buttons block
const createButtons = (tag, id, className, textContent, onclick) => {
    let btn = document.createElement(tag);
    btn.id = id;
    btn.className = className;
    btn.textContent = textContent;
    btn.onclick = onclick;
    return btn; 
};

const RenderButtons = () => {
    for(var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        shell.appendChild(createButtons(btn.tag, btn.id, btn.className, btn.textContent, btn.onclick))
    };
}

const buttons = [
    {
        tag: "button",
        id: "Rplus",
        className: "plus",
        textContent: "+",
        onclick: plusRow
    },
    {
        tag: "button",
        id: "Rminus",
        className: "minus",
        textContent: "-",
        onclick: minusRow
    },
    {
        tag: "button",
        id: "Cplus",
        className: "plus",
        textContent: "+",
        onclick: plusColumn
    },
    {
        tag: "button",
        id: "Cminus",
        className: "minus",
        textContent: "-",
        onclick: minusColumn
    }
];

// execution
let tableInput = {tr:4, td:4};

let textTable = makeTextTable(tableInput.tr, tableInput.td);

let shell = document.createElement("table");
shell.id = "shell";
shell.align = "center";
document.body.appendChild(shell);

let container = document.createElement("table");
container.id = "container";
container.align = "center";
shell.appendChild(container);

renderTable(textTable);
RenderButtons();

// float buttons code
let marginY = 56;
let marginX = 56;

const Rminus = document.getElementById("Rminus");
const Cminus = document.getElementById("Cminus");

container.onmousemove = (event) => {
    let positionY = Rminus.getBoundingClientRect().top - event.clientY;
    let positionX = Cminus.getBoundingClientRect().right - event.clientX;

    if (positionY > 5) {
        marginY = marginY + 54; 
    } else if (positionY < -60) {
        marginY = marginY - 54;
    };

    if (positionX > 60) {
        marginX = marginX +54;
    } else if (positionX < -5) {
        marginX = marginX - 54;
    };

    Rminus.style["margin-bottom"] = marginY + "px";
    Cminus.style["margin-right"] = marginX + "px";
}
