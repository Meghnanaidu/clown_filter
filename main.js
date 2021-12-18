noseX = 0;
noseY = 0;

function preload() {
  clown_nose = loadImage(
    "https://i.postimg.cc/HxCgZgHS/clown-nose-project-removebg-preview.png"
  );
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("posenet is initialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX=" + results[0].pose.nose.x);
    console.log("noseY=" + results[0].pose.nose.y);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  //fill("#368BC1");
  //stroke("#368BC1");
  //circle(noseX, noseY, 25);
  image(clown_nose, noseX - 20, noseY - 20, 45, 35);
}

function take_snapshot() {
  save("selfie.png");
}
