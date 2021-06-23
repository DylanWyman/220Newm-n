//grabing 8 different colors
//#468c86, #17bd5f, #a4bd17, #4fd6c9
//#a4bd17, #69122f, #ad6507, #eb1b0c

//grab the boxes from the html
let b1 = document.getElementById("box1");
let b2 = document.getElementById("box2");
let b3 = document.getElementById("box3");
let b4 = document.getElementById("box4");
let b5 = document.getElementById("box5");
let b6 = document.getElementById("box6");
let b7 = document.getElementById("box7");
let b8 = document.getElementById("box8");
let b9 = document.getElementById("box9");
let b10 = document.getElementById("box10");
let b11 = document.getElementById("box11");
let b12 = document.getElementById("box12");
let b13 = document.getElementById("box13");
let b14 = document.getElementById("box14");
let b15 = document.getElementById("box15");
let b16 = document.getElementById("box16");

//set the color array
let colorArray =
    ["#a4bd17", "#69122f", "#ad6507", "#eb1b0c",
        "#468c86", "#17bd5f", "#a4bd17", "#4fd6c9",
        "#468c86", "#17bd5f", "#a4bd17", "#4fd6c9",
        "#a4bd17", "#69122f", "#ad6507", "#eb1b0c"
    ];

//set position to know which box to send the information to
let position = 1;

//randomize the color array
let colors = colorArray
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

//see randomized colors
console.log(colors);


//for loop to assign the colors to different boxes
for(let i = 0; i <= 15; i++){
    let pos1 = colors.slice(i,i+1);
    let item = "box" + (i + 1);
    console.log(item)
    console.log(pos1);
console.log(i);
    position += 1;
}


function reveal(){

}



/*
// @description toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};


// @description toggles open and show class to display cards
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};


// @description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};



// @description when cards match
function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
}


// description when cards don't match
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },1100);
}

 */