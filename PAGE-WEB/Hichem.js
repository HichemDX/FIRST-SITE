let starts = document.getElementById("starts");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let hichem = document.querySelector(".hichem");
let main = document.querySelector(".main");


window.onscroll = function(){
  let value = scrollY;
  starts.style.left=value +'px';
  moon.style.top=value*3 +'px';
  mountains3.style.top=value*1 +'px';
  mountains4.style.top=value*0.8 +'px';
  river5.style.top=value +'px';
  boat6.style.top=value +'px';
  boat6.style.left=value*2 +'px';
  
  hichem.style.fontSize=value +'px';


  if( value >= 76){
  hichem.style.fontSize=76 +'px';
  hichem.style.position='fixed';

  }
  if(value >= 482.3999938964844){
    hichem.style.display = "none";
  }
  else{
    hichem.style.display = "block";

  }
  if(value >= 143 ){
    main.style.background='linear-gradient(#1c7b98, #3e0428)'
  }
  else{
    main.style.background='linear-gradient(#1a0818, #3e0428)' 

  }
}

//143.1999969482422

