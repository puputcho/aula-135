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
        for(i = 0; i < objetos.length ; i++){
        
        x = objetos[i].x
        y = objetos[i].y
        h = objetos[i].height
        w = objetos[i].width
        s = 15
        t = objetos[i].label
        fill('red')
        noFill()
        stroke('red')
        rect(x, y, w, h)
        textSize(s)
        fill('red')
        text(t, x, y - 5)

        }
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
