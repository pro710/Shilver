

const data=[
    "https://www.youtube.com/watch?v=QCRpVw2KXf8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=6",
     "https://www.youtube.com/watch?v=gSDncyuGw0s&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=5",
     "https://www.youtube.com/watch?v=McP9D114BfU",
     "https://www.youtube.com/watch?v=OGedflB0UAo",
     "https://www.youtube.com/watch?v=1baGA5hD1Cs"
  ]
function clickHandler(){
   // console.log("connected");
    let random=Math.ceil(Math.random()*4);
    //let randomLink=`https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=${random}`
    document.getElementById("anchar2").setAttribute("href", data[random]);
    
}
function clickHandler(){
  // console.log("connected");
   let random=Math.ceil(Math.random()*4);
   //let randomLink=`https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=${random}`
   document.getElementById("anchar3").setAttribute("href", data[random]);
   
}
function clickHandler(){
  // console.log("connected");
   let random=Math.ceil(Math.random()*4);
   //let randomLink=`https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=${random}`
   document.getElementById("anchar4").setAttribute("href", data[random]);
   
}
function clickHandler(){
  // console.log("connected");
   let random=Math.ceil(Math.random()*4);
   //let randomLink=`https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=${random}`
   document.getElementById("anchar5").setAttribute("href", data[random]);
   
}




