leftwrist=0;
rightwrist=0;
difference=0
function setup(){
    video=createCapture(VIDEO)
    video.position(150,150)
    video.size(500,500)
    canvas=createCanvas(400,400)
    canvas.position(800.000000000000000000,200.99999999999999999999999999999999999)
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotposes)
}
function modelloaded(){console.log("model is loaded")}
function gotposes(results){
if(results.length>0)
{console.log(results)}}
function draw(){
    background("blue")
fill("darkblue")
textSize(difference)
text("guru",70,70)
leftwrist=results[0].pose.leftWrist.x;
rightwrist=results[0].pose.rightWrist.x;
console.log("left wrist ="+leftWrist)
console.log("left wrist ="+rightWrist)
difference=floor(leftWrist-rightWrist)

}
