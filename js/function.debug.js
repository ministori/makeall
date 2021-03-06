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




// 아코디언 메뉴 타입 2

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

    // 초기화 함수 실행
    menuAnimateInit();

    // 1뎁스 메뉴 클릭시 동작 실행
    $('.animate-1depth-link').on('click', function(){

        if( $(this).data('open') == 'false' ){
            // 열기
            menuArrowAnimateOn( $(this) );
            menuAnimateOn( $(this) );

            $(this).data({'open' : 'true'});

        } else {
            // 닫기
            menuArrowAnimateOff( $(this) );
            menuAnimateOff( $(this) );

            $(this).data({'open' : 'false'});
        }


    });

});
/**
 *
 * 1. �씠踰ㅽ듃( �씠踰ㅽ듃 ����긽 )
 *
 *    - �럹�씠吏� : 濡쒕뵫 / 踰꾪듉 : �겢由�
 *
 * 2. 湲곕뒫 - �븿�닔
 *
 *    - �씠誘몄�� �삤瑜몄そ->�쇊履쎌쑝濡� �뒳�씪�씠�뵫( �떎�쓬寃� 蹂댁뿬以� )
 *
 *    - �씠誘몄�� �쇊履�->�삤瑜몄そ�쑝濡� �뒳�씪�씠�뵫( �씠�쟾寃� 蹂댁뿬以� )
 *
 *    - �씠誘몄�� 諛곗튂, �씤�뜳�뒪 踰덊샇 珥덇린�솕
 *
 */

$(function(){

    var currentIndex = 0; // �솕硫� �븞�뿉�꽌 諛붽묑�쑝濡� �굹媛��뒗 �씠誘몄�� �씤�뜳�뒪 蹂��닔
    var index = 0; // �솕硫� 諛붽묑�뿉�꽌 �븞�쑝濡� �뱾�뼱�삤�뒗 �씠誘몄�� �씤�뜳�뒪 蹂��닔
    var visualLength = 0; // �씠誘몄���쓽 媛쒖닔 ����옣 蹂��닔
    var $visual = $('.js-ani');


    // 珥덇린�솕 �븿�닔 �젙�쓽
    function rollingInit(){

        currentIndex = 0;
        visualLength = $visual.length;

        $visual.css({
            left : 900
        }).eq(0).css({
            left : 0
        });

    }

    // �씠誘몄�� �씠�룞( �삤瑜몄そ -> �쇊履� )
    function moveLeft(){
        if( index >= visualLength ){ index = 0; }

        $visual.eq(currentIndex).stop().animate({left : -900}, 1000);
        $visual.eq(index).css({left : 900}).stop().animate({left : 0}, 1000);

        currentIndex = index;
        index++;

    }

    // �씠誘몄�� �씠�룞( �쇊履� -> �삤瑜몄そ )
    function moveRight(){
        if( index <= -1 ){ index = visualLength-1; }

        $visual.eq(currentIndex).stop().animate({left : 900}, 1000);
        $visual.eq(index).css({left : -900}).stop().animate({left : 0}, 1000);

        currentIndex = index;
        index--;
    }

    // load : �씠誘몄��媛� 濡쒕뵫 �셿猷뚮맂�썑 諛쒖깮�릺�뒗 �씠踰ㅽ듃
    // HTML DOM Element : 臾몄옄 �뜲�씠�꽣
    $(document).on('load', function(){
    });

    // 珥덇린�솕 �븿�닔 �떎�뻾
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
 * 1. �씠踰ㅽ듃( �씠踰ㅽ듃 ����긽 )
 *
 *    - �럹�씠吏� : 濡쒕뵫 / 踰꾪듉 : �겢由�
 *
 * 2. 湲곕뒫 - �븿�닔
 *
 *    - �씠誘몄�� �럹�씠�뱶 �씤-�븘�썐( �씠�쟾寃�, �떎�쓬寃� 蹂댁뿬以� )
 *
 *    - �씠誘몄�� 諛곗튂, �씤�뜳�뒪 踰덊샇 珥덇린�솕
 *
 */

/**
 *
 * 3. 湲곕뒫 異붽��
 *
 *    - �럹�씠吏� �몴�떆 : pagination
 *
 *    - �옱�깮/�씪�떆�젙吏�
 *
 */

$(function(){

    var currentIndex = 0; // 蹂댁씠�뒗 �긽�깭�뿉�꽌 �궗�씪吏��뒗 �씠誘몄�� �씤�뜳�뒪 蹂��닔
    var index = 0; // �븞蹂댁씤�뒗 �긽�깭�뿉�꽌 �굹����굹�뒗 �씠誘몄�� �씤�뜳�뒪 蹂��닔
    var visualLength = 0; // �씠誘몄���쓽 媛쒖닔 ����옣 蹂��닔
    var $visual = $('.js-fade');

    // 珥덇린�솕 �븿�닔 �젙�쓽
    function fadeInit(){

        currentIndex = 0;
        visualLength = $visual.length;

        $visual.hide().eq(0).show();

        // �럹�씠吏� �몴�떆 �븿�닔 �떎�뻾
        pagination();

    }

    // �떎�쓬 �씠誘몄�� �븿�닔
    function fadeNext(){
        if( index >= visualLength ){ index = 0; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).stop().fadeIn();

        currentIndex = index;
        index++;
1
        currentPage();
    }

    // �씠�쟾 �씠誘몄�� �븿�닔
    function fadePrev(){
        if( index <= -1 ){ index = visualLength-1; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).fadeIn();

        currentIndex = index;
        index--;

        currentPage();
    }

    // �럹�씠吏� �몴�떆 �븿�닔
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

        // �쁽�옱 �럹�씠吏� �몴�떆 �븿�닔 �떎�뻾
        currentPage();

    }

    // �쁽�옱 �럹�씠吏� �몴�떆 �븿�닔
    function currentPage(){
        $('.pagination-item').children('.pagination-button').removeClass('on');
        $('.pagination-item').eq(currentIndex).children('.pagination-button').addClass('on');
    }

    // 珥덇린�솕 �븿�닔 �떎�뻾
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
 * 1. 이벤트
 *
 * 2. 기능 - 함수
 *
 */

$(function(){

    // on 클래스 추가 - tab, tab-content
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
 * 1. 이벤트
 *
 * 2. 기능 - 함수
 *
 */

$(function(){

    // on 클래스 추가 - tab, tab-content
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
 * javascript coding 단계
 *
 * 1. 2개의 카테고리 생각
 *
 *  1) 이벤트
 *
 *  2) 기능 - 함수
 *
 */

$(function(){

    /**
     * 필요한 기능 - 초기화 기능, 서브메뉴를 보여주는 기능, 서브메뉴를 숨기는 기능, 화살표를 오른쪽으로 보게하는 기능, 화살표를 아래로 보게하는 기능
     *
     */

    // 초기화 함수
    function menuTransInit(){
        $('.transition-1depth-link').data({'open' : 'false'});

        $('.acc-2depth-transition').each(function(index){

            $(this)
                .data({'height' : $(this).height()})
                .css({height:0});
        });
    }

    // 서브메뉴 보여주는 함수
    function menuTransOn( $depth1 ){
        // $(this) => depth1

        var $currentSiblingsChildrenSub = $depth1.parent().siblings().children('.acc-2depth-transition');
        var $currentNextSub = $depth1.next('.acc-2depth-transition');

        $currentSiblingsChildrenSub.css({height : 0});
        $currentNextSub.css({height : $currentNextSub.data('height')});
    }

    // 서브메뉴 숨기는 함수
    function menuTransOff( $depth1 ){

        var $currentNextSub = $depth1.next('.acc-2depth-transition');

        $currentNextSub.css({height : 0});
    }

    // 화살표 아래로 보게하는 함수
    function arrowTransOn( $depth1 ){

        var $currentSiblingsChildrenAnchor = $depth1.parent().siblings().children('.transition-1depth-link');

        $currentSiblingsChildrenAnchor.removeClass('on');
        $depth1.addClass('on');
    }

    // 화살표 오른쪽 보게하는 함수
    function arrowTransOff( $depth1 ){
        $depth1.removeClass('on');
    }

    // 초기화 함수 실행
    menuTransInit();

    $('.transition-1depth-link').on('click', function(e){
        // 클릭했을 때 실행

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
