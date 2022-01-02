var noseX = 0;
var noseY = 0;
var leftWristX = 0;
var rightWristX = 0;
var difference = 0;
function setup()
{
    var video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{                                                                                                               
    background('pink');
    fill('white');
    stroke('white');
    square(noseX,noseY,difference);
    document.getElementById('square_sides').innerHTML = "Width and Height of the Square will be = "+difference+"px";
}
function modelLoaded()
{
    console.log("Posenet Is Initiallized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = "+noseX);
        console.log("Nose Y = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("Left Wrist X = "+leftWristX+"Right Wrist X = "+"Difference = "+difference);
    }
}