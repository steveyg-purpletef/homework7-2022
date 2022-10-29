var video = document.getElementsByClassName("video");

console.log(video)
window.addEventListener("load", function() {
	video[0].src = "assets/marchingband.mov";
	video[0].autoplay = false;
	video[0].loop = false;
	document.getElementById("play").addEventListener("click", playVideo);
	document.getElementById("pause").addEventListener("click", pauseVideo);
	document.getElementById("slower").addEventListener("click", slowDown);
	document.getElementById("faster").addEventListener("click", speedUp);
	document.getElementById("skip").addEventListener("click", skipAhead);
	document.getElementById("mute").addEventListener("click", muteVideo);
	document.getElementById("slider").addEventListener("change", audioControls);
	document.getElementById("vintage").addEventListener("click", applyStyled);
	document.getElementById("orig").addEventListener("click", applyOriginal);
});

function playVideo(){
	// Need to implement the update volume
	video[0].play();
	document.getElementById("volume").innerHTML = (video[0].volume * 100);
	document.getElementById("volume").innerHTML += "%";
	// console.log("play")
}
function pauseVideo(){
	video[0].pause();
	// console.log("pause")
}

function slowDown(){
	console.log(video[0].playbackRate * 0.9);
	video[0].playbackRate = video[0].playbackRate * 0.9;
}

function speedUp(){
	console.log(video[0].playbackRate / 0.9);
	video[0].playbackRate = video[0].playbackRate / 0.9;
}

function skipAhead(){
	video[0].currentTime = video[0].currentTime + 10;
	if(video[0].duration <= video[0].currentTime){
		video[0].currentTime = 0;
	}
	console.log(video[0].currentTime)
}

function muteVideo(){
	if(!video[0].muted){
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		document.getElementById("mute").innerHTML = "Mute";
	}
	video[0].muted = !video[0].muted;
}

function audioControls(){
	// console.log(document.getElementById("slider").value / 100);
	video[0].volume = document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = (video[0].volume * 100);
	document.getElementById("volume").innerHTML += "%";
}

function applyStyled(){
	video[0].classList.add("oldSchool");
	// console.log("Added Styling");
}
function applyOriginal(){
	video[0].classList.remove("oldSchool");
	// console.log("Removed Styling");
}
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

