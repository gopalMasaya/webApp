function signin(){
  console.log("dhaaa")
image(bg,0,100,width,620)
signinOn = true;
   holder= createDiv('')
   holder.id('signin')
  holder.style('-webkit-transition','1.5s')
  holder.style('height','65%')
  holder.style('width','30%')
  holder.style('position','relative')
  holder.style('left','40%')
  holder.style('top','28%')
  holder.style('opacity','0.5')
  holder.style('background-color','rgb(90,10,10)')
  holder.style('transform','rotateY(720deg)')

console.log(holder.left);
  // holder.style('animation-name','spin')
  // holder.style('animation-duration','3000ms')
  // holder.style('animation-iteration-count','infinite')
  // holder.style('animation-timing-function','linear')
  //
  //
  // @keyframes spin {
	// 		from {
	// 				transform:rotate(0deg);
	// 		}
	// 		to {
	// 				transform:rotate(360deg);
	// 		}
	// }
  //


   header = createP('הרשמה')
   header.style('font-family',font)
   header.style('-webkit-transition','2s')
  header.style('background-color','black')
  header.style('opacity','0.8')
  header.style('color','yellow')
  header.style('font-size','30px')
  header.style('text-align','center')
  header.style('line-height','7%')
  header.style('position','absoulte')
  header.style('left','40%')
  header.style('top','13%')
  header.style('height','3.6%')
  header.style('width','30%')
  header.style('padding','20px 0px')
  header.style('transform','rotateY(720deg)')

    Name = createInput('שם');
  	Phone = createInput('טלפון');
  	Email = createInput('אימייל')
  	Password = createInput('סיסמא')

signin_prop = selectAll('input')
let h =['32%','42%','52%','62%','72%']
for(let i = 0; i< signin_prop.length;i++){
signin_prop[i].style('-webkit-transition','2s')
signin_prop[i].style('font-family',font)
signin_prop[i].style('position','absoulte')
signin_prop[i].style('left','47%')
signin_prop[i].style('top',h[i])
signin_prop[i].style('transform','rotateY(720deg)')
signin_prop[i].style('width','16%')
signin_prop[i].style('height','6%')
signin_prop[i].style('text-align','right')
signin_prop[i].style('font-size','20px')
signin_prop[i].style('padding','2px  5px')
signin_prop[i].style('opacity','0.7')
signin_prop[i].style('background-color','rgb(45,45,45)')
signin_prop[i].style('color','yellow')
signin_prop[i].style('border-radius','5px')
}
signinButton = createButton('שלח')
signinButton.id('Sbutton')
signinButton.style('transform','rotateY(720deg)')
signinButton.style('-webkit-transition','3s')
signinButton.style('position','absoulte');
signinButton.style('left','48%');
signinButton.style('top','77%');
signinButton.style('width','15%');
signinButton.style('height','6%');
signinButton.style('background-image','linear-gradient(to right,rgb(50,50,150) ,rgb(50,50,255))')
signinButton.style('color','yellow')
signinButton.style('border-width','1px')
signinButton.style('border-radius','15px')
signinButton.style('font-size','18px')
signinButton.mouseOver(bcolor);
signinButton.mouseOut(bout);
signinButton.mouseClicked(sendData);

console.log(holder.left);
}
function bcolor(){
	this.style('-webkit-transition','0.3s')
	this.style('color','yellow')
	this.style('border-color','rgb(95,65,65)')
	this.style('box-shadow','10px 10px 8px #888888')

}


function bout(){
	this.style('transition','0.3s')
this.style('color','yellow')
this.style('border-width','0px')
this.style('box-shadow','0px 0px 0px #888888')
}
function sendData(){
let p = Password.value();
let n = Name.value();
let e = Email.value()
let ph = Phone.value();

let data = {
  name: n,
  email: e,
  phone: ph,
  password: p,
  admin: false
}

console.log(data)

auth.createUserWithEmailAndPassword(e, p).then(cred => {
      //  console.log(cred.user);
 auth.signInWithEmailAndPassword(e, p).then((cred) => {
   ref.push(data)
    console.log("data sent!!!")
    firebase.auth().sendSignInLinkToEmail(e, data)
      .then(function() {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', e);
      })
      .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
      });


  });
});
for(let i = 0; i< signin_prop.length;i++){
signin_prop[i].remove();
}
signinButton.remove();
header.remove();
holder.remove();
textAlign(CENTER);textSize(22);
text("נרשמת בהצלחה \n פרטי המשתמש שלך נשלחו אל תיבת האימייל שלך",width/2,height/2)
signinOn = false;
}
