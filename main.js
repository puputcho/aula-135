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
    if (statusModelo != '') {
        detectorObjetos.detect(video, gotResult)
        x = 100
        y = 100
        h = 200
        w = 100
        s = 15
        t = 'Olá'
        fill('red')
        noFill()
        stroke('red')
        rect(x, y, w, h)
        textSize(s)
        fill('red')
        text(t, x, y - 5)
        document.getElementById('status').innerHTML = 'Objetos detectados.'
        document.getElementById('Numerobjetos').innerHTML = objetos.length + ' objetos detectados'
    }
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

function gotResult(error, results) {
    if (error) {
        console.error(error);
        document.getElementById('status').innerHTML = error
    }else{
    objetos = results
    console.log(objetos);
    }
}
