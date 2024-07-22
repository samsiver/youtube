function createElements(eventEl){
       let subsMe = document.createElement("div");
       subsMe.className = "sub";

              let imged = document.createElement("img");
              imged.src = "../../img/photos/" + eventEl.pic[0];

              let nameSubed = document.createElement("span");
              nameSubed.className = "nameSub";
              nameSubed.innerHTML = eventEl.name;

       subsMe.appendChild(imged);
       subsMe.appendChild(nameSubed);

       Subscribers.appendChild(subsMe);
}
let numbers = 0;
function fillGrid(evented){
       Subscribers.innerHTML = "";
       for(i=0; i<evented.length; i++){
              numbers = numbers +1;
              numSuber.innerHTML = numbers;
              createElements(evented[i]);
       }
}
fillGrid(subs);

var videosds = document.querySelectorAll(".vid");

function playedPause(event){
       event.onmousemove = function(){
              event.play();
       }
       event.onmouseout = function(){
              event.pause();
       }
}

videosds.forEach(el =>
       playedPause(el)
);
