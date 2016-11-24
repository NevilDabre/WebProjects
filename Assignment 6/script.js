function setCookie() 
{
	document.cookie = "sessionID=314159";
}
function changeText() 
{
	inputVar = document.getElementById("uEntry").value;
	inputVar = RemoveBad(inputVar);
	if(inputVar=="" || inputVar== null ) 
	{
		alert("Hi, Please Enter Your Name");
		return false;
	}
	else
	{
	document.write("<h1>Hello " + inputVar + "!</h1><p id=\"enjoyPara2\">Please enjoy the Web site!</p>");
	return true;
	//document.write("<p>Your " + document.cookie + " and its an example of injection script</p>");
	}
}
function RemoveBad(strTemp) { 
    strTemp = strTemp.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,""); 
    return strTemp;
} 
function stopRKey(evt) 
{
	var evt = (evt) ? evt : ((event) ? event : null);
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
	if ((evt.keyCode == 13) && (node.type=="text")) 
		{
			return false;
		}
}
document.onkeypress = stopRKey;