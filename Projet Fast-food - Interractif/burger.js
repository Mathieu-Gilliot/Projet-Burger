const dark= document.querySelector('#dark');

dark.addEventListener('click',night)

function night(){
let body= document.body;
body.classList.toggle('nuit')
}