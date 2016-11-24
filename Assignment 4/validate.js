/*
Regular Expression for an Email = http://skillcrush.com/2012/09/24/regular-expressions/
Regular Expression for a Telephone = http://www.mirc.org/mishbox/reference/re.phonenumber.htm
Regular Expression for a Website = https://www.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html
*/
function validForm()
{
var error;
var eMail1,telephone,webSite;
email1=document.forms["formValid"]["email"].value;
telephone=document.forms["formValid"]["telephoneNumber"].value;
webSite=document.forms["formValid"]["webSiteAddress"].value;
//var reEmail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var reEmail=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
var reTelePhone=/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
var rewebSite=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
//var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
//if(email1=="" || email1==null)
/*if (!(email1=="" || email1==null || re.test(email1)))
{
    alert('Please enter a valid email address.');
    return false;
}
else
{
	alert("mail correct");
}*/

if(document.forms["formValid"]["name"].value==null || document.forms["formValid"]["name"].value =="" || 
	(!(isNaN(document.forms["formValid"]["name"].value))))
{
	alert("Check your Name.");
	error = "Check your Name.";
	//document.getElementById("demo").innerHTML = error;
	//continue;
	document.forms["formValid"]["name"].focus() ;
	return false;
}
else if (email1=="" || email1==null || !(reEmail.test(email1)))
{
    alert('Please enter a valid email address.');
    //return false;
}
//else if(validEmail(document.forms["formValid"]["email"].value))
//{
//	alert("HI");
//}
else if(document.forms["formValid"]["password"].value==null || document.forms["formValid"]["password"].value =="")
{
	alert("Check your Password.");
	error = error + "<li>Check your Password.</li>";
	//continue;
}
else if(document.forms["formValid"]["confirmPassword"].value==null ||
 document.forms["formValid"]["confirmPassword"].value =="")
{
	alert("Please Enter Confirm Password.");
	error = error + "<li>Check your Confirm Password.</li>";
	//continue;
}
else if(document.forms["formValid"]["password"].value != document.forms["formValid"]["confirmPassword"].value)
{
	alert("Password and Confirm Password doesn't Match.");
	error = error + "<li>Check your Confirm Password.</li>";
}
else if(telephone.length>0 && (!(reTelePhone.test(telephone))))
{
    alert('Please enter a valid phone number.');
	error = error + "<li>Check your Confirm Password.</li>";
}
else if(webSite.length>0 && (!(rewebSite.test(webSite))))
{
    alert('Please enter a Website Address.');
}
else
{
	alert("You have successfully Registered! & You will receive a confirmation email.");
	error = "Input is correct.";
	//return true;
}
	document.getElementById("err").innerHTML = error;

}