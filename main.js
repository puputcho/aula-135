statusModelo = "";
objetos = [];
function preload() {
    video = createVideo('video.mp4');
}
function setup() {
    canvas = createCanvas(480, 360);
    canvas.center();
}
function draw() {
    image(video, 0, 0);
}
function start() {
    detectorObjetos = ml5.objectDetector('cocossd', modelLoaded);
    console.log('eeeeebaaaaa');
}
function modelLoaded() {
    console.log('modelo carragedo');
    statusModelo = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}