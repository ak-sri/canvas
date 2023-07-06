function setup(){
    video= createCapture(VIDEO); 
    video.size(550,500); 

    canvas= createCanvas(550,550); 
    canvas.position(560,150); 

    poses= ml5.poseNet(video, modelLoaded); 
    poses.on('pose', gotPoses); 
}

function draw(){
    background('#fafad2')
}

function modelLoaded(){
    console.log("PoseNet model is initialized"); 
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
    }
    else{
        console.log("No pose points found. Please try again later.")
    }
}