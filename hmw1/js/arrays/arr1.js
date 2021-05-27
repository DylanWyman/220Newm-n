new p5();

var randomizeBackground = random(150);


/*
    for(var i = arr.length - 1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1))
        [array[i],array[j]] = [array[j], array[i]]
    }   

    function shuffle(array){
    for(var i = arr.length - 1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1))
        [array[i],array[j]] = [array[j], array[i]]
    }     
}
*/





function setup() {
    createCanvas(1000, 1000)




}

function draw() {
    //console.log(colors);

    //var colors = ["#052abf", "#0d8b04", "#92d11a", "#a1e2d3", "#771c4a", "#0b1a19", "#f47de6", "#ffb760"];
   // print(colors);
    //shuffle(colors, true); // force modifications to passed array
   // print(colors);
  
    // By default shuffle() returns a shuffled cloned array:
    //let newColors = shuffle(colors);
   // print(colors);
   // print(newColors);









    background(155, randomizeBackground, randomizeBackground);

    for(var i=0;i<3;i=i++){
        //create circles
        //fill(newColors);
        //fill(122,122,0);
        rect(i+10,10,45,145);

    }


    
}

//neopolitan