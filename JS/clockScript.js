// Constants to represent the Ids of each hand on the clockface
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function twelve(positions){
  if (positions['sec'] == 0 || positions['min'] == 0 || positions['hr'] == 0){
    document.querySelector("#second").setAttribute("style", "transition-duration: 0s;");
    document.querySelector("#minute").setAttribute("style", "transition-duration: 0s;");
    document.querySelector("#hour").setAttribute("style", "transition-duration: 0s;");
  } else {
    document.querySelector("#second").setAttribute("style", "transition-duration: .5s;");
    document.querySelector("#minute").setAttribute("style", "transition-duration: .5s;");
    document.querySelector("#hour").setAttribute("style", "transition-duration: .5s;");
  }
}
// Updates the clockface in the viewport
function clockUpdate(){
  var date = new Date();
  // Position Variables
  let positionsRaw = {hr: date.getHours(), min: date.getMinutes(), sec: date.getSeconds()};
  let positionsClean = {hr: positionsRaw['hr']*360/12 + (positionsRaw['min']*360/60/12),
    min: positionsRaw['min']*360/60 + (positionsRaw['sec']*360/60/60),
    sec: positionsRaw['sec']*360/60};
    twelve(positionsClean)
  function cssUpdate(){
    // Updates the clockface using CSS transform styles
    HOURHAND.style.transform = "rotate(" + positionsClean["hr"] + "deg";
    MINUTEHAND.style.transform = "rotate(" + positionsClean["min"] + "deg";
    SECONDHAND.style.transform = "rotate(" + positionsClean["sec"] + "deg";
  }; cssUpdate();
};


var repeat = setInterval(clockUpdate, 1000)
