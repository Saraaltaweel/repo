'use strict'
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}




let container=document.getElementById('container');
let table=document.createElement('table');
container.appendChild(table);

let total=[0,0,0,0,0,0,0,0];
let counter=1;
let arr=[];
let hours=['8am','9am','10am','11am','12pm','1pm','2pm'];
function Cookie(location,min,max,avg){
    this.location=location;
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.cookiePerHour=[];
    this.dailySales=0;
    arr.push(this);
    


}

function header(){


let trEl=document.createElement('tr');
table.appendChild(trEl)
let thEl2=document.createElement('th');
trEl.appendChild(thEl2);
thEl2.textContent='  ';

let thEl;
for (let i=0 ; i<hours.length; i++){
thEl=document.createElement('th');
trEl.appendChild(thEl);
thEl.textContent=hours[i];

}
let thEl3=document.createElement('th');
trEl.appendChild(thEl3);
thEl3.textContent='Daily Sales';
}
header();

Cookie.prototype.render = function(){
counter++;

    let trEl3=document.createElement('tr');
    table.appendChild(trEl3);
    let thEl4=document.createElement('th');
    trEl3.appendChild(thEl4);
    thEl4.textContent=this.location;


    let tdEl;
    for (let i=0;i<hours.length;i++){
        this.cookiePerHour.push(getRandomIntInclusive(this.min,this.max))*this.avg;
    this.dailySales+=this.cookiePerHour[i];
    total[i]+=this.cookiePerHour[i];
 
        tdEl=document.createElement('td');
        trEl3.appendChild(tdEl);
        tdEl.textContent=this.cookiePerHour[i];
            }
      
         let   tdEl8=document.createElement('td');
            trEl3.appendChild(tdEl8);
            tdEl8.textContent=this.dailySales;
  
   

    // let trEl3=document.createElement('tr');
    // table.appendChild(trEl3);
    // let thEl4=document.createElement('th');
    // trEl3.appendChild(thEl4);
    // thEl4.textContent=this.location;

// let tdEl;
//     for (let i=0;i<hours.length;i++){
// tdEl=document.createElement('td');
// trEl3.appendChild(tdEl);
// tdEl.textContent=this.cookiePerHour[i];
//     }



}
let globleTotal=0;
function footer(){
    let tr1=document.createElement('tr');
table.appendChild(tr1);

    
    let th3=document.createElement('th');
    tr1.appendChild(th3);
    th3.textContent='Total';


let th1;
for(let i=0; i<seatle.cookiePerHour.length;i++){
    th1=document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent=total[i];
    globleTotal+=total[i];

}
let th2=document.createElement('th');
tr1.appendChild(th2);
th2.textContent=globleTotal;

}

let seatle=new Cookie('seatle', 24.65,2.3);
seatle.render();
footer();


const form=document.getElementById('form')
form.addEventListener('submit',clickHere);

function clickHere(event){
    event.preventDefault();

    let location=event.target.location.value;
    let min=event.target.min.value;
    min=parseInt(min);
    let max=event.target.max.value;
    max=parseInt(max);
    let avg=event.target.avg.value;
    avg=parseFloat(avg);

    let newCookie=new Cookie(location,min,max,avg);
table.deleteRow(counter);
newCookie.render();
footer();
setCookie();
}

function setCookie(){
    let save=JSON.stringify(arr);
    localStorage.setItem('info',save);
}

function getCookie(){
    let allInfo=localStorage.getItem('info');
    let sara=JSON.parse(allInfo);
    if(sara){
        arr=sara;
    }
    else{
        arr=[];
    }

}
getCookie();