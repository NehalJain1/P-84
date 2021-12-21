// Create a reference for the canvas
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var img_image;
var img_width = 600;
var img_height = 500;
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
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
		//write a code to check the type of key pressed
		aplhabetkey();
		document.getElementById("h5").innerHTML="You pressed alphabet key";
		console.log("alphabet key");
	}
	else if((keyPressed >=48 && keyPressed<=57))
	{
		//write a code to check the type of key pressed
		numberkey();
		document.getElementById("h5").innerHTML="You pressed number key";
		console.log("number key");
}
	else if((keyPressed >=37 && keyPressed<=40))
	{
		arrowkey();
		document.getElementById("h5").innerHTML="You pressed number key";
		console.log("number key");
	}
	else if((keyPressed >=17 && keyPressed<=18)|| (keyPressed ==27))
		{
		//write a code to check the type of key pressed
		specialkey();
		document.getElementById("h5").innerHTML="You pressed special key";
		console.log("special");
	}
	else
		{
		//write a code to check the type of key pressed
		otherkey();
		document.getElementById("h5").innerHTML="You pressed other key";
		console.log("special key");
	}
}


function aplhabetkey()
{
	//upload respective image with the message. 
img_image="Alpkey.png";
add();
}
function numberkey()
{
	img_image="numkey.png";
add();
}
function arrowkey()
{
	img_image="Arrkey.png";
add();
}
function specialkey()
{
	img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
