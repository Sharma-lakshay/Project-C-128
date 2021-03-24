song= "";
song2= "";
leftWrist_x= 0;
leftWrist_y= 0;
rightWrist_x= 0;
rightWrist_y= 0;

function preload(){
song= loadSound("Attention - Charlie Puth.mp3");
song2= loadSound("Camila Cabello ‒ Havana 🎤 ft. Young Thug.mp3");
}

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("Posenet is intialized");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    leftWrist_x= results[0].pose.leftWrist.x;
    leftWrist_y= results[0].pose.leftWrist.y;
    console.log("Left Wrist X= " + leftWrist_x + "Left Wrist Y= " + leftWrist_y);
    rightWrist_x= results[0].pose.rightWrist.x;
    rightWrist_y= results[0].pose.rightWrist.y;
    console.log("Right Wrist X= " + rightWrist_x + "Right Wrist Y= " + rightWrist_y);
}
}