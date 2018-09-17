/**
 *
 * 1. 이벤트( 이벤트 대상 )
 *
 *    - 페이지 : 로딩 / 버튼 : 클릭
 *
 * 2. 기능 - 함수
 *
 *    - 이미지 오른쪽->왼쪽으로 슬라이딩( 다음것 보여줌 )
 *
 *    - 이미지 왼쪽->오른쪽으로 슬라이딩( 이전것 보여줌 )
 *
 *    - 이미지 배치, 인덱스 번호 초기화
 *
 */

$(function(){

    var currentIndex = 0; // 화면 안에서 바깥으로 나가는 이미지 인덱스 변수
    var index = 0; // 화면 바깥에서 안으로 들어오는 이미지 인덱스 변수
    var visualLength = 0; // 이미지의 개수 저장 변수
    var $visual = $('.js-ani');


    // 초기화 함수 정의
    function rollingInit(){

        currentIndex = 0;
        visualLength = $visual.length;

        $visual.css({
            left : 900
        }).eq(0).css({
            left : 0
        });

    }

    // 이미지 이동( 오른쪽 -> 왼쪽 )
    function moveLeft(){
        if( index >= visualLength ){ index = 0; }

        $visual.eq(currentIndex).stop().animate({left : -900}, 1000);
        $visual.eq(index).css({left : 900}).stop().animate({left : 0}, 1000);

        currentIndex = index;
        index++;

    }

    // 이미지 이동( 왼쪽 -> 오른쪽 )
    function moveRight(){
        if( index <= -1 ){ index = visualLength-1; }

        $visual.eq(currentIndex).stop().animate({left : 900}, 1000);
        $visual.eq(index).css({left : -900}).stop().animate({left : 0}, 1000);

        currentIndex = index;
        index--;
    }

    // load : 이미지가 로딩 완료된후 발생되는 이벤트
    // HTML DOM Element : 문자 데이터
    $(document).on('load', function(){
    });

    // 초기화 함수 실행
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