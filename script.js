const container = document.querySelector('.container');
const divs = document.querySelectorAll('.container div')
const button = document.querySelector('.change-square')
const body = document.querySelector('body')
const mode = document.querySelector('.mode')
let click = true;

function drawSquares(size){
    container.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
let squarecounter = size *size
for(let i = 0; i < squarecounter; i++){
    const div = document.createElement('div')
    div.style.backgroundColor = 'white';
    div.addEventListener('mouseover',colorSquare)
    container.appendChild(div)
}
}
drawSquares(16)
button.addEventListener('click', () =>{
   let number = prompt('enter number of squares')
   let message = document.querySelector('.message')
   if(number >= 2 && number <= 100){
    drawSquares(number)
    message.style.display = 'none';
   }else{
    message.style.display = 'flex'
    return;
   }
})
//function that draw squares 
function colorSquare(e){
    if(click){
        e.target.style.backgroundColor ='black'
    }

    
}
//listening on a click on the body to stop or continue drawing
body.addEventListener('click',(e)=>{
    if(e.target.tagName !== 'BUTTON'){
        click = !click;
    if(click){
        mode.textContent = 'Mode:coloring'
    }else {
        mode.textContent = 'Mode:Not coloring'
    }
    }  
})