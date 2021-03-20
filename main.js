$(document).ready(function() {
    if($(window).width() > 380) {
        
        $("#img").attr("src", "images/illustration-editor-desktop.svg");
        $("#img2").attr("src", "images/illustration-laptop-desktop.svg");
    } else {
        $("#img").attr("src", "images/illustration-editor-mobile.svg");
        $("#img2").attr("src", "images/illustration-laptop-mobile.svg");
    }
}); 

const close = document.querySelector('#close');
const hamb = document.querySelector('#hamburger');
const menu = document.querySelector('.menu')
hamb.addEventListener('click',function(){
    menu.classList.toggle('show');
    close.classList.toggle('show');
    hamb.classList.add('hidden');
})
close.addEventListener('click',function(){
    menu.classList.toggle('show');
    close.classList.toggle('show');
    hamb.classList.remove('hidden');
})