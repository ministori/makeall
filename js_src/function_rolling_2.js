/**
 *
 * 1. 이벤트( 이벤트 대상 )
 *
 *    - 페이지 : 로딩 / 버튼 : 클릭
 *
 * 2. 기능 - 함수
 *
 *    - 이미지 페이드 인-아웃( 이전것, 다음것 보여줌 )
 *
 *    - 이미지 배치, 인덱스 번호 초기화
 *
 */

/**
 *
 * 3. 기능 추가
 *
 *    - 페이지 표시 : pagination
 *
 *    - 재생/일시정지
 *
 */

$(function(){

    var currentIndex = 0; // 보이는 상태에서 사라지는 이미지 인덱스 변수
    var index = 0; // 안보인는 상태에서 나타나는 이미지 인덱스 변수
    var visualLength = 0; // 이미지의 개수 저장 변수
    var $visual = $('.js-fade');

    // 초기화 함수 정의
    function fadeInit(){

        currentIndex = 0;
        visualLength = $visual.length;

        $visual.hide().eq(0).show();

        // 페이지 표시 함수 실행
        pagination();

    }

    // 다음 이미지 함수
    function fadeNext(){
        if( index >= visualLength ){ index = 0; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).stop().fadeIn();

        currentIndex = index;
        index++;
1
        currentPage();
    }

    // 이전 이미지 함수
    function fadePrev(){
        if( index <= -1 ){ index = visualLength-1; }

        $visual.eq(currentIndex).stop().fadeOut();
        $visual.eq(index).fadeIn();

        currentIndex = index;
        index--;

        currentPage();
    }

    // 페이지 표시 함수
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

        // 현재 페이지 표시 함수 실행
        currentPage();

    }

    // 현재 페이지 표시 함수
    function currentPage(){
        $('.pagination-item').children('.pagination-button').removeClass('on');
        $('.pagination-item').eq(currentIndex).children('.pagination-button').addClass('on');
    }

    // 초기화 함수 실행
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