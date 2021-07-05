//search form
const searchbutton = document.querySelector('.searchbutton');
const searchbox = document.querySelector('.searchbox');
const clearactive = document.querySelector('.clear');
const buy = document.querySelector('#buy');
searchbutton.onclick = function() {
    searchbox.classList.toggle('active');
    searchbutton.classList.toggle('change');
    clearactive.classList.toggle('show');
    function query(x) {
        if(x.matches) {
            if(searchbox.classList.contains('active')){
                buy.style.display = "none";
            }
            else {
                buy.style.display = "block";
            }
        }
        else {
            buy.style.display = "block";
        }
    }
    const x = window.matchMedia("(max-width: 820px)")
    query(x)
    
    
}
const clear = document.querySelector('.clear');
clear.onclick = function() {
    document.getElementById('mysearch').value = '';
}
//hambuer menu
const menu = document.querySelector('.nav-hamburger');
const nav = document.querySelector('.nav')
const fadesElem = document.querySelectorAll('.has-fade');

menu.addEventListener('click', function(){
    // menu.classList.toggle('open');
    if(menu.classList.contains('open')) {
        menu.classList.remove('open')
        fadesElem.forEach(function(elements){
            elements.classList.remove('fade-in');
            elements.classList.add('fade-out');
        })
    }
    else {
        menu.classList.add('open');
        fadesElem.forEach(function(elements){
            elements.classList.remove('fade-out')
            elements.classList.add('fade-in');
        })
    }
});

// cursor 
 const bar1 = document.querySelector('.bar1');
 const bar2 = document.querySelector('.bar2');
 const bar = document.querySelector('.bar');
 bar.addEventListener('click', function(){
    if(bar1.style.background = "rgb(91, 183, 245)") {
        bar1.style.background = "rgb(149, 147, 147)";
        bar2.style.background ="rgb(91, 183, 245)";
    }
    else if(bar2.style.background = "rgb(149, 147, 147)") {
        bar2.style.background = "rgb(91, 183, 245);";
        bar1.style.background = "rgb(149, 147, 147)";
    }
    else {
        bar1.style.background = "rgb(149, 147, 147)";
        bar2.style.background ="rgb(91, 183, 245)";
    }
 });

 //script for slideshow
 var counter = 1;
 setInterval(function(){
    document.getElementById('rd' + counter).checked = true;
    counter ++;
    if(counter > 3) {
        counter = 1;
    }
 }, 3000);