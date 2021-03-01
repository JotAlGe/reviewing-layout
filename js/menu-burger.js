function effectBurger(){
    var but = document.getElementById('but');
    var span1 = document.getElementById('primer');
    var span2 = document.getElementById('segundo');
    var span3 = document.getElementById('tercero');
    var nav = document.getElementById('nav');
    var opacity = 1;

    span1.classList.toggle('active_positive');
    span2.classList.toggle('opacity');
    span3.classList.toggle('active_negative');
    nav.classList.toggle('nav-hidden');
    nav.classList.toggle('list__link--color');

    if(span1.classList.contains('active_positive') && span3.classList.contains('active_negative')){
        span1.style.backgroundColor = '#D9D89E';
        span3.style.backgroundColor = '#D9D89E';
    }else{
        span1.style.backgroundColor = '#735F5F';
        span3.style.backgroundColor = '#735F5F';
    }

}
but.addEventListener('click',  effectBurger);