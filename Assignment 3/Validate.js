// JavaScript Document
function ValidForm()
{
	var fanme,lname, address,radios,count="";
	fname=document.forms["registration"]["fname"].value;
	lname=document.forms["registration"]["lname"].value;
	address=document.forms["registration"]["address"].value;
	var genders = document.getElementsByName("gender");
	var sports = document.getElementsByName("sports[]");
	//var locations = document.getElementsByName("location");
	var e = document.getElementById("location");
 	var strUser = e.options[e.selectedIndex].value;
	//var resultbool = false;
	if (fname == "" || fname == null )
	{
		alert("Enter First Name");
		return false;
	}
	if(lname == "" || lname == null)
	{
		alert("Enter Last Name");
		return false;
	}
	if(address=="" || address==null)
	{
		alert("Enter Address");
		return false;
	}
	if(genders[0].checked == false && genders[1].checked == false && genders[2].checked == false ) 
	{
		alert("Select Gender");
		return false;
	}

	
	var hasChecked = false;
	for (var i = 0; i < sports.length; i++)
	{
		if (sports[i].checked)
		{
			hasChecked = true;
			count = count + " , "+sports[i].value;	
		}
	}

	if (hasChecked == false)
	{
		alert("Please select sports at least one.");
		return false;
	}
	
	
	

	
	if(strUser == null ||strUser =="" )
	{
			alert("Select Location");
			return false;
	}
	
	alert(fname +" - "+lname +" - "+ address + count);
	return true;
		
}


/*
	/*	//radios=document.forms["registration"]["gender"].value;
	//document.forms["formValid"]["email"].value;
	var i,value1;
	var len=2;

	for (i = 0; i < len; i++) 
	{
			if ( document.registration.gender[i].checked ) 
			{
			value1 = document.registration.gender[i].value;
			alert("Value = " + value1);
			break;
			}

	}

function atLeastOneRadio() {
    return ($('input[type=radio]:checked').size() > 0);
}

var radios = document.getElementsByTagName('input');
var value;
for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
        value = radios[i].value;       
    }
}
*/