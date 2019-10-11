
var auth;
var dataBase;
var ref;
var socket;
let name;
let prop;
let price;
let inputs;
var font = '"Comic Sans MS", cursive, sans-serif';

var createAdmin;
var menue=[];
var m_prop=["","בית","   קורסים", "    הצהרת בריאות  ","    על המקום    "," צור קשר"]
var menuePos = 6;
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
var l_barPos = 0;
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
var but, d;
var isGraph = false;
var item = '';
var ab = false;
var sendinfo;
var divi, sfAdmin, aButtons;
var adminData;
var user;
var na, ra;
var nData,eData,aData;




function preload(){
	apkey = loadStrings("/assets/key.txt")

bg = loadImage('/assets/bg3.jpg')

}

function setup() {
canvas	= createCanvas(windowWidth, windowHeight+80);

 d = select('#cdiv');
 d.style('position','absolute')
 d.style('left','17%')
 d.style('top','42%')
 d.style('width','0%')
 d.style('height','0%')
 d.style('background-color','rgba(20,20,200,0.4)')


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
	activeBar.style('left','29%')
	activeBar.style('top','22%')
	activeBar.style('background-color','rgb(255,255,220)')
	activeBar.style('border-width','0px')
	activeBar.style('font-size','20px')
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
logo.style('height','18%')
logo.style('font-family',font)
logo.style('font-size','40px')
logo.style('color','yellow')
logo.style('text-align','center')
logo.style('line-height','100px')
//logo.style('z-index','-1')
logo.style('background-image','linear-gradient(to right,rgb(50,180,190) ,rgb(50,50,255))')


picture = createImg('/assets/bg6.jpg')
picture.style('position','absolute')
picture.style('left','0px')
picture.style('top','0px')
picture.style('width','120px')
picture.style('height','93px')
picture.style('z-index','1')




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
					health[i]= search[k].age;


			}
console.log(admin[0])
		}

		function errData(error){
		console.log(error);
		}

created = false

console.log(adminControl)
}

function draw(){
background(255,255,220)
image(bg,0,180,width,600)
if(adminControl == true){
if(menuePos != 6){ window.location.pathname = '/'}

if(adminControl == true && menuePos == 6){

admin();
 }

if(l_barPos != barPose){console.log(barPose);l_barPos=barPose}

if(barPose == 3 && isGraph == false){
	d.style('width','65%')
  d.style('height','70%')

 	sel = createSelect();

		 sel.style('position','absolute')
		 sel.style('left','6%')
		 sel.style('top','47%')
		 sel.style('width','9%')
		 sel.style('height','6%')
		 sel.style('background-color','gray')
		 sel.style('color','orange')
   sel.option('choose style');
   sel.option('line');
   sel.option('bar');

   sel.changed(mySelectEvent);


 function mySelectEvent() {
    item = sel.value();
   isGraph = false;
	 console.log("graph")
 }


if(item == ''){item ='line'}
	var ctx = document.getElementById('myChart').getContext('2d');
	//d.style.top='85%'


	var myChart = new Chart(ctx, {
	    type: item,
	    data: {
				defaultFontColor: 'rgba(217,180,20,0.9)',
	        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	        datasets: [{
	            label: '# of Votes',
							fontcolor:'rgba(255,89,114,0.6)',
							fillColor : "rgba(255, 89, 114, 0.6)",
                strokeColor : "rgba(51, 51, 51, 1)",
	            data: [12, 19, 3, 5, 2, 3],
							fontcolor: 'orange',
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.3)',
	                'rgba(54, 162, 235, 0.3)',
	                'rgba(255, 206, 86, 0.3)',
	                'rgba(75, 192, 192, 0.3)',
	                'rgba(153, 102, 255, 0.3)',
	                'rgba(255, 159, 64, 0.3)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
				labels: {
							// This more specific font property overrides the global property
							defaultFontColor: 'rgba(217,180,20,0.9)'
					},
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }

	});
Chart.defaults.global.defaultFontColor = "#fff";

	isGraph = true;
}else if(barPose != 3 && isGraph == true){
	d.style('width','0%')
  d.style('height','0%')
	sel.remove()
	isGraph = false;


}

}
if(barPose != 1 && barAdded == true){
for(let i= 0; i< courseClass.length;i++){
	courseClass[i].remove();
}

}
// if(barPose == 4){
// 	fill(20,20,60,100);noStroke();rectMode(CORNER)
// 	rect(width*0.22,height*0.28,width*0.3,height*0.53)
// text(names[user],width*0.24,height*0.3)
// }
if(barPose == 4 && ab == false){
	mangeAdmin();

}else if(barPose != 4 && ab == true){

for(let i = 0; i < createAdmin.length;i++){
	createAdmin[i].remove();
}
// for(let i = 0; i < adminData.length;i++){
// 	adminData[i].remove();
// }
for(let i = 0; i < aButtons.length;i++){
	aButtons[i].remove();
}
	sendinfo.remove();
	divi.remove();
	ab = false;


}
}
