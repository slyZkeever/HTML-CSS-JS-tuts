var p1 = prompt("Player 1 name: ");

var p2 = prompt("Player 2 name: ");

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

$("table tr").click( function()
{
    console.log("clicked");
    $(this).toggleClass("RedCol");
});