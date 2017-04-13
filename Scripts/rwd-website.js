jQuery(document).ready(function ($) {
    $('.top-nav > ul li:has(ul)').addClass('submenu');
    $('.top-nav > ul li.submenu > a').click(function () {
        //Close other open sub menus
        $('.top-nav > ul li.submenu > ul').removeClass('show-ul');
        $('.top-nav > ul li.submenu:hover > ul').toggleClass('show-ul');
    });
    //Mobile aside navigation  
    $('.nav-text').click(function () {
        $('.top-nav > ul').toggleClass('show-menu');
        $('.top-nav > ul li.submenu > ul').removeClass('show-ul');
    });
});

/* Ei jQuery-versio, keskeneräinen
window.onload = function () {
    var a = document.querySelector('.top-nav > ul li');
    if (a.querySelector('ul') != null)
    { a.className += "submenu"; }
    document.querySelector('.top-nav > ul li.submenu > a').addEventListener("click", function( event ) {
        var c = document.querySelector('.top-nav > ul li.submenu > ul');
        c.className = "";
        var d = document.querySelector('.top-nav > ul li.submenu:hover > ul');
        d.classList.toggle('show-ul');
    }, false);
    document.getElementById('nav-icon').addEventListener("click", function( event ) {
        var e = document.querySelector('.top-nav > ul');
        e.classList.toggle('show-menu');  // slowi luokka tekemättä
    }, false);
}
*/