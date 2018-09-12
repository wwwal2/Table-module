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

function createButtons (tag, id, textContent, onclick) {
    let btn = document.createElement(tag);
	btn.id = id;
    btn.textContent = textContent;
    btn.onclick = onclick;
    return btn; 
};

function RenderButtons () {
    for(var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        container.appendChild(createButtons(btn.tag, btn.id, btn.innerText, btn.onclick))
    };
}

const buttons = [
    {
        tag: "button",
        innerText: "plusR",
        id: "1",
        onclick: plusRow
    },
    {
        tag: "button",
        innerText: "minusR",
        id: "2",
        onclick: minusRow
    },
    {
        tag: "button",
        innerText: "plusC",
        id: "3",
        onclick: plusColumn
    },
    {
        tag: "button",
        innerText: "minusC",
        id: "4",
        onclick: minusColumn
    }
];



let tableInput = {tr:4, th:4};

let textTable = makeTextTable(tableInput.tr, tableInput.th);

let container = document.createElement("table");
container.id = "wrapper";
container.align = "center";
document.body.appendChild(container);

renderTable(textTable);
RenderButtons();
