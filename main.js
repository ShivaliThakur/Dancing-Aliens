function dancebasanti(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Kt9APbL1Z/model.json", modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("sound_result").innerHTML= "I can hear- "+results[0].label;
        document.getElementById("sound_accuracy").innerHTML="Accuracy- "+(results[0].confidence * 100).toFixed(2)+"%";

        red= Math.floor(Math.random() * 255)+1;
        green= Math.floor(Math.random() * 255)+1;
        blue= Math.floor(Math.random() * 255)+1;

        red1= Math.floor(Math.random() * 255)+1;
        green1= Math.floor(Math.random() * 255)+1;
        blue1= Math.floor(Math.random() * 255)+1;

        document.getElementById("sound_result").style.color= "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("sound_accuracy").style.color= "rgb(" + red + "," + green + "," + blue + ")";
        

        alien1= document.getElementById("alien1");
        alien2= document.getElementById("alien2");
        alien3= document.getElementById("alien3");
        alien4= document.getElementById("alien4");

        if (results[0].label == "Clap"){
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.gif";
            alien4.src="aliens-04.png";
        }

        if (results[0].label == "Song"){
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.gif";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }

        if (results[0].label == "bell"){
            alien1.src="aliens-01.gif";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }

        if (results[0].label == "Snapping"){
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.gif";
        }

        else{
                alien1.src="aliens-01.gif";
                alien2.src="aliens-02.gif";
                alien3.src="aliens-03.gif";
                alien4.src="aliens-04.gif";
                document.getElementById("aliens").style.backgroundColor= "rgb(" + red1 + "," + green1 +","+blue1+")";
        }
    }
}