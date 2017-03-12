jQuery(document).ready(function ($) {
    $('.top-nav > ul > li ul').each(function (index, element) {
        var count = $(element).find('li').length;
        var content = '<span class="count-number"> ' + count + '</span>';
        $(element).closest('li').children('a').append(content);
    });
    $('.top-nav > ul li:has(ul)').addClass('submenu');
    $('.top-nav > ul ul li:has(ul)').addClass('sub-submenu').removeClass('submenu');
    $('.top-nav > ul li.submenu > a').attr('aria-haspopup', 'true').click(function () {
        //Close other open sub menus
        $('.top-nav > ul li.submenu > ul').removeClass('show-ul', 'slow');
        $('.top-nav > ul li.submenu:hover > ul').toggleClass('show-ul', 'slow');
    });
    $('.top-nav > ul ul > li.sub-submenu > a').attr('aria-haspopup', 'true').click(function () {
        //Close other open sub menus
        $('.top-nav ul ul li > ul').removeClass('show-ul', 'slow');
        $('.top-nav ul ul li:hover > ul').toggleClass('show-ul', 'slow');
    });
    //Mobile aside navigation  
    $('.nav-text').click(function () {
        $('.top-nav > ul').toggleClass('show-menu', 'slow');  // slowi pitää viä tehä
    });
    
});
