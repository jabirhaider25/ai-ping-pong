function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

 
  video.size(600,300);
  video.parent('myModal');

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

	
}
function modelLoaded() {
console.log('modal loaded!')
}