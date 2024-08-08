console.log("Script running...")
// Task 1: Button One Flow
// Select the first button
let button=document.querySelector("#buttonOne")
console.log(button)

// Select the first p tag under that button
let p=document.querySelector("#textOne")
console.log(p)

// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"
button.addEventListener("click",function(event){
  p.textContent="You guessed wrong"
})


// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags
let buttons =document.querySelector("#idk")
let idk=document.querySelector("#textTwo")





// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"
buttons.addEventListener("click",function(event){
  idk.textContent="You guessed right"
})


// Task 3: Dog image flow
// Select the dog image
let image=document.querySelector("#dog")
console.log(image)

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click
image.addEventListener("mouseover",function(event){
  image.src="post-boop.png"
})



// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this
image.addEventListener("mouseout",function(event){
  image.src="pre-boop.jpeg"
})



// Task 4: Secret code flow
// Select the input
let idd=document.querySelector("#code")




// Add an event listener to the input such that when a key is pressed, you console log the value
// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)




