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



