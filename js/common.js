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

    //footer btn
    $('.fopenBtn').on('click',function(){
        var F_BTN = $(this);
        if(F_BTN.hasClass('fcloseBtn')){
            F_BTN.removeClass('fcloseBtn');
            $('.fcontentBox').removeClass('on');
        }else{
            F_BTN.addClass('fcloseBtn');
            $('.fcontentBox').addClass('on');
        }
    });

    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    // alert(page_id);

    //target.knbIntro.html.introSection2
    //발레단소개
    if (page_id == 'introSection1') {
        $('html, body').animate({
            scrollTop: $('#introSection' + page_id).offset(0).top
        }, 500);
    } else if (page_id == 'introSection2') {
        $('html, body').animate({
            scrollTop: $('#introSection' + page_id).offset(0).top
        }, 500);
    } else if (page_id == 'introSection3') {
        $('html, body').animate({
            scrollTop: $('#introSection' + page_id).offset(0).top
        }, 500);
    } else if (page_id == 'introSection4') {
        $('html, body').animate({
            scrollTop: $('#introSection' + page_id).offset(0).top
        }, 500);
    } else if (page_id == 'introSection5') {
        $('html, body').animate({
            scrollTop: $('#introSection' + page_id).offset(0).top
        }, 500);
    } else if (page_id == 'introSection5') {
        $('html, body').animate({
            scrollTop: $('#introSection' + page_id).offset(0).top
        }, 500);
    } else if (page_id == 'introSection6') {
        $('html, body').animate({
            scrollTop: $('#introSection' + page_id).offset(0).top
        }, 500);
    } 
    //발레단사람들
    else if (page_id == 'crueSection1') {
        $('html, body').animate({
            scrollTop: $('#crueSection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'crueSection2') {
        $('html, body').animate({
            scrollTop: $('#crueSection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'crueSection3') {
        $('html, body').animate({
            scrollTop: $('#crueSection' + page_id).offset().top
        }, 500);
    }
    //공연정보
    else if (page_id == 'scheduleSection1') {
        $('html, body').animate({
            scrollTop: $('#scheduleSection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'scheduleSection2') {
        $('html, body').animate({
            scrollTop: $('#scheduleSection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'scheduleSection3') {
        $('html, body').animate({
            scrollTop: $('#scheduleSection' + page_id).offset().top
        }, 500);
    }
    //후원회
    else if (page_id == 'supportSection1') {
        $('html, body').animate({
            scrollTop: $('#supportSection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'supportSection2') {
        $('html, body').animate({
            scrollTop: $('#supportSection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'supportSection3') {
        $('html, body').animate({
            scrollTop: $('#supportSection' + page_id).offset().top
        }, 500);
    }
    //아카데미
    else if (page_id == 'academyySection1') {
        $('html, body').animate({
            scrollTop: $('#academyySection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'academyySection2') {
        $('html, body').animate({
            scrollTop: $('#academyySection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'academyySection3') {
        $('html, body').animate({
            scrollTop: $('#academyySection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'academyySection4') {
        $('html, body').animate({
            scrollTop: $('#academyySection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'academyySection5') {
        $('html, body').animate({
            scrollTop: $('#academyySection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'academyySection6') {
        $('html, body').animate({
            scrollTop: $('#academyySection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'academyySection7') {
        $('html, body').animate({
            scrollTop: $('#academyySection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'academyySection8') {
        $('html, body').animate({
            scrollTop: $('#academyySection' + page_id).offset().top
        }, 500);
    }
    //소식
    else if (page_id == 'newsSection1') {
        $('html, body').animate({
            scrollTop: $('#newsSection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'newsSection2') {
        $('html, body').animate({
            scrollTop: $('#newsSection' + page_id).offset().top
        }, 500);
    } else if (page_id == 'newsSection3') {
        $('html, body').animate({
            scrollTop: $('#newsSection' + page_id).offset().top
        }, 500);
    }
});