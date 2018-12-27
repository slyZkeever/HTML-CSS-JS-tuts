/*$("li"); //grab an/all element

var prop = $("h1");

prop.css("color", "red"); //change css property

prop.css("background", "blue");

var CSSObj = {
    "color" : "White",
    "background" : "black",
    "border" : "5px solid red"
}

prop.css(CSSObj) //obj can also be passed


var listItems = $('li'); 

listItems.css("color", "blue"); //changing property of every element

listItems.eq(0).css("color", "red"); //changing property of perticular element

listItems.eq(-1).css("color", "orange"); // -1 = last item

$("h1").text("fuck off"); //change text. h1 is not saved

$("h1").html("<b> fuck off </b>"); //using "html" to add tag property.

$("input").eq(1).attr("type","checkbox") //change the type of input(submit to checkbox)
 
$("input").eq(0).val("NewValue"); //change value of input

$("h1").addClass("TurnBlue"); //add class(TurnBlue) properties to tag(case sensitive)

$("h1").removeClass("TurnBlue"); //remove class

$("h1").toggleClass("TurnBlue"); //toggle class 
*/