
function login(){
loginOn = true;
  login_container = createDiv('')
  login_container.addClass('small');
  login_container.style('-webkit-transition','1.5s')
  login_container.style('transform','rotateY(720deg)')
  login_container.style('position','absoulte')
  login_container.style('background-color','blue')
  login_container.style('opacity','0.6')
  login_container.style('left','42%')
  login_container.style('top','30%')
  login_container.style('width','25%')
  login_container.style('height','55%')

login_container.id('log')


  user_login = createInput(' אימייל')
  user_password = createInput('סיסמא','password');
  loginData = selectAll('input');
  user_login.class('small');
  user_password.class('small');
   sendreq = createButton('כניסה')
   sendreq.class('small');


   sendreq.style('position','absoulte')
   sendreq.style('background-image','linear-gradient(to right,rgb(50,150,220) ,rgb(50,150,255))')
   sendreq.style('color','yellow')
   sendreq.style('border-width','1px')
   sendreq.style('border-radius','15px')
   sendreq.style('font-size','18px')
   sendreq.style('left','49%')
   sendreq.style('top','70%')
   sendreq.style('width','10%')
   sendreq.style('height','6%')
   sendreq.style('transform','rotateY(720deg)')
   sendreq.style('-webkit-transition','3s')




   sendreq.mouseOver(whenover);
  sendreq.mouseOut(whenout);
sendreq.mouseClicked(enter)

function whenover(){
	this.style('-webkit-transition','0.3s')
	this.style('color','yellow')
	this.style('border-color','rgb(95,65,65)')
	this.style('box-shadow','2px 2px 2px #888888')

}


function whenout(){
	this.style('transition','0.3s')
this.style('color','yellow')
this.style('border-width','0px')
this.style('box-shadow','0px 0px 0px #888888')
}

  user_login.position(width/2-(width/14),height/2-180)
  user_password.position(width/2-(width/14),height/2-80)

  user_login.style('left','46%')
  user_login.style('top','39%')
  user_password.style('left','46%')
  user_password.style('top','54%')


  for(let i = 0; i< loginData.length;i++){
  loginData[i].size(width/7,25)
  loginData[i].style('text-align','right')
  loginData[i].style('font-size','18px')
  loginData[i].style('color','blue')
  loginData[i].style('background-color','rgb(240,242,242)')
  loginData[i].style('padding','15px')
  loginData[i].style('border-radius','25px')
  loginData[i].style('border-width',' 1px')
  loginData[i].style('-webkit-transition','2s')
  loginData[i].style('transform','rotateY(720deg)')
  }
  rectMode(CENTER)
  fill(20,20,190);rect(width/2+15,height/2-60,250,350,8);

}
function enter(){
console.log(user_login.value())
    auth.signInWithEmailAndPassword(user_login.value(), user_password.value()).then((cred) => {
    console.log(keys.length)


    for(let i = 0; i< 2;i++){

    		if(user_login.value() == email[i] && user_password.value()== pass[i]){
          console.log(email[i])
       isIn = true;
      userName = names[i];
      isAdmin = admin[i];
    }
    	}
var toServer={
  name: userName,
  admin:isAdmin
}
      socket.emit('msg',toServer);
console.log("sending data")
if(isIn == false){console.log("no mach found!!")}


    });

    login_container.remove();
    sendreq.remove();
    user_password.remove();
    user_login.remove();
loginOn = false;
}
