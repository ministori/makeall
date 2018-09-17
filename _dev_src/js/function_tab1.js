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
