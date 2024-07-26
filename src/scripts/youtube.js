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

       subsMe.addEventListener("click",()=>{showProf(eventEl.id)});

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
var videosds2 = document.querySelectorAll(".vid2");
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

function createElements2(event , ell2){
       let videoPlayListed2 = document.createElement("div");
              videoPlayListed2.className = "videoPlayList2";

              let vided2 = document.createElement("video");
              vided2.className = "vid2";
              vided2.src = "../../img/videos/" + ell2;
              videoPlayListed2.appendChild(vided2);

              let titlesIn2 = document.createElement("div");
              titlesIn2.className = "titles2";

              let imged3 = document.createElement("img");
              imged3.src = "../../img/photos/" + event.pic[0];

              let nameIs2 = document.createElement("span");
              nameIs2.className = "nameTitle2";
              nameIs2.innerHTML = event.name;

              let userNameIs2 = document.createElement("span");
              userNameIs2.className = "userName2";
              userNameIs2.innerHTML = event.name;

       titlesIn2.appendChild(imged3);
       titlesIn2.appendChild(nameIs2);
       titlesIn2.appendChild(userNameIs2);

       videoPlayListed2.appendChild(titlesIn2);

       moveIs.appendChild(videoPlayListed2);
}

var numPosts = 0;
function showProf(pid){
       let subProfed = subs.find(el => el.id == pid);

       profiledBio.className = "";

       bnrProfed.src = "../../img/banner/" + subProfed.banner;
       photoProfed.src = "../../img/photos/" + subProfed.pic;
       nameed.innerHTML = subProfed.name;
       // userNamed.innerHTML = subProfed.username;

       sbscrib.innerHTML = subProfed.subs + "M";

       moveIs.innerHTML = "";
       numPosts = "";
       for(ell of subProfed.videosIn){
              numPosts = numPosts +1;
                     videoerIn.innerHTML = numPosts;
              createElements2(subProfed , ell);
       }
}

videosds2.forEach(el =>
       playedPause(el)
);

var clickShowMore = 0;
tagNumSub.onclick = function(){
       if(clickShowMore == 0){
              clickShowMore = 1;
              Subscribers.style.overflowY = "auto";
              Subscribers.style.height = "250px";
              tagNumSub.innerHTML = "Show less";
       }
       else {
              clickShowMore = 0;
              Subscribers.style.overflowY = "";
              Subscribers.style.height = "";
              tagNumSub.innerHTML = "Show more";
       }
}

var playMovies = false;
vid3.onclick = function(){
       clickPlayAndPaus.style.display = "";
}

clickPlayAndPaus.onclick = function(){
       if(playMovies == false){
              playMovies = true;
              vid3.play();
              clickPlayAndPaus.className = "pauseds";
              setTimeout(()=>{clickPlayAndPaus.style.display = "none"},800);
       }
       else {
              playMovies = false;
              vid3.pause(); 
              clickPlayAndPaus.className = "";
       }
}

// videoTime

vid3.ontimeupdate = function(){
       const durations = vid3.duration;
       const currentTimes = vid3.currentTime;
       const newTimeIs = (currentTimes / durations) * 100;
       progressbar.style.width = newTimeIs + "%";
}

progresscontainer.onclick = function(e){
       const rect = progresscontainer.getBoundingClientRect();
       const clicked = e.clientX - rect.left;
       const widthDvTime = rect.width;
       const mohasebeTime = clicked / widthDvTime;
       const newTime = mohasebeTime * vid3.duration;
       vid3.currentTime = newTime;
}