



function createBlock(){

let men = [

"https://randomuser.me/api/portraits/men/90.jpg",
"https://randomuser.me/api/portraits/men/22.jpg",
"https://randomuser.me/api/portraits/men/25.jpg",
"https://randomuser.me/api/portraits/men/42.jpg",
"https://randomuser.me/api/portraits/men/58.jpg",
"https://randomuser.me/api/portraits/men/3.jpg",
"https://randomuser.me/api/portraits/men/2.jpg",
"https://randomuser.me/api/portraits/men/0.jpg",
"https://randomuser.me/api/portraits/men/26.jpg",
]

let women = [
"https://randomuser.me/api/portraits/women/72.jpg",
"https://randomuser.me/api/portraits/women/92.jpg",
"https://randomuser.me/api/portraits/women/82.jpg",
"https://randomuser.me/api/portraits/women/38.jpg",
"https://randomuser.me/api/portraits/women/84.jpg",
"https://randomuser.me/api/portraits/women/85.jpg",
"https://randomuser.me/api/portraits/women/40.jpg",
"https://randomuser.me/api/portraits/women/52.jpg",
"https://randomuser.me/api/portraits/women/9.jpg",
]
let chosen = Math.floor(Math.random() * men.length);
let chosen2 = Math.floor(Math.random() * women.length);

//what type of element am i trying to create
//let outerBox = document.createElement("body");


//use js to create a new element, an image
//that image is chosen from the array of images
//the style from the class is then applied

let ladies = document.createElement('img');
ladies.src = women [chosen2];
ladies.classList.add("woman");

let mens = document.createElement('img');
mens.src = men [chosen];
mens.classList.add("man");



//us js to create a new instance of section
//this is the box that will hold the other elements 
//apply the styles via classList

let menPic = document.createElement('section');
menPic.appendChild(mens);
menPic.classList.add("block2");


let ladyPic = document.createElement('section');
ladyPic.appendChild(ladies);
ladyPic.classList.add("block");


//create a new button element and alter the text content and apply the styles
let yup = document.createElement('button')
yup.textContent = 'YUP';
yup.classList.add("yup");
yup.addEventListener('click', function () {
ladyPic.classList.add('opacity');

    });

let nope = document.createElement('button')
nope.textContent = 'NOPE';
nope.classList.add("nope");
nope.addEventListener('click', function () {
ladyPic.classList.add('opacity');

    });


let yup2 = document.createElement('button')
yup2.textContent = 'YUP';
yup2.classList.add("yup");
yup2.addEventListener('click', function () {
menPic.classList.add('opacity');

    });


let nope2 = document.createElement('button')
nope2.textContent = 'NOPE';
nope2.classList.add("nope");
nope2.addEventListener('click', function () {
menPic.classlist.add('opacity');





    });

let ladyName = document.createElement('h1');
ladyName.textContent = "Linda";


let manName = document.createElement('h2');
manName.textContent = "Chet";



//define block by calling it from html
//relate the children to thier parents

let block = document.querySelector('body');
block.appendChild(ladyPic);
ladyPic.appendChild(ladyName);
ladyPic.appendChild(yup);
ladyPic.appendChild(nope);





   


let block2 = document.querySelector('body');
block2.appendChild(menPic)
menPic.appendChild(manName);
menPic.appendChild(yup2);
menPic.appendChild(nope2);

}

//add an eventlistener that will load and run the function created above

window.addEventListener ('load', function(){
    for (let i = 0; i < 2; i++){
    createBlock();
    }

    //add an interval that runs the function every second
    
  /*setInterval(createBlock, 1000);*/
});






