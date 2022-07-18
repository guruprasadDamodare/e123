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