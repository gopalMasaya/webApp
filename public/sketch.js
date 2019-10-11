var auth;
var dataBase;
var ref;
var socket;
let name;
let prop;
let price;
let inputs;
var font = '"Comic Sans MS", cursive, sans-serif';

var menue;
var m_prop=["בית","   קורסים" ,"    על המקום    "," צור קשר"]
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
var page1 = false;
var page2 = false;
var page3 = false;
var barPose = 0;
var ana = false;
var gmode="line";//graph mode
var lgmode="line";

var names = new Array (1000);
var phone = new Array (1000);
var email = new Array (1000);
var pass = new Array (1000);
var health = new Array (1000)
var admin = new Array (1000);

var nameOfcours = new Array(1000);
var courseDis = new Array(1000);

for(let i = 0; i<1000;i++){
	admin[i]="";names[i]="";phone[i]="";
	email[i]="";pass[i]="";health[i]="";
	nameOfcours[i]="";courseDis[i]="";
}

let w = 100;
var addCourse;

var user_login;
var user_password;
var isIn = false;
var isAdmin = false;
var adminControl = false;
var userName="";
var admin_bar;
var created = false;
var loginOn = false;
var signinOn = false;
var b;
var courses_list;
var theUser;
var list=[];
var det =[];
var reg =[];
var classTime =[]
let c = false;
var picture;
var added = false;
var courseClass;
var barAdded = false;
var but;
var d;
var graphSize ='0%';
var home,courses,about,connection;



function preload(){
apkey = loadStrings("/assets/key.txt")
bg = loadImage('/assets/bg3.jpg')

}

function setup() {
canvas	= createCanvas(windowWidth, windowHeight+80);

 d = select('#cdiv');

 socket = io();
 socket.on('msg',message);

 function message(data){
  theUser = data.name;
adminControl = data.admin;
	console.log(data)
if(adminControl == true){
	activeBar = createButton('ניהול');
	activeBar.style('position','absoulte')
	activeBar.style('width','10%')
	activeBar.style('height','5%')
	activeBar.style('left','20%')
	activeBar.style('top','18%')
	activeBar.style('background-color','rgb(255,255,220)')
	activeBar.style('border-width','1px')
	activeBar.style('border-radius','20px')
	activeBar.style('font-size','1.2em')
	activeBar.mouseOver(changeColor)
	activeBar.mouseOut(base)
	activeBar.mouseClicked(activate)
}
function activate(){
	menuePos = 6;
	created = false;
}

	let name = createP(theUser+'    שלום')
	name.style('position','absolute')
	name.style('left','92%')
	name.style('top','5%')
	name.style('text-align','right')
	name.style('font-size','20px')
	name.style('color','yellow')


 }


var logo = createDiv('הלוגו שלכם')
logo.style('position','absolute')
logo.style('left','0%')
logo.style('top','0px')
logo.style('width','100%')
logo.style('height','17%')
logo.style('font-family',font)
logo.style('font-size','2.2em')
logo.style('color','yellow')
logo.style('text-align','center')
logo.style('line-height','100px')
//logo.style('z-index','-1')
logo.style('background-image','linear-gradient(to right,rgb(150,180,190) ,rgb(50,50,255))')


picture = createImg('/assets/bg6.jpg')
picture.style('position','absolute')
picture.style('left','0px')
picture.style('top','0px')
picture.style('width','120px')
picture.style('height','88px')
picture.style('z-index','1')


loginB = createButton('כניסה')
loginB.class('pipe')
sinupB = createButton('הרשמה')
sinupB.class('pipe')
pipPosition=['1.2%','9%']
 b = selectAll('.pipe')
for(let i = 0;i< b.length;i++){
b[i].position(10+(width/12*i),110);
b[i].style('left',pipPosition[i])
b[i].style('width','7%');
b[i].style('height','10%');
b[i].style('background-image','linear-gradient(to right,rgb(50,50,150) ,rgb(50,50,255))')
b[i].style('color','yellow')
b[i].style('border-width','1px')
b[i].style('border-radius','15px')
b[i].style('font-size','1.1em')
b[i].mouseOver(bcolor);
b[i].mouseOut(bout);
}


loginB.mouseClicked(login);
sinupB.mouseClicked(signin);



let mpos =['85%','59%','46%','33%']
//home,courses,about,connection;
home = createButton('בית')
home.class('menue')
courses = select('#courses')
var bb = select('#1')
bb.mouseClicked(course);

function course(){
	menuePos =2;
}

console.log(bc)
//courses.mouseOver(changeColor)
//courses.class('menue')
about = createButton('עלינו')
about.class('menue')
connection = createButton('צור קשר')
connection.class('menue')
menue = selectAll('.menue')



for(let i= 0; i< m_prop.length-1;i++){

	//menue[i] = createButton(m_prop[i]);
	menue[i].style('position','absolute')
	menue[i].style('left',mpos[i]);
	menue[i].style('top','18%')
	menue[i].style('width','12%');
	menue[i].style('height','6%');
	menue[i].style('background-color','rgb(255,255,220)')
	menue[i].style('border-width','0px')
	menue[i].style('font-size','1.2em')
//	menue[i].style('box-shadow','2px 2px 1px #888888')
	menue[i].mouseOver(changeColor);
	menue[i].mouseOut(base);
  menue[i].mouseClicked(updateP)
}
function updateP(){
	console.log(this)
//menuePos = (width - this.left)/140-1;
if(this.left == 85){menuePos = 1;}
if(this.left == 72){menuePos = 2;}
if(this.left == 59){menuePos = 3;}
if(this.left == 46){menuePos = 4;}
if(this.left == 33){menuePos = 5;}

console.log(menuePos)

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

		var search = data.val();
			 keys = Object.keys(search);

				in_length= keys.length;
				console.log(in_length)
				for(let i = 0 ; i < keys.length;i++){

					 k = keys[i];
					names[i] = search[k].name;
					phone[i] = search[k].phone;
					email[i] = search[k].email;
					pass[i]= search[k].password;
					admin[i]= search[k].admin;
					health[i]= search[k].pass;


			}
console.log(admin[0])
		}

		function errData(error){
		console.log(error);
		}


}

function draw() {

	background(255,255,220)
	textAlign(CENTER)
//image(bg,0,180,width,620)


 loginB.mouseClicked(login);
 sinupB.mouseClicked(signin);

if(lpos != menuePos){lpos = menuePos;clear();w=100
console.log(menuePos)
}
if(menuePos == 1){
	image(bg,0,180,width,620)

	if(w < width/2){w+=6;}
	fill(20,20,20,100);
	rectMode(CENTER)
rect(width/2,height*0.57,w,height*0.5,10)
fill(217,180,20);textSize(60);textAlign(CENTER)
text("some Text",width/2,height*0.42)
}
if(menuePos == 3){image(bg,0,180,width,620)}
//if(menuePos == 4){image(bg,0,180,width,620)}
if(menuePos == 4){
	image(bg,0,180,width,620)
	fill(20,20,20,100);
		if(w < width/2){w+=10;}
	rectMode(CENTER)
	rect(width/2,height*0.57,w,height*0.5,10)
	fill(217,180,20);textSize(60);textAlign(CENTER)
	text("צור קשר",width/2,height*0.42)
}

//==== courses commanad========
if(menuePos == 2){
	if(added == false){
page2 = true;//c=false;
page1();
image(bg,0,180,width,670);

	c= true;
}else if(added == true){image(bg,0,180,width,670);}
}else{c=false}

//===============================
//window.location.pathname = '/info'

if(menuePos !=2 && added == true){
//console.log("remove")
for(let i = 0; i< courseClass.length;i++){
courseClass[i].remove();
}
added = false
}

if(menuePos != 2 && page2 == true){

	for(let i = 0; i< 4; i++){
	classTime[i].remove();
	det[i].remove();
	list[i].remove();
	reg[i].remove();
}
page2 = false;
}



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
	text(" <<  " + m_prop[menuePos-1],width-40,170)

}

  if(adminControl == true && menuePos == 6){
		//created = false;
			image(bg,0,180,width,620)
		 admin();

	 } else if(barAdded == true && menuePos != 6){
		 	console.log("remove")
		for(let i = 0; i< but.length;i++){
			but[i].remove();
		}
		if(courseClass != undefined){
			for(let i = 0; i< courseClass.length;i++){
				courseClass[i].remove();
			}
		}
		admin_bar.remove();
		created =false;
		barAdded = false;
 }
if(menuePos != 6){barPose = 0;}

if(menuePos == 6){
window.location.pathname = '/admin'
}

}

function mousePressed(){

if(loginOn == true){
	var hideMe = document.getElementById('log');

	document.onclick = function(e){
	//	console.log("login")
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
