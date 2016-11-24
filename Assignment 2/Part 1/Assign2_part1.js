function changePara1()
{	
	document.getElementById("paraOriginal").innerHTML= "You have just modified paragraph using Javascript!";
}
function insertCurrentDate()
{
	document.getElementById("paraDate").innerHTML=Date();
}
function fromModified()
{
	document.getElementById("paraOriginal").innerHTML= "Welcome to Javascript Page" ;
}
//To change a paragraph style
function newParaStyle(y)
{
	document.getElementById(y).style.cssText = "color:red; font-size:30px; border:4px dotted white;padding:40px; background-color: green";

}

//To set default paragraph style
function oriParaStyle(x) 
{
	document.getElementById(x).style.cssText = "color:blue;border: 2px solid orange;padding: 20px; text-align: center; font-size : 30px; text-align: center;"
}