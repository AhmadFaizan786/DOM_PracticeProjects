//Step-1) Generate random color function
//step-2)Access start and stop button to change the color using randomColor function and timeInterval method



let intervalId;
const startChangingColor = function(){

    if(intervalId == null){
        intervalId = setInterval(changeBGcolor,1000);
    }

    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null

    
}

document.querySelector('#start')
.addEventListener('click',startChangingColor);

document.querySelector('#stop')
.addEventListener('click',stopChangingColor);




const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}


// let  myStart = document.querySelector('#start');
// let  myStop = document.querySelector('#stop');

// let myIntervalId ;
// myStart.addEventListener('click',()=>{
//     console.log("Accessed")
//     if(!myIntervalId){
//         myIntervalId = setInterval(randomColor,1000);
//     }
// });

// myStop.addEventListener('click',()=>{
//     console.log("Stopped")
//     if(myIntervalId){
//         clearInterval(myIntervalId)
//         myIntervalId = null;
//     }
// })

