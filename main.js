// Create a reference for the canvas
canavs = document.getElementById('myCanvas');
ctx = canavs.getContext("2d")
window.addEventListener("keydown" , my_keydown)

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
         {
			alphabetkey();
			document.getElementById("d1").innerHTML="you pressed the alphapet key ";
			console.log("alphabet key")
		 }
		 else if (keyPressed >=48 && keyPressed<=57)
		 {
			numberkey();
			document.getElementById("d1").innerHTML="You pressed number key";
			console.log("number key")
		}
		else if (keyPressed ==17 || keyPressed==18)
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed special and arrow key";
			console.log("special key")
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("other key")
	}
	

}

function alphabetkey()
{
	img_image="alpkey.png"
	add();

}
function numberkey()
{
	img_image="numkey.png"
	add();

}
function arrowkey()
{
	img_image="arrkey.png"
	add();

}
function specialkey()
{
	img_image="spkey.png"
	add();

}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
