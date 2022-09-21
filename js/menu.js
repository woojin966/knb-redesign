$(document).ready(function(){
    //menu script
    $('.menuBtn').mouseover(function(){
        var ACT_MENU = $(this);
        var ACT_SUB = ACT_MENU.closest('dt').next('dd');
        ACT_MENU.addClass('activeMenu');
        ACT_SUB.addClass('submenuBlk');
        //$('.headerBg').addClass('on');
    });
    $('.menuBtn').mouseout(function(){
        var ACT_MENU = $(this);
        var ACT_SUB = ACT_MENU.closest('dt').next('dd');
        ACT_MENU.removeClass('activeMenu');
        ACT_SUB.removeClass('submenuBlk');
        //$('.headerBg').removeClass('on');
    });
    $('.menusubBtn').mouseover(function(){
        var ACT_SUBM = $(this);
        var ACT_SUB = ACT_SUBM.closest('dd');
        var ACT_MENU = ACT_SUBM.closest('dd').prev('dt').children('a');
        ACT_SUBM.addClass('subHover');
        ACT_MENU.addClass('activeMenu');
        ACT_SUB.addClass('submenuBlk');
        //$('.headerBg').addClass('on');
    });
    $('.menusubBtn').mouseout(function(){
        var ACT_SUBM = $(this);
        var ACT_SUB = ACT_SUBM.closest('dd');
        var ACT_MENU = ACT_SUBM.closest('dd').prev('dt').children('a');
        ACT_SUBM.removeClass('subHover');
        ACT_MENU.removeClass('activeMenu');
        ACT_SUB.removeClass('submenuBlk');
        //$('.headerBg').removeClass('on');
    });
});