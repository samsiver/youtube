// function createElements(eventEl){
//        let subsMe = document.createElement("div");
//        subsMe.className = "sub";

//               let imged = document.createElement("img");
//               imged.src = "../../img/photos/" + eventEl.pic[0];

//               let nameSubed = document.createElement("span");
//               nameSubed.className = "nameSub";
//               nameSubed.innerHTML = eventEl.name;

//        subsMe.appendChild(imged);
//        subsMe.appendChild(nameSubed);

//        Subscribers.appendChild(subsMe);

//        // viceos

//        let videoPlayListed = document.createElement("div");
//        videoPlayListed.className = "videoPlayList";

//  eventEl.videosIn.forEach(video => {
//         let vided = document.createElement("video");
//         vided.className = "vid";
//         vided.src = "../../img/videos/" + video;
//         videoPlayListed.appendChild(vided);
//     });

//        let titlesIn = document.createElement("div");
//        titlesIn.className = "titles";

//               let imged2 = document.createElement("img");
//               imged2.src = "../../img/photos/" + eventEl.pic[0];

//               let nameIs = document.createElement("span");
//               nameIs.className = "nameTitle";
//               nameIs.innerHTML = eventEl.name;

//               let userNameIs = document.createElement("span");
//               userNameIs.className = "userName";
//               userNameIs.innerHTML = eventEl.name;

//        titlesIn.appendChild(imged2);
//        titlesIn.appendChild(nameIs);
//        titlesIn.appendChild(userNameIs);

//        videoPlayListed.appendChild(titlesIn);
//        // videoPlayListed.appendChild(vided);

//        videosHomePg.appendChild(videoPlayListed);

// }
// let numbers = 0;
// function fillGrid(evented){
//        Subscribers.innerHTML = "";
//        for(i=0; i<evented.length; i++){
//               numbers = numbers +1;
//               numSuber.innerHTML = numbers;
//               createElements(evented[i]);
//        }
// }
// fillGrid(subs);


function createElements(eventEl) {
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

       // viceos

    let videoPlayListed = document.createElement("div");
    videoPlayListed.className = "videoPlayList";

       for(el2 of eventEl.videosIn){
       let vided = document.createElement("video");
         vided.className = "vid";
         vided.src = "../../img/videos/" + el2;
         videoPlayListed.appendChild(vided);
       }

    let titlesIn = document.createElement("div");
    titlesIn.className = "titles";

    let imged2 = document.createElement("img");
    imged2.src = "../../img/photos/" + eventEl.pic[0];

    let nameIs = document.createElement("span");
    nameIs.className = "nameTitle";
    nameIs.innerHTML = eventEl.name;

    let userNameIs = document.createElement("span");
    userNameIs.className = "userName";
    userNameIs.innerHTML = eventEl.name;

    titlesIn.appendChild(imged2);
    titlesIn.appendChild(nameIs);
    titlesIn.appendChild(userNameIs);

    videoPlayListed.appendChild(titlesIn);

    videosHomePg.appendChild(videoPlayListed);
}

let numbers = 0;
function fillGrid(evented) {
    Subscribers.innerHTML = "";
    for (let i = 0; i < evented.length; i++) {
        numbers = numbers + 1;
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
