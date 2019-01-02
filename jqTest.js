//intro
var p1 = prompt("Player 1 name(blue): ");
var p1Col = "rgb(86, 151, 255)";

var p2 = prompt("Player 2 name(red): ");
var p2Col = "rgb(237, 45, 73)";

var GameOn = true;

//////////////////////////////////


//initilize
var Table = $("table tr");
var LstRow = 5; //starting from 0
var LstCol = 6;

function Reportwin(RowIdx, ColIdx)
{ 
    console.log("won!");
    console.log(RowNum + ", " + ColNum);
}

function SetColor(RowIdx, ColIdx, Color)
{
    return Table.$("tr").eq("RowIdx").find("td").eq("ColIdx").find("button").css("background-color", color);
}

function GetColor(RowIdx, ColIdx)
{
    return Table.$("tr").eq("RowIdx").find("td").eq("ColIdx").find("button").css("background-color");
}

function ChkButtom(ColIdx)
{
    var ChkColor;

    for(var row = LstRow; row > -1; row--)
    {
        ChkColor = returnGetColor(row, ColIdx);
        if(ChkColor === 'rgb(128, 128, 128)')
            return row;
    }
}

function ButtonColorMatch(one, two, three, four)
{
    return(one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}



////////////////////////////





$("h2").text("its Player 1's turn");

var RedCol = 
{
    "background-color": "red",
    "border": "0px"
}

var BlueCol = 
{
    "background-color" : "blue"
}

$("button").on("click", function()
{
    // $(this).css("background-color", "red");
    $(this).css("RedCol");
});