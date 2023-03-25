const lista = [
    "kepek/kep1.jpg",
    "kepek/kep2.jpg",
    "kepek/kep3.jpg",
    "kepek/kep4.jpg",
    "kepek/kep5.jpg",
    "kepek/kep6.jpg",
    "kepek/kep1.jpg",
    "kepek/kep2.jpg",
    "kepek/kep3.jpg",
    "kepek/kep4.jpg",
    "kepek/kep5.jpg",
    "kepek/kep6.jpg",
];
lapKeveres();
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

const PlayerNevek = []


const KIVALASZTOTTKEPEK = []
let db = 0;
$(function(){
    console.log("barmi");
    const felsoSection = $(`#felso`);
    let tartalom = osszeAllit();
    felsoSection.append(tartalom);
    const FELSOKEPEK = $("#felso img");
    FELSOKEPEK.on("click", kepreKattintas);
    
})
function kepreKattintas(event){
    const aktKep = event.target;
    console.log(aktKep.id);
    console.log($(aktKep).attr("id"));
    aktKep.src = lista[aktKep.id]; 
    KIVALASZTOTTKEPEK.push($(aktKep).attr("id"));
    db++;
    if(db==2) {
        db=0;
        visszaFordit()
        
    }
}   
function visszaFordit(){
    console.log(KIVALASZTOTTKEPEK);
    
    
 setTimeout(function() {
    const FELSOKEPEK = $("#felso img");
    let aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0]);
    $(aktKep).attr("src","kepek/hatter.jpg");
    aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]);
    $(aktKep).attr("src","kepek/hatter.jpg");
    KIVALASZTOTTKEPEK.pop();
    KIVALASZTOTTKEPEK.pop();

}, 1000);
}
    
    






function osszeAllit(){
    let db = 0;
    let txt="";
    for (let index = 0; index < lista.length; index++) {
        txt+=`<div id="${db}"><img src="kepek/hatter.jpg" alt="kepem" id="${index}"> </div>`;
            db+=1;
    }
    console.log(txt);
    return txt;
    
}
function lapKeveres(){
    for (let i = lista.length-1; i >= 0; i--) {
        let index = parseInt(Math.random()*(i+1));
        let helyTarto = lista[index];
        lista[index] = lista[i];
        lista[i] = helyTarto;
    }
}
function startStopwatch() {
    timer = setInterval(updateStopwatch, 1000);
  }
  
  function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    document.getElementById("stopwatch").innerHTML =
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
      ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
  }
  
  function stopStopwatch() {
    clearInterval(timer);
    times.push(
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
    );
    displayTimes();
  }
  
  function resetStopwatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    times = [];
    document.getElementById("stopwatch").innerHTML = "00:00:00";
    displayTimes();
  }
  
  function displayTimes() {
    const timesList = document.getElementById("timesList");
    // timesList ide jon a nev tarolas
    timesList.innerHTML = "";
    for (let i = 0; i < times.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = times[i];
      timesList.appendChild(li);
    }
  }
    
    
    
    