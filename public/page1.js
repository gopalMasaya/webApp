function page1(){

  if(c == false){
    canvas	= createCanvas(windowWidth, windowHeight+200);

 	courses_list.on('value',readData,err);

  function readData(data){

  var input = data.val();
  let keys = Object.keys(input);

      in_length= keys.length;
      for(let i = 0 ; i < keys.length;i++){

         k = keys[i];
        nameOfcours[i] = input[k].name;
        courseDis[i] = input[k].details;

    }
  //for(let i = 0;i< 2;i++){
console.log(in_length)

var pos =['32%','52%','72%','92%']
var dpos =['31%','51%','71%','91%']
var bpos =['35%','55%','75%','95%']
for(let i = 0;i< 4;i++){
list[i] = createDiv(nameOfcours[i])
list[i].class('name')
det[i] = createP(courseDis[i])
det[i].class('det')
classTime[i] = createP('זמנים')
classTime[i].class('det')

classData = selectAll('.name')

let divs = selectAll('.name')
list[i].style('-webkit-transition','0.8s')
list[i].style('opacity','0.3')
list[i].style('position','absolute')
list[i].style('top',pos[i])
list[i].style('background-color','rgba(20,20,20,0.4)')
list[i].style('opacity','0.9')
list[i].style('color','orange')
list[i].style('left','18%')
list[i].style('width','67%')
list[i].style('height','15%')
list[i].style('border-radius','15px')
list[i].style('text-align','right')
list[i].style('padding','2px  10px')
list[i].style('font-size','1.4vw')

det[i].style('-webkit-transition','1.5s')
det[i].style('background-color','rgba(20,20,20,0.6)')
det[i].style('position','absolute')
det[i].style('left','37%')
det[i].style('width','37%')
det[i].style('height','9%')
det[i].style('padding','10px 10px')
det[i].style('color','rgb(217,180,17)')
det[i].style('top',dpos[i])
det[i].style('text-align','center')
det[i].style('border-radius','15px')



classTime[i].style('-webkit-transition','2s')
classTime[i].style('position','absolute')
classTime[i].style('left','27%')
classTime[i].style('width','8%')
classTime[i].style('height','12%')
classTime[i].style('border-radius','8px')
classTime[i].style('background-color','rgba(255,255,250,0.3)')
classTime[i].style('top',dpos[i])
classTime[i].style('opacity','0.9')
classTime[i].style('font-family',font)
classTime[i].style('color','blue')
classTime[i].style('text-align','center')
classTime[i].style('line-height','80px')


reg[i]=createButton("פרטים/\nהרשמה")
reg[i].style('-webkit-transition','2s')
reg[i].style('background-color','rgba(20,20,250,0.4)')
reg[i].style('position','absolute')
reg[i].style('left','19%')
reg[i].style('width','6%')
reg[i].style('height','8%')
reg[i].style('opacity','0.98')
reg[i].style('padding','10px 10px')
reg[i].style('color','rgb(217,180,17)')
reg[i].style('top',bpos[i])
reg[i].style('text-align','center')
reg[i].style('border-radius','15px')
reg[i].mouseOver(changeColor)
reg[i].mouseOut(base)


  }
  function changeColor(){
  this.style('-webkit-transition','0.7s')
  //this.style('border-color','rgb(95,65,65)')
  //this.style('box-shadow','6px 6px 6px 6px rgba(217,180,20,0.5)')
//this.style('border-width','3px')
this.style('background-color','rgba(20,20,250,0.8)')
  }
  function base(){
   this.style('transition','0.7s')
  this.style('color','orange')
  this.style('background-color','rgba(20,20,250,0.4)')
//  this.style('border-width','1px')
  //this.style('box-shadow','1px 0px 0px #888888')
//  this.style('border-width','1px')

  }



}
  function err(error){
  console.log(error);
  }
}
 //c = true

}
