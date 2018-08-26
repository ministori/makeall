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
