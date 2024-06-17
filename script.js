let buttonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");

buttonOne.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.

let spidyCaptain; /*= document.querySelector(".spidy-Captain").value;*/
    //  - Store the value of the input with a class of "comment-one".

spidyCaptain = document.querySelector(".comment-one");
commentOne = spidyCaptain.value;

    // 2. Display the variable spidyCaption to captionOne.

captionOne.innerHTML = commentOne;

});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.

let buttonTwo = document.querySelector(".button-two");
let captionTwo = document.querySelector(".caption-two");

buttonTwo.addEventListener("click", function() {
let kermitFrog;
kermitFrog = document.querySelector(".comment-two");
commentTwo = kermitFrog.value;
captionTwo.innerHTML = commentTwo;
});