var auth;
var dataBase;
var ref;

let name;
let prop;
let price;
let inputs;
var font = '"Comic Sans MS", cursive, sans-serif';

var menue=[];
var m_prop=["","בית","   קורסים", "    הצהרת בריאות  ","    על המקום    "," צור קשר"]
var menuePos = 1;
var lpos = 1;
var bg;
var apkey;
var tokens=[];
var product = new Array(1000);
var loginB;
var sinupB;
var Name,Phone,Email,Password;
var holder,header;
var signin_prop;
var signinButton;
var canvas;
var user_login,user_password,loginData,sendreq,login_container;

var names = new Array (1000);
var phone = new Array (1000);
var email = new Array (1000);
var pass = new Array (1000);
var health = new Array (1000)
var admin = new Array (1000);

var addCourse;

var user_login;
var user_password;
var isIn = false;
var isAdmin = false;
var userName="";
var admin_bar;
var created = false;
var loginOn = false;
var signinOn = false;
var b;
var courses_list;


function preload(){
	apkey = loadStrings("/assets/key.txt")

bg = loadImage('/assets/bg3.jpg')

}

function setup() {
canvas	= createCanvas(windowWidth, windowHeight+50);

var logo = createDiv('הלוגו שלכם')
logo.style('position','absolute')
logo.style('left','0px')
logo.style('top','0px')
logo.style('width','100%')
logo.style('height','15%')
logo.style('font-family',font)
logo.style('font-size','40px')
logo.style('color','yellow')
logo.style('text-align','center')
logo.style('line-height','100px')
logo.style('background-image','linear-gradient(to right,rgb(50,180,190) ,rgb(50,50,255))')



loginB = createButton('כניסה')
sinupB = createButton('הרשמה')

 b = selectAll('button')
for(let i = 0;i< b.length;i++){
b[i].position(10+(width/12*i),110);
b[i].size(80,30);
b[i].style('background-image','linear-gradient(to right,rgb(50,50,150) ,rgb(50,50,255))')
b[i].style('color','yellow')
b[i].style('border-width','1px')
b[i].style('border-radius','15px')
b[i].style('font-size','18px')
b[i].mouseOver(bcolor);
b[i].mouseOut(bout);
}


loginB.mouseClicked(login);
sinupB.mouseClicked(signin);


for(let i= 0; i< m_prop.length;i++){
	menue[i] = createButton(m_prop[i]);
	menue[i].position(width-20-(width/8)*i,110);
	menue[i].size(150,40);
	menue[i].style('background-color','rgb(255,255,220)')
	menue[i].style('border-width','0px')
	menue[i].style('font-size','20px')
//	menue[i].style('box-shadow','2px 2px 1px #888888')
	menue[i].mouseOver(changeColor);
	menue[i].mouseOut(base);
  menue[i].mouseClicked(updateP)
}
function updateP(){
menuePos = (width - this.x)/140;

menuePos = int(menuePos)
//console.log(menuePos)

}
function changeColor(){
this.style('-webkit-transition','0.5s')
this.style('color','blue')
this.style('border-color','rgb(95,65,65)')
this.style('box-shadow','10px 10px 8px #888888')

}
function base(){
	this.style('transition','0.5s')
this.style('color','black')
this.style('border-width','0px')
this.style('box-shadow','0px 0px 0px #888888')


}

	var firebaseConfig = {
			apiKey: apkey[0],
			authDomain:  apkey[1],
			databaseURL: "https://naturecare-2fdc0.firebaseio.com",
			projectId: "naturecare-2fdc0",
			storageBucket: "",
			messagingSenderId: "987971651716",
			appId: "1:987971651716:web:ff6d1b4c24f81be4"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);


	auth = firebase.auth();
	database = firebase.database();



	  //console.log(database)
	 	ref = database.ref('data')
    courses_list = database.ref('courses_list')
	 	ref.on('value',gotData,errData);

		function gotData(data){
		console.log(data)

		var search = data.val();
			 keys = Object.keys(search);

				in_length= keys.length;
				for(let i = 0 ; i < keys.length;i++){

					 k = keys[i];
					names[i] = search[k].name;
					phone[i] = search[k].phone;
					email[i] = search[k].email;
					pass[i]= search[k].password;
					admin[i]= search[k].admin;
					health[i]= search[k].pass;


			}

		}

		function errData(error){
		console.log(error);
		}


}

function draw() {
	background(255,255,220)
	textAlign(CENTER)



 loginB.mouseClicked(login);
 sinupB.mouseClicked(signin);




if(lpos != menuePos){clear();lpos = menuePos;}
if(menuePos == 1){image(bg,0,180,width,620)}
if(menuePos == 3){image(bg,0,180,width,620)}
if(menuePos == 4){image(bg,0,180,width,620)}
if(menuePos == 5){image(bg,0,180,width,620)}
if(menuePos == 2){image(bg,0,180,width,620);page1() }

if(menuePos != 1 && holder != undefined){
	for(let i = 0; i< signin_prop.length;i++){
	signin_prop[i].remove();
	}
	signinButton.remove();
	header.remove();
	holder.remove();
}




if(menuePos < 6){
textAlign(RIGHT)
	fill(0,0,150);textSize(18)
	text(" <<  " + m_prop[menuePos],width-40,170)

}
  if(isAdmin == true){admin();}


}

window.onresize = function() {

  var w = window.innerWidth;
  var h = window.innerHeight;
   displayWidth = w;
//	console.log(w)
  width = w;
  height = h;
	 resizeCanvas(w, h);

}
function mousePressed(){
//
// if(loginOn == true){
// 	login_container.remove();
// 	sendreq.remove();
// 	user_password.remove();
// 	user_login.remove();
// 	loginOn = false;
// }
if(loginOn == true){
	var hideMe = document.getElementById('log');

	document.onclick = function(e){
		if(e.target.id == 'log'){
			console.log("log out")
				login_container.remove();
				sendreq.remove();
				user_password.remove();
				user_login.remove();
				loginOn = false
			loginOn = false;
		}else {console.log(".")}
	}



}




if(signinOn == true){
var hideMe = document.getElementById('signin');

document.onclick = function(e){
							if(e.target.id == 'signin'){
								console.log("out")
								for(let i = 0; i< signin_prop.length;i++){
								signin_prop[i].remove();
								}
								signinButton.remove();
								header.remove();
								holder.remove();
								signinOn = false;
								console.log(signinOn)
							}else console.log("out")
					 };
}else{signinOn = false;}

}
