function admin(){


  if(isAdmin == true && created == false){
    console.log("creating bar")
    admin_bar = createDiv('מערכת ניהול')
    admin_bar.style('position','absolute')
    admin_bar.style('width','10%')
    admin_bar.style('height','72%')
    admin_bar.style('top','38%')
    admin_bar.style('left','80%')
    admin_bar.style('background-color','rgba(20,20,200,0.4)')
var h_pos= ['30%','37%','44%','51%']
 addCourse = createButton('הוסף קורס');
  addCourse.mousePressed(adding)
 addCourse.class('admin_bar')
var timeTable = createButton('לוחות זמנים');
 timeTable.class('admin_bar')

 var analitcs = createButton('דוחות');
  analitcs.class('admin_bar')
  var addAdmin = createButton('הוסף מנהל');
   addAdmin.class('admin_bar')


var but = selectAll('.admin_bar')

for(let i = 0; i< but.length;i++){
  but[i].style('position','absoulte');
  but[i].style('background-color','black');
  but[i].style('width','7%');
  but[i].style('height','5%');
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
  this.style('height','5%');
}
}


function base(){
for(let i = 0; i<but.length;i++){
  this.style('-webkit-transition','0.3s')
    this.style('border-width','0px');
  this.style('width','7%');
  this.style('height','5%');
}
}

function adding(){
  console.log("adding course!")
  var course_name = createInput('שם הקורס')
  course_name.class('createCourse')
  var c_data = createElement('textArea','פרטים')
  c_data.class('createCourse')
  var send = createButton('צור קורס')
  send.class('createCourse')
var coursePos = ['32%','44%','68%']
var courseClass = selectAll('.createCourse')

for(let i = 0; i< courseClass.length;i++){
courseClass[i].style('-webkit-transition','0.8s')
courseClass[i].style('position','absoulte')
courseClass[i].style('width','20%')
courseClass[i].style('height','7%')
courseClass[i].style('left','40%')
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
c_data.style('left','40%')

send.style('background-color','rgba(0,0,255,0.8)')
send.style('width','14%')
send.style('left','43%')
send.style('border-radius','15px')
send.style('text-align','center')
send.mouseOver(changeColor);
send.mouseOut(base);
send.mouseClicked(addTolist)

function changeColor(){
send.style('-webkit-transition','0.3s')
send.style('color','orange')
send.style('border-color','rgb(95,65,65)')
send.style('box-shadow','3px 3px 2px #888888')

}
function base(){
  send.style('transition','0.3s')
send.style('color','orange')
send.style('border-width','0px')
send.style('box-shadow','0px 0px 0px #888888')
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
