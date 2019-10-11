function admin(){

  if(adminControl == true && created == false){
    console.log("creating bar")
    // barAdded = true;
    admin_bar = createDiv('מערכת ניהול')
  //  admin_bar.class('admin_bar')
    admin_bar.style('position','absolute')
    admin_bar.style('width','10%')
    admin_bar.style('height','83%')
    admin_bar.style('top','34.5%')
    admin_bar.style('left','90%')
    admin_bar.style('background-color','rgb(20,20,20)')
    admin_bar.style('opacity','0.7')


var h_pos= ['37%','47%','57%','67%','77%']
 addCourse = createButton('הוסף קורס');
 addCourse.class('admin_bar');
  addCourse.mousePressed(adding)
 addCourse.class('admin_bar')
var timeTable = createButton('לוחות זמנים');
 timeTable.class('admin_bar')
 var uploads = createButton('העלאת קבצים');
  uploads.class('admin_bar')

 var analitcs = createButton('דוחות');
  analitcs.class('admin_bar')
  analitcs.mouseClicked(analyze)
  var addAdmin = createButton('הוסף מנהל');
   addAdmin.class('admin_bar')
addAdmin.mouseClicked(mangeAdmin)



 but = selectAll('.admin_bar')
console.log(but)
for(let i = 0; i< but.length;i++){
  but[i].style('position','absoulte');
  but[i].style('background-color','black');
  but[i].style('width','7%');
  but[i].style('height','7%');
  but[i].style('border-width','0px');

  but[i].style('left','91.5%');
  but[i].style('color','orange');
but[i].style('top',h_pos[i]);
but[i].mouseOver(react)
but[i].mouseOut(base)
}

function react(){
for(let i = 0; i<but.length;i++){
  this.style('-webkit-transition','0.2s')
  this.style('border-width','1px');
  this.style('border-color','orange')
  this.style('height','8%');
}
}


function base(){
for(let i = 0; i<but.length;i++){
  this.style('-webkit-transition','0.3s')
    this.style('border-width','0px');
  //this.style('width','7%');
  this.style('height','7%');
}
}

function analyze(){
  barPose =3;
  console.log(barPose);
  }



function adding(){
  barAdded = true;
  barPose = 1;
  console.log(barPose)
  var course_name = createInput('שם הקורס')
  course_name.class('createCourse')
  var c_data = createElement('textArea','פרטים')
  c_data.class('createCourse')
  var send = createButton('צור קורס')
  send.class('createCourse')

  var file = createDiv('גרור תמונה')
  file.style('-webkit-transition','1.8s')
  file.style('position','absoulte')
  file.style('width','30%')
  file.style('height','40%')
  file.style('left','5%')
  file.style('top','44%')
  file.style('background-color','rgba(0,0,0,0.6)')
  file.style('color','orange')
  file.style('font-size','30px')
  file.style('text-align','center')
  file.style('line-height','7.2em')
  file.style('box-shadow','1px 1px 5px 1px blue')
  file.drop(gotFile);

  function gotFile(data){
    console.log(data)
    if (data.type === 'image') {
    // Create an image DOM element but don't show it
    const img = createImg(data.data);
    img.style('-webkit-transition','1.8s')
    img.style('position','absoulte')
    img.style('width','30%')
    img.style('height','40%')
    img.style('left','5%')
    img.style('top','45%')

  var info = [
    data.name+'  :שם'+ '<br />',
    data.size+'  :גודל'+ '<br />',
    data.subtype+'  :סוג'+ '<br />',
  ].join('\n');
var pImage = createP(info)
pImage.style('-webkit-transition','1.8s')
pImage.style('position','absoulte')
pImage.style('width','30%')
pImage.style('height','40%')
pImage.style('left','5%')
pImage.style('top','87%')
pImage.style('text-align','right')
pImage.style('color','blue')

    // Draw the image onto the canvas
    //image(img, 0, 0, width, height);
  } else {
    console.log('Not an image file!');
  }

  }



var coursePos = ['42%','54%','78%']
 courseClass = selectAll('.createCourse')

for(let i = 0; i< courseClass.length;i++){
courseClass[i].style('-webkit-transition','1.8s')
courseClass[i].style('position','absoulte')
courseClass[i].style('width','20%')
courseClass[i].style('height','7%')
courseClass[i].style('left','60%')
courseClass[i].style('top',coursePos[i])
courseClass[i].style('background-color','rgba(0,0,0,0.4)')
courseClass[i].style('color','orange')
courseClass[i].style('font-size','20px')
courseClass[i].style('text-align','right')
courseClass[i].style('border-radius','5px')
courseClass[i].style('border-color','gray')
courseClass[i].style('border-width','2px')
courseClass[i].style('padding','0px 5px')
//courseClass[i].style('opacity','0.7')

}

c_data.style('position','absoulte')
c_data.style('width','20%')
c_data.style('height','20%')
c_data.style('left','60%')

send.style('background-color','rgba(20,20,250,0.7)')
send.style('width','12%')
send.style('height','7%')
send.style('left','64%')
send.style('border-radius','5px')
send.style('text-align','center')
send.style('color','orange')
send.style('box-shadow','1px 1px 5px 1px black')


send.mouseOver(changeColor);
send.mouseOut(base);
send.mouseClicked(addTolist)

function changeColor(){
send.style('-webkit-transition','0.2s')
send.style('color','orange')
send.style('width','13%')
send.style('height','8%')
}
function base(){
  send.style('transition','0.2s')
send.style('color','orange')
send.style('width','12%')
send.style('height','7%')
}

function addTolist(){

let name = course_name.value();
let details = c_data.value();

console.log(name)
var cdata = {
  name: name,
  details: details
}

courses_list.push(cdata)
textSize(width/60);fill(0,0,255)
text("המערכת עודכנה",width/2,height-150);

setTimeout(func, 1000);
function func() {
    alert('system updated');
    text("המערכת עודכנה",width/2,height-150);

}

}
}// end of adding
    created = true;

}
}

function mangeAdmin(){
  if(ab == false){
  barPose = 4;
   divi = createDiv('נהל הרשאות')

  divi.style('width','60%');
  divi.style('height','60%');
  divi.style('background-color','rgba(20,20,60,0.4)')
  divi.style('opacity','0.95')
  divi.style('color','orange')
  divi.style('border-width','0px')
  divi.style('font-size','24px')
  divi.style('text-align','center')
  divi.style('padding','5px 5px')
  divi.style('position','absolute')
  divi.style('left','20%');
  divi.style('top','32%')


let na_name = createInput('שם')
na_name.class('cAdmin')
let na_mail = createInput('מייל')
na_mail.class('cAdmin')
let na_Rate = createInput('דירוג')
na_Rate.class('cAdmin')
let n = na_name.value();

 sfAdmin = createButton('חפש במאגר')
 sfAdmin.class('Abuttons')
 sendinfo = createButton('אשר מנהל');
 sendinfo.class('Abuttons')

aButtons = selectAll('.Abuttons')
let top=['75%','83.5%']

for(let i = 0; i< aButtons.length;i++){
   aButtons[i].style('-webkit-transition','1s')
   aButtons[i].style('position','absoulte')
   aButtons[i].style('left','63%')
   aButtons[i].style('background-image','linear-gradient(to right,rgb(50,50,200) ,rgb(50,50,255))')
   aButtons[i].style('color','orange')
   aButtons[i].style('border-width','1px')
   aButtons[i].style('border-radius','5px')
   aButtons[i].style('font-size','18px')
   aButtons[i].style('top',top[i])
   aButtons[i].style('width','15%')
   aButtons[i].style('height','6%')
   aButtons[i].mouseOver(changeColor);
   aButtons[i].mouseOut(base);
}

sfAdmin.mouseClicked(searchDataBase)
sendinfo.mouseClicked(newAdmin)



   //sendinfo.style('transform','rotateY(720deg)')
   function changeColor(){
   this.style('-webkit-transition','0.3s')
   this.style('border-width','2px')
   this.style('height','8%')

   }
   function base(){
   	this.style('transition','0.3s')
   this.style('color','orange')
   this.style('border-width','1px')
   this.style('height','6%')

   }



let topPose =['41%','52%','63%']
createAdmin = selectAll('.cAdmin')
for(let i = 0; i<createAdmin.length;i++ ){
createAdmin[i].style('position','absolute')
createAdmin[i].style('left','62%');
createAdmin[i].style('top',topPose[i])
createAdmin[i].style('width','15%');
createAdmin[i].style('height','7.5%');
createAdmin[i].style('background-color','rgba(20,20,20,0.7)')
createAdmin[i].style('opacity','0.95')
createAdmin[i].style('color','orange')
createAdmin[i].style('border-width','1px')
createAdmin[i].style('border-color','white')
createAdmin[i].style('font-size','20px')
createAdmin[i].style('text-align','right')
createAdmin[i].style('padding','0px 10px')
}

function searchDataBase(){
  n= na_name.value();
console.log(n)
for(let i =0; i< keys.length;i++){
if(names[i]== n){
  user = i;
  console.log(keys[i])
na = names[user];

console.log(ra);

   nData = createP('  :שם\n'+ names[user])
  nData.class('adminData')
   eData = createP(' :אימייל\n'+ email[user])
  eData.class('adminData')
   aData = createP('  גיל:\n' + health[user])
  aData.class('adminData')

  let aPose = ['37%','50%','63%']
   adminData = selectAll('.adminData')
  for(let i = 0; i<adminData.length;i++ ){
  adminData[i].style('position','absolute')
  adminData[i].style('left','25%');
  adminData[i].style('top',aPose[i])
  adminData[i].style('width','25%');
  adminData[i].style('height','7.5%');
  adminData[i].style('background-color','rgba(20,20,20,0.1)')
  adminData[i].style('opacity','0.95')
  adminData[i].style('color','blue')
  adminData[i].style('border-width','1px')
  adminData[i].style('border-color','white')
  adminData[i].style('font-size','20px')
  adminData[i].style('text-align','right')
  adminData[i].style('padding','2px 10px')
  }
 }
console.log(user)
}

}
function newAdmin(){
ra = na_Rate.value();
let data ={
  admin:true,
  rate: ra
}
let adress = database.ref('data/'+keys[user])
adress.update(data)
}


}ab = true;
}
