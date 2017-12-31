let workTime = 1500000;
let restTime = 300000;
let showTime = 0;
let timerView = document.querySelector('.timer');
let timerActive = false;



let format = function (time) {
    let makeToSeconds = time / 1000;
    let seconds = Math.floor(makeToSeconds % 60);
    let minutes = Math.floor(makeToSeconds / 60);

    if (seconds < 10) {
        return minutes + ":0" + seconds;
    } else {
        return minutes + ":" + seconds;
    }

};

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function(){
  workTime = 1500000;
  workValue.innerHTML = format(workTime);
  restTime = 300000;
  restValue.innerHTML = format(restTime);

  document.querySelector('.timer').innerHTML = "Start Your Engines";
})

//SET WORK TIME
let workValue = document.querySelector('.workLength');
workValue.innerHTML = format(workTime);

let workValueAdd = document.querySelector('.plusWork');
workValueAdd.addEventListener('click', function(){
  if(!timerActive){
    workTime += 60000;
    workValue.innerHTML = format(workTime);
}
});

let workValueSub = document.querySelector('.minusWork');
workValueSub.addEventListener('click', function(){
  if(workTime>0 && !timerActive){
    workTime -= 60000;
    workValue.innerHTML = format(workTime);
}
});

//SET REST TIME
let restValue = document.querySelector('.restLength');
restValue.innerHTML = format(restTime);

let restValueAdd = document.querySelector('.plusRest');
restValueAdd.addEventListener('click', function(){
  if(!timerActive){
    restTime += 60000;
    restValue.innerHTML = format(restTime);
}
});

let restValueSub = document.querySelector('.minusRest');
restValueSub.addEventListener('click', function(){
  if(restTime>0 && !timerActive){
    restTime -= 60000;
    restValue.innerHTML = format(restTime);
  }
});


// Timer function for work or rest
let timerStart = function (time) {
  if(!timerActive){
   timer = setInterval(
       function () {
         showTime = format(time);
         timerView.innerHTML =  showTime;
           if (time > 0) {
               time -= 1000;
           } else {
             clearInterval(timer);
             timerActive = false;
           }
   }, 1000);
 }
};






let startBtn = document.querySelector('.start');
let startBtnRest = document.querySelector('.startRest');


//Starts the timer
startBtn.addEventListener('click', function(){
  timerStart(workTime);
  timerActive = true;
});
startBtnRest.addEventListener('click', function(){
  timerStart(restTime);
  timerActive = true;
});


//Stops the timer
let stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', function(){
  clearInterval(timer);
  timerActive = false;
})




//first make the timer so it counts down from 25 main
//timer needs 2 values work and rest
//make it so you can change work and rest time
