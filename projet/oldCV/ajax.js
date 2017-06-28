function getXhr()
{
   var request = false;
   try
   {
     request = new ActiveXObject('Msxml2.XMLHTTP');
   }
   catch (err2)
   {
   try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
   }
   catch (err3) {
      try {  request = new XMLHttpRequest();}
      catch (err1) { request = false;}
    }
   }
  return request;
}


function etude(){

	var Xhr = getXhr();

	Xhr.onreadystatechange = function() 
	{
		if (Xhr.readyState == 4 && Xhr.status == 200) 
		{ 
			$("#ecran").hide(500);
			setTimeout(function(){
									$("#ecran").html(Xhr.responseText).show();
								},600);
		}
	}

	Xhr.open("POST", "./etude.php", true);
	Xhr.send(null);	
}

function experience(){

  var Xhr = getXhr();

  Xhr.onreadystatechange = function() 
  {
    if (Xhr.readyState == 4 && Xhr.status == 200) 
    { 
      $("#ecran").hide(500);
      setTimeout(function(){
                  $("#ecran").html(Xhr.responseText).show();
                },600);
    }
  }

  Xhr.open("POST", "./experience.php", true);
  Xhr.send(null); 
}

function competence(){

  var Xhr = getXhr();

  Xhr.onreadystatechange = function() 
  {
    if (Xhr.readyState == 4 && Xhr.status == 200) 
    { 
      $("#ecran").hide(500);
      setTimeout(function(){
                  $("#ecran").html(Xhr.responseText).show();
                },600);
    }
  }

  Xhr.open("POST", "./competence.php", true);
  Xhr.send(null); 
}

function portfolio(){

  var Xhr = getXhr();

  Xhr.onreadystatechange = function() 
  {
    if (Xhr.readyState == 4 && Xhr.status == 200) 
    { 
      $("#ecran").hide(500);
      setTimeout(function(){
                  $("#ecran").html(Xhr.responseText).show();
                },600);
    }
  }

  Xhr.open("POST", "./portfolio.php", true);
  Xhr.send(null); 
}