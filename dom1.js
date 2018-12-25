/*var MyHeader = document.querySelector("h1");

MyHeader.style.color = "Yellow";

function GetRandomColor()
{
    var ColBack = "0123456789ABCDEF";
    var Color = "#";
    
    for(var i = 0; i<6; i++)
    {
        Color += ColBack[Math.floor(Math.random()*16)]
    }

    return Color;
}

function GenColor()
{
    colorInput = GetRandomColor();
    MyHeader.style.color = colorInput;  
}

setInterval("GenColor()", 500);
*/

/*var p = document.querySelector("p"); 

p.textContent = "changed";

p.innerHTML = "<strong> I'm Strong </strong>";

var spec = document.querySelector(".myUL");

var specID = spec.querySelector("#pickme");

specID.getAttribute("");

specID.setAttribute(attribute, value);
*/

/*var HeadOne = document.querySelector("#one");

var HeadTwo = document.querySelector("#two");

var HeadThree = document.querySelector("#three");

HeadOne.addEventListener("mouseover", function()
{
    HeadOne.textContent = "mouse on";
    HeadOne.style.color = "red";
} 
)

HeadOne.addEventListener("mouseout", function () {
    HeadOne.textContent = "Hover over";
    HeadOne.style.color = "black";
}
)

HeadTwo.addEventListener("click", function () {
    HeadTwo.textContent = "clicked on";
    HeadTwo.style.color = "green";
}
)

HeadThree.addEventListener("dblclick", function () {
    HeadThree.textContent = "double clicked";
    HeadThree.style.color = "blue";
}
)*/

var res = document.querySelector("#butn");
var board = document.querySelectorAll("td");


function empty() {
    for (var i = 0; i < board.length; i++) {
        board[i].textContent = "";
    }
}


res.addEventListener("click", empty);

function OneClick(cell) {
    cell.textContent = "X";
}

function TwoClick(cell) {
    cell.textContent = "O";
}


var cell1 = document.querySelector("#a");
cell1.addEventListener("click", function () {
    if (cell1.textContent === "")
        cell1.textContent = "X";

    else if (cell1.textContent === "X")
        cell1.textContent = "O";
    else
        cell1.textContent = ""
});

var cell2 = document.querySelector("#b");
cell2.addEventListener("click", function () {
    if (cell2.textContent === "")
        cell2.textContent = "X";

    else if (cell2.textContent === "X")
        cell2.textContent = "O";
    else
        cell2.textContent = ""
});

var cell3 = document.querySelector("#c");
cell3.addEventListener("click", function () {
    if (cell3.textContent === "")
        cell3.textContent = "X";

    else if (cell3.textContent === "X")
        cell3.textContent = "O";
    else
        cell3.textContent = ""
});

var cell4 = document.querySelector("#d");
cell4.addEventListener("click", function () {
    if (cell4.textContent === "")
        cell4.textContent = "X";

    else if (cell4.textContent === "X")
        cell4.textContent = "O";
    else
        cell4.textContent = ""
});

var cell5 = document.querySelector("#e");
cell5.addEventListener("click", function () {
    if (cell5.textContent === "")
        cell5.textContent = "X";

    else if (cell5.textContent === "X")
        cell5.textContent = "O";
    else
        cell5.textContent = ""
});

var cell6 = document.querySelector("#f");
cell6.addEventListener("click", function () {
    if (cell6.textContent === "")
        cell6.textContent = "X";

    else if (cell6.textContent === "X")
        cell6.textContent = "O";
    else
        cell6.textContent = ""
});

var cell7 = document.querySelector("#g");
cell7.addEventListener("click", function () {
    if (cell7.textContent === "")
        cell7.textContent = "X";

    else if (cell7.textContent === "X")
        cell7.textContent = "O";
    else
        cell7.textContent = ""
});

var cell8 = document.querySelector("#h");
cell8.addEventListener("click", function () {
    if (cell8.textContent === "")
        cell8.textContent = "X";

    else if (cell8.textContent === "X")
        cell8.textContent = "O";
    else
        cell8.textContent = ""
});

var cell9 = document.querySelector("#i");
cell9.addEventListener("click", function () {
    if (cell9.textContent === "")
        cell9.textContent = "X";

    else if (cell9.textContent === "X")
        cell9.textContent = "O";
    else
        cell9.textContent = ""
});