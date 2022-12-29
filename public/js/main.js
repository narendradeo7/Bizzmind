
console.log("working of js");




// rotation of eyes 

const eyes = document .querySelectorAll('.eye');
const thinkimg = document.getElementsByClassName('thinkimg')[0];

// getting center of the think img 

const rekt= thinkimg.getBoundingClientRect();

const anchorX = rekt.left + rekt.width /2;

const anchorY= rekt.top + rekt.height /2;

document.addEventListener('mousemove',(e)=>{

    const mouseX= e.clientX;
    const mouseY=e.clientY;

    // console.log(mouseX/window.innerWidth +"vh"+ mouseY/window.innerHeight+"vh");

// for the movement of the eyes 
eyes[0].style.left=42+(mouseX/window.innerWidth)*2+"%";
eyes[0].style.top=37+(mouseY/window.innerHeight)*10 +"%";
eyes[1].style.left=43.95+(mouseX/window.innerWidth)*4+"%";
eyes[1].style.top=40.26+(mouseY/window.innerHeight)*4 +"%";

    const angleDeg = angle(mouseX,mouseY,anchorX,anchorY);

    // console.log(angleDeg);
// for rotation and color change 
    eyes.forEach(eye =>{
        // console.log("eye move ");
        eye.style.transform = "rotate("+90+ angleDeg +"deg)";
        
        thinkimg.style.filter="hue-rotate("+angleDeg+"deg)";
    })
})


// angle function to get angele of mouse movement to the center of the image 

function angle(cx,cy,ex,ey){
    const dy =ey-cy;
    const dx=ex-cx;
    
    // now we will convert it into radian 

    const rad=Math.atan2(dy,dx);
    const deg = rad *180/Math.PI;
    return deg;
}


// working of scroll for parallax effect 

window.addEventListener("scroll",function(){
    let val= this.window.scrollY
    let introtext=document.querySelector(".introtext");
    // getting introimg 
    introimg=document.querySelector(".introimg");
    


    // if we start scrolling then 
    if(val>20){
        
        introtext.classList.remove("hidden");
introimg.style.width=(100-(val/3)+5)+"%";
// o to -26 left shift
introimg.style.left=(-(val/3)+6)+"%";


if(val<140){
    introtext.style.width=(val/2)+"vw"  
}

// intro text left 42 to 72 
introtext.style.left=(47+(val/2))+"%";



    }
    else{
        introtext.classList.add("hidden");
    }
   

    
    console.log("scrolly "+ val);
})





