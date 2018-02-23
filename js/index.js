function openSlideMenu(){
      document.getElementById('side-menu').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
}

function openWritePost(){
	  document.getElementById("textpost").rows = "10";
	  document.getElementById('writepost').style.height='390px';
	  document.getElementById('closepost').style.visibility='visible';
	  document.getElementById('blackline').style.visibility='visible';
	  document.getElementById('fbicon').style.visibility='visible';
	  document.getElementById('twiticon').style.visibility='visible';
	  document.getElementById('facecheck').style.visibility='visible';
	  document.getElementById('twitcheck').style.visibility='visible';
	  document.getElementById('sharebt').style.visibility='visible';
	  document.getElementById('shpost').style.visibility='visible';
}

function closeWritePost(){
	  document.getElementById("textpost").rows = "2";
	  document.getElementById('writepost').style.height='110px';
	  document.getElementById('closepost').style.visibility='hidden';
	  document.getElementById('blackline').style.visibility='hidden';
	  document.getElementById('fbicon').style.visibility='hidden';
	  document.getElementById('twiticon').style.visibility='hidden';
	  document.getElementById('facecheck').style.visibility='hidden';
	  document.getElementById('twitcheck').style.visibility='hidden';
	  document.getElementById('sharebt').style.visibility='hidden';
	  document.getElementById('shpost').style.visibility='hidden';
}