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
