const footer=document.querySelector('.footer');
const buttonBTn=document.querySelector(".button-footer");
buttonBTn.addEventListener('click',slideIn)
function slideIn(){
    footer.classList.toggle("footer-active")//the classList. toggle added a class which never exixted at all
}