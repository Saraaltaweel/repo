'use strict'
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let globalName=0;
let globalAge=0;

let form=document.getElementById('form');
let container=document.getElementById('container');
let table=document.createElement('table');
container.appendChild(table);

let arr=[];
function Cats(name,min,max){
    this.name=name;
    this.min=min;
    this.max=max;
    arr.push(this);
    this.age=this.countAge();

}

Cats.prototype.countAge = function(){
return this.age=(getRandomIntInclusive(this.min,this.max));


}



function header(){

    let trEl= document.createElement('tr');
    table.appendChild(trEl);
    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent='Name';

    let thEl2=document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent='Age';
    

}
header();


function render(){
let nameInput=document.getElementById('name');
globalName=nameInput.value;

globalAge=getRandomIntInclusive(min,max);

let trEl2=document.createElement('tr');
table.appendChild(trEl2);
let tdEl=document.createElement('td');
trEl2.appendChild(tdEl);
tdEl.textContent=globalName;

let tdEl2=document.createElement('td');
trEl2.appendChild(tdEl2);
tdEl2.textContent=globalAge;


}
let lama= new Cats("franki",2,22);
render();


form.addEventListener('submit',clickHere);

function clickHere(event){
    event.preventDefault();

    let name = event.target.name.value;
    let min = event.target.min.value;
    min=parseInt(min);
    let max = event.target.max.value;
    max=parseInt(max);

    let newCats = new Cats(name,min,max);
    
    render();
    newCats.countAge();
    setCats(); 
}

function setCats(){
    let items=JSON.stringify(arr);
    localStorage.setItem('allCats',items);
}
function getCats(){
    let sara=localStorage.getItem('allCats');
    let info =JSON.parse(sara);
    if(info){
        arr=info;

    }else{
        arr=[];
    }
   render(); 
}
getCats();