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



