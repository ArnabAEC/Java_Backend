var audio = document.getElementById('audio');
var img = document.getElementById('song-img');
function play(){
    audio.play();
}
function pause(){
    audio.pause();
}
function Stop(){
    audio.pause();
    audio.currentTime = 0;
}
function volPlus(){
    audio.volume += 0.1;
}
function volMinus(){
    audio.volume -= 0.1;
}
function Baby(){

}
function Zinda(){
    audio.src="./audio/BMB-Zinda.mp3";
    img.src="./images/Zinda.jfif";
    audio.play();

}
function SunRahaHaii(){
    audio.src="./audio/SunnRahaHai.mp3";
    img.src="./images/SunRahaHai.jpg";
    audio.play();

}
function TumHiHo(){
    audio.src="./audio/TumHiHo.mp3";
    img.src="./images/TumHiHo.jfif";
    audio.play();
}