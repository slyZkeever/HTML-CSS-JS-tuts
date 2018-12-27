/*$("h1").click(function()
{
    //console.log("clicked!");
    $(this).text("he");
});

$("li").click(function()
{
    console.log("an li was clicked!");
});
*/

/*$("input").eq(0).keypress(function()
{
    $("h1").toggleClass("TurnBlue");
})*/

/*$("input").eq(0).keypress(function(event)
{
    //console.log(event);
    if(event.which === 13)
    {
        $("h1").toggleClass("TurnRed");
    }
})
*/

/*$("h1").on("mouseenter",function()
{
    //console.log("clicked!");
    $(this).toggleClass("TurnRed");
});
*/

$("input").eq(1).on('click',function()
{
    //console.log("clicked!");
    $(".container").fadeOut( "slow" );
});