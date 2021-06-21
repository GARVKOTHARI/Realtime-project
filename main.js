function setup () {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ATbIPHyN1/model.json" , modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded!");
}



function draw() {
image(video, 0, 0, 300, 300);
classifier.classify(video , gotResult);
}

function gotResult(error , Result) {
    if  (error) {
      console.error("error")
    }

    else  {
        console.log(Result);
       document.getElementById("result_object_name").innerHTML = Result[0].label;
       document.getElementById("result_object_Accuracy").innerHTML = Result[0].confidence.tofixed(2);
    }
}

