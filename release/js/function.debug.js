$(function(){

    /**
     * function
     */

    // type 1
    function accDisplayInit(){

        $('.acc-2depth-display').each(function(index){

            $(this).data({'open': 'false'})

        });
    }

    function toggleDisplaySub( $depth1Link ){

        var $depth1LinkSub = $depth1Link.next('.acc-2depth-display');
        var $depth1LinkSubSibling = $depth1LinkSub.parent().siblings().children('.acc-2depth-display');

        if( $depth1LinkSub.data('open') == 'false' ){

            $depth1LinkSubSibling
                .stop()
                .removeClass('on')
                .data('open', 'false')
                .prev('.acc-1depth-display')
                .addClass('fold');

            $depth1LinkSub
                .stop()
                .addClass('on')
                .data('open', 'true')
                .prev('.acc-1depth-display')
                .removeClass('fold');

        } else {

            $depth1LinkSub
                .stop()
                .removeClass('on')
                .data('open', 'false')
                .prev('.acc-1depth-display')
                .addClass('fold');

        }

    }


    // type 2
    function accInit(){

        $('.animate-2depth').each(function(index){

            $(this)
                .data({

                'open': 'false',

                'height': $(this).height()

                })
                .css({height : 0})
                .prev('.animate-1depth-link')
                .addClass('fold');

        });
    }

    function toggleSub( $depth1Link ){

        var $depth1LinkSub = $depth1Link.next('.animate-2depth');
        var $depth1LinkSubSibling = $depth1LinkSub.parent().siblings().children('.animate-2depth');

        if( $depth1LinkSub.data('open') == 'false' ){

            $depth1LinkSubSibling
                .stop()
                .animate({height:0})
                .data('open', 'false')
                .prev('.animate-1depth-link')
                .addClass('fold');

            $depth1LinkSub
                .stop()
                .animate({height: $depth1LinkSub.data('height')})
                .data('open', 'true')
                .prev('.animate-1depth-link')
                .removeClass('fold');

        } else {

            $depth1LinkSub
                .stop()
                .animate({height: 0})
                .data('open', 'false')
                .prev('.animate-1depth-link')
                .addClass('fold');

        }

    }

    // type 3
    function accTransitionInit(){

        $('.acc-2depth-transition').each(function(index){

            $(this)
                .data({

                    'open': 'false',

                    'height': $(this).height()

                })
                .css({height : 0})
                .prev('.animate-1depth-link')
                .addClass('fold');

        });
    }

    function toggleTransitionSub( $depth1Link ){

        var $depth1LinkSub = $depth1Link.next('.acc-2depth-transition');
        var $depth1LinkSubSibling = $depth1LinkSub.parent().siblings().children('.acc-2depth-transition');

        if( $depth1LinkSub.data('open') == 'false' ){

            $depth1LinkSubSibling
                .stop()
                .css({height:0})
                .data('open', 'false')
                .prev('.transition-1depth-link')
                .addClass('fold');

            $depth1LinkSub
                .stop()
                .css({height: $depth1LinkSub.data('height')})
                .data('open', 'true')
                .prev('.transition-1depth-link')
                .removeClass('fold');

        } else {

            $depth1LinkSub
                .stop()
                .css({height: 0})
                .data('open', 'false')
                .prev('.transition-1depth-link')
                .addClass('fold');

        }

    }



    /**
     * event
     */

    // type 1
    accDisplayInit();

    $('.acc-1depth-display').on('click', function(e){

        e.preventDefault();

        toggleDisplaySub( $(this) );

    });


    // type 2
    accInit();

    $('.animate-1depth-link').on('click', function(e){

        e.preventDefault();

        toggleSub( $(this) );

    });

    // type 3
    accTransitionInit();

    $('.transition-1depth-link').on('click', function(e){

        e.preventDefault();

        toggleTransitionSub( $(this) );

    });

});




// ¾ÆÄÚµğ¾ğ ¸Ş´º Å¸ÀÔ 2

$(function(){

    function menuAnimateInit(){
        $('.animate-1depth-link').data({'open' : 'false'});

        $('.animate-2depth').each(function(index){

            $(this).data({
                'height' : $(this).height()
            }).css({
                height : 0
            });

        });
    }

    function menuAnimateOn( $depth1 ){
        $depth1.parent('.acc-1depth-item').siblings().children('.animate-2depth').stop().animate({
            height : 0
        });
        $depth1.parent('.acc-1depth-item').siblings().children('.animate-1depth-link').data({'open' : 'false'});
        $depth1.next('.animate-2depth').stop().animate({
            height : $depth1.next('.animate-2depth').data('height')
        });
    }

    function menuAnimateOff( $depth1 ){
        $depth1.next('.animate-2depth').stop().animate({
            height : 0
        });
    }

    function menuArrowAnimateOn( $depth1 ){
        $depth1.parent('.acc-1depth-item').siblings().children('.animate-1depth-link').removeClass('on').data({'open' : 'false'});
        $depth1.addClass('on');
    }

    function menuArrowAnimateOff( $depth1 ){
        $depth1.removeClass('on');
    }

    // ÃÊ±âÈ­ ÇÔ¼ö ½ÇÇà
    menuAnimateInit();

    // 1µª½º ¸Ş´º Å¬¸¯½Ã µ¿ÀÛ ½ÇÇà
    $('.animate-1depth-link').on('click', function(){

        if( $(this).data('open') == 'false' ){
            // ¿­±â
            menuArrowAnimateOn( $(this) );
            menuAnimateOn( $(this) );

            $(this).data({'open' : 'true'});

        } else {
            // ´İ±â
            menuArrowAnimateOff( $(this) );
            menuAnimateOff( $(this) );

            $(this).data({'open' : 'false'});
        }


    });

});
/**
 *
 * 1. ì´ë²¤íŠ¸( ì´ë²¤íŠ¸ ëŒ€ìƒ )
 *
 *    - í˜ì´ì§€ : ë¡œë”© / ë²„íŠ¼ : í´ë¦­
 *
 * 2. ê¸°ëŠ¥ - í•¨ìˆ˜
 *
 *    - ì´ë¯¸ì§€ ì˜¤ë¥¸ìª½->ì™¼ìª½ìœ¼ë¡œ ìŠ¬ë¼ì´ë”©( ë‹¤ìŒê²ƒ ë³´ì—¬ì¤Œ )
 *
 *    - ì´ë¯¸ì§€ ì™¼ìª½->ì˜¤ë¥¸ìª½ìœ¼ë¡œ ìŠ¬ë¼ì´ë”©( ì´ì „ê²ƒ ë³´ì—¬ì¤Œ )
 *
 *    - ì´ë¯¸ì§€ ë°°ì¹˜, ì¸ë±ìŠ¤ ë²ˆí˜¸ ì´ˆê¸°í™”
 *
 */

$(function(){

    var currentIndex = 0; // í™”ë©´ ì•ˆì—ì„œ ë°”ê¹¥ìœ¼ë¡œ ë‚˜ê°€ëŠ” ì´ë¯¸ì§€ ì¸ë±ìŠ¤ ë³€ìˆ˜
    var index = 0; // í™”ë©´ ë°”ê¹¥ì—ì„œ ì•ˆìœ¼ë¡œ ë“¤ì–´ì˜¤ëŠ” ì´ë¯¸ì§€ ì¸ë±ìŠ¤ ë³€ìˆ˜
    var visualLength = 0; // ì´ë¯¸ì§€ì˜ ê°œìˆ˜ ì €ì¥ ë³€ìˆ˜
    var $visual = $('.js-ani');


    // ì´ˆê¸°í™” í•¨ìˆ˜ ì •ì˜
    function rollingInit(){

        currentIndex = 0;
        visualLength = $visual.length;

        $visual.css({
            left : 900
        }).eq(0).css({
            left : 0
        });

    }

    // ì´ë¯¸ì§€ ì´ë™( ì˜¤ë¥¸ìª½ -> ì™¼ìª½ )
    function moveLeft(){
        if( index >= visualLength ){ index = 0; }

        $visual.eq(currentIndex).stop().animate({left : -900}, 1000);
        $visual.eq(index).css({left : 900}).stop().animate({left : 0}, 1000);

        currentIndex = index;
        index++;

    }

    // ì´ë¯¸ì§€ ì´ë™( ì™¼ìª½ -> ì˜¤ë¥¸ìª½ )
    function moveRight(){
        if( index <= -1 ){ index = visualLength-1; }

        $visual.eq(currentIndex).stop().animate({left : 900}, 1000);
        $visual.eq(index).css({left : -900}).stop().animate({left : 0}, 1000);

        currentIndex = index;
        index--;
    }

    // load : ì´ë¯¸ì§€ê°€ ë¡œë”© ì™„ë£Œëœí›„ ë°œìƒë˜ëŠ” ì´ë²¤íŠ¸
    // HTML DOM Element : ë¬¸ì ë°ì´í„°
    $(document).on('load', function(){
    });

    // ì´ˆê¸°í™” í•¨ìˆ˜ ì‹¤í–‰
    rollingInit();

    $('.arrow-btn.next').on('click', function(){
        index = currentIndex + 1;

        if( !$('.js-ani').is(':animated') ){
            moveLeft();
        }

    });

    $('.arrow-btn.prev').on('click', function(){
        index = currentIndex - 1;

        if( !$('.js-ani').is(':animated') ){
            moveRight();
        }

    });


});
/**
 *
 * 1. ì´ë²¤íŠ¸( ì´ë²¤íŠ¸ ëŒ€ìƒ )
 *
 *    - í˜ì´ì§€ : ë¡œë”© / ë²„íŠ¼ : í´ë¦­
 *
 * 2. ê¸°ëŠ¥ - í•¨ìˆ˜
 *
 *    - ì´ë¯¸ì§€ í˜ì´ë“œ ì¸-ì•„ì›ƒ( ì´ì „ê²ƒ, ë‹¤ìŒê²ƒ ë³´ì—¬ì¤Œ )
 *
 *    - ì´ë¯¸ì§€ ë°°ì¹˜, ì¸ë±ìŠ¤ ë²ˆí˜¸ ì´ˆê¸°í™”
 *
 */

/**
 *
 * 3. ê¸°ëŠ¥ ì¶”ê°€
 *
 *    - í˜ì´ì§€ í‘œì‹œ : pagination
 *
 *    - ì¬ìƒ/ì¼ì‹œì •ì§€
 *
 */

$(function(){

    var currentIndex = 0; // ë³´ì´ëŠ” ìƒíƒœì—ì„œ ì‚¬ë¼ì§€ëŠ” ì´ë¯¸ì§€ ì¸ë±ìŠ¤ ë³€ìˆ˜
    var index = 0; // ì•ˆë³´ì¸ëŠ” ìƒíƒœì—ì„œ ë‚˜íƒ€ë‚˜ëŠ” ì´ë¯¸ì§€ ì¸ë±ìŠ¤ ë³€ìˆ˜
    var visualLength = 0; // ì´ë¯¸ì§€ì˜ ê°œìˆ˜ ì €ì¥ ë³€ìˆ˜
    var $visual = $('.js-fade');

    // ì´ˆê¸°í™” í•¨ìˆ˜ ì •ì˜
    function fadeInit(){

        currentIndex = 0;
        visualLength = $visual.length;

        $visual.hide().eq(0).show();

        // í˜ì´ì§€ í‘œì‹œ í•¨ìˆ˜ ì‹¤í–‰
        pagination();

    }

    // ë‹¤ìŒ ì´ë¯¸ì§€ í•¨ìˆ˜
    function fadeNext(){
        if( index >= visualLength ){ index = 0; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).stop().fadeIn();

        currentIndex = index;
        index++;
1
        currentPage();
    }

    // ì´ì „ ì´ë¯¸ì§€ í•¨ìˆ˜
    function fadePrev(){
        if( index <= -1 ){ index = visualLength-1; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).fadeIn();

        currentIndex = index;
        index--;

        currentPage();
    }

    // í˜ì´ì§€ í‘œì‹œ í•¨ìˆ˜
    function pagination(){

        for(var i=0; i<visualLength; i++){

            var pageItem = '';
            pageItem += '<li class="pagination-item">';
            pageItem += '<button type="button" class="pagination-button">';
            pageItem += (i+1);
            pageItem += '</button>';
            pageItem += '</li>';

            $('.pagination').append(pageItem);
        }

        $('.control').css({'margin-left' : -$('.control').width() / 2});

        // í˜„ì¬ í˜ì´ì§€ í‘œì‹œ í•¨ìˆ˜ ì‹¤í–‰
        currentPage();

    }

    // í˜„ì¬ í˜ì´ì§€ í‘œì‹œ í•¨ìˆ˜
    function currentPage(){
        $('.pagination-item').children('.pagination-button').removeClass('on');
        $('.pagination-item').eq(currentIndex).children('.pagination-button').addClass('on');
    }

    // ì´ˆê¸°í™” í•¨ìˆ˜ ì‹¤í–‰
    fadeInit();

    $('.js-fade-btn.next').on('click', function(){
        index = currentIndex + 1;

        if( !$('.visual').is(':animated') ){
            fadeNext();
        }

    });

    $('.js-fade-btn.prev').on('click', function(){
        index = currentIndex - 1;

        if( !$('.visual').is(':animated') ){
            fadePrev();
        }

    });

    $('.pagination-button').on('click', function(){
        index = $(this).index('.pagination-button');

        if( !$('.visual').is(':animated') ){
            fadePrev();
        }

    });


});
$(function(){

    function tabSelect( $allTab, $thisTab, $tabContent ){

        var tabNumber = $allTab.index( $thisTab );

        $allTab.removeClass('on').eq(tabNumber).addClass('on');

        $tabContent.removeClass('on').eq(tabNumber).addClass('on');

    }

    // type 1
    $('.tab-menu-list').on('click', function(){

        tabSelect( $('.tab-menu-list'), $(this), $('.tab-content') );

    });


    // type 2
    $('.tab-heading').on('click', function(){

        tabSelect( $('.tab-heading'), $(this), $('.tab-paragraph') );

    });

});




/**
 *
 * 1. ÀÌº¥Æ®
 *
 * 2. ±â´É - ÇÔ¼ö
 *
 */

$(function(){

    // on Å¬·¡½º Ãß°¡ - tab, tab-content
    function tabOn( $tab, index ){

        $tab.siblings().removeClass('on');
        $tab.addClass('on');

        var $tabContent = $('.tab-content').eq(index);

        $tabContent.siblings().removeClass('on');
        $tabContent.addClass('on');

    }

    $('.tab-menu-list').on('click', function(){

        var index = $(this).index('.tab-menu-list');

        tabOn( $(this), index );

    });

});

/**
 *
 * 1. ÀÌº¥Æ®
 *
 * 2. ±â´É - ÇÔ¼ö
 *
 */

$(function(){

    // on Å¬·¡½º Ãß°¡ - tab, tab-content
    function tabOn( $tab, index ){

        $tab.siblings('.tab-heading').removeClass('on');
        $tab.addClass('on');

        var $tabContent = $('.tab-paragraph').eq(index);

        $tabContent.siblings('.tab-paragraph').removeClass('on');
        $tabContent.addClass('on');

    }

    $('.tab-heading').on('click', function(){

        var index = $(this).index('.tab-heading');

        tabOn( $(this), index );

    });

});

/**
 *
 * javascript coding ´Ü°è
 *
 * 1. 2°³ÀÇ Ä«Å×°í¸® »ı°¢
 *
 *  1) ÀÌº¥Æ®
 *
 *  2) ±â´É - ÇÔ¼ö
 *
 */

$(function(){

    /**
     * ÇÊ¿äÇÑ ±â´É - ÃÊ±âÈ­ ±â´É, ¼­ºê¸Ş´º¸¦ º¸¿©ÁÖ´Â ±â´É, ¼­ºê¸Ş´º¸¦ ¼û±â´Â ±â´É, È­»ìÇ¥¸¦ ¿À¸¥ÂÊÀ¸·Î º¸°ÔÇÏ´Â ±â´É, È­»ìÇ¥¸¦ ¾Æ·¡·Î º¸°ÔÇÏ´Â ±â´É
     *
     */

    // ÃÊ±âÈ­ ÇÔ¼ö
    function menuTransInit(){
        $('.transition-1depth-link').data({'open' : 'false'});

        $('.acc-2depth-transition').each(function(index){

            $(this)
                .data({'height' : $(this).height()})
                .css({height:0});
        });
    }

    // ¼­ºê¸Ş´º º¸¿©ÁÖ´Â ÇÔ¼ö
    function menuTransOn( $depth1 ){
        // $(this) => depth1

        var $currentSiblingsChildrenSub = $depth1.parent().siblings().children('.acc-2depth-transition');
        var $currentNextSub = $depth1.next('.acc-2depth-transition');

        $currentSiblingsChildrenSub.css({height : 0});
        $currentNextSub.css({height : $currentNextSub.data('height')});
    }

    // ¼­ºê¸Ş´º ¼û±â´Â ÇÔ¼ö
    function menuTransOff( $depth1 ){

        var $currentNextSub = $depth1.next('.acc-2depth-transition');

        $currentNextSub.css({height : 0});
    }

    // È­»ìÇ¥ ¾Æ·¡·Î º¸°ÔÇÏ´Â ÇÔ¼ö
    function arrowTransOn( $depth1 ){

        var $currentSiblingsChildrenAnchor = $depth1.parent().siblings().children('.transition-1depth-link');

        $currentSiblingsChildrenAnchor.removeClass('on');
        $depth1.addClass('on');
    }

    // È­»ìÇ¥ ¿À¸¥ÂÊ º¸°ÔÇÏ´Â ÇÔ¼ö
    function arrowTransOff( $depth1 ){
        $depth1.removeClass('on');
    }

    // ÃÊ±âÈ­ ÇÔ¼ö ½ÇÇà
    menuTransInit();

    $('.transition-1depth-link').on('click', function(e){
        // Å¬¸¯ÇßÀ» ¶§ ½ÇÇà

        e.preventDefault();

        if( $(this).data('open') == 'false' ){

            menuTransOn( $(this) );
            arrowTransOn( $(this) );

            $(this).data({'open' : 'true'});

        } else {

            menuTransOff( $(this) );
            arrowTransOff( $(this) );

            $(this).data({'open' : 'false'});

        }


    });

});
