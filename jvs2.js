/*function add(arg1, arg2) //function declaration
{
    return arg1+arg2;
    console.log(arg1+arg2);
}

console.log(add(1, 2));*/

/*var name;
function GetName(name = "frank") //default val of name
{
    name = "you";
    return name;  
}*/

/*function SleepIn(weekday, vacation)
{
    if(vacation || !weekday)
    {
        return true;
    }
    else 
        return false;
}*/

/*function MonkeyTrouble(aSmile, bSmile) 
{
    if(aSmile && bSmile || !aSmile && !bSmile)
        return true;
        
    else 
        return false;
}*/

/*function StringTimes(str = " ", n) 
{
    var temp = "";
    for(var i = 0; i<n; i++)
        temp += str;   
    return temp;
}*/

/*function LuckySum(a, b, c) 
{
    if(a >= 13)
        return 0;
    
    else if(b >= 13)
        return a;

    else if(c >= 13)
        return a+b;

    else 
        return a+b+c;
}*/

/*function MakeBrick(small, big, goal) 
{
    var temp = small+(5*big);
    if(temp < goal)
        return false;
    else
        return true;    
}*/

/*var array = [1, true, "false"]; //array declaration.
//unlike strings, array is mutable 

for(temp of array){} //range based loop in js


function PassArr(arr) //passing array to a function
{
   console.log(arr); 
}

PassArr(array); 

//array.forEach(SomeFunctionName) //pass values of array into that function*/

/*var array = [];
var ch = prompt("start app y/n");

while(ch == 'y')
{
    var cmd = prompt("action?");
    switch (cmd) 
    {
        case "add":
            console.log("add");
            var name = prompt("name to add: ");
            array.push(name);
            break;

        case "remove":
            var name = prompt("name to remove: ");
            var index = array.findIndex(name);
            if (index - 1)
                array.splice(index, 1);  //removes the 1 value at "index"
            break;

        case "display":
            for (temp of array)
                alert(temp);
            break;

        default: quit:
            alert("wrong input");
            exit(0);
    }
}*/

/*var CarObject = { company_key1: "toyota", year_key2: 1997, model_key3: "supra"}; //object creation

console.log(CarObject["company"]); //data access

var MultiObj = {a: "str", b: [1, 2, 3], c: {inside:['a', 'b']}};

console.log(MultiObj["c"]["inside"][1]);

MultiObj["a"] = "string";

console.dir[MultiObj]; //same as console.log() for multiple browser

for(temp in MultiObj)
{ console.log(MultiObj[temp])}; //access elements of object
*/

/*var Obj = 
{
    value: 5,

    get: function()
    {
        return this.value ;
    }

    // setter: function (value) 
    // {
    //     this.value = value;
    // }
};

console.log(Obj.func());
*/

/*var employee = 
{ 
    name: "john smith", 
    job: "programmer",
    age: 31,

    func: function()
    {
        //return this.name.length;
        //alert( "name is " + this.name + ", age is " + this.age + ", job is " + this.job + ".");
        return this.name.split(" ")[1]; //split the string on " " and get 2nd element of returned array
    }

};

console.log(employee.func());*/