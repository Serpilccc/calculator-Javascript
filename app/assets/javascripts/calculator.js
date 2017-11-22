
var code = document.getElementById('but')


function screen(x)

{
	code.value+=x;

	if (x=='C')
	{
		code.value='';
	}
}



function answer()
{

	x=code.value;
	x=eval(x);
	code.value=x;

}


function power(y)

{
	x=code.value;
	x=Math.pow(x,y);
	code.value=x;
}


var add(a,b)
{var a, b, result;
result=a+b;
return result; 
}



var substract(a,b)
{var a, b, result;
result=a-b;
return result; 
}


var multiply(a,b)
{var a, b, result;
result=a*b;
return result; 
}


var divide(a,b)
{var a, b, result;
result=a/b;
return result; 
}
