jQuery(function($){

    $('select').chosen({
        "disable_search": true,
         width: '170px'
    });

    $('select').change(function(){
        var o = $(this).val();
        $(this).parent('.sort').siblings('.graph').children('li').each(function(){
            var h = Math.ceil(168*$(this).data(o)/100),
                p = $(this).data(o) + '<small>%</small>';
            $(this).height(h).children('i').html(p);
        });
    });

    $('select').trigger('change');

    // PARALLAX
    $(document).scroll(function(){
        var nm = Math.ceil($("html").scrollTop());
        var nw = Math.ceil($("body").scrollTop());
        var n = (nm > nw ? nm : nw);  //USE n FOR CALCULATIONS

        $('#banner').css('background-position','center ' + n / 2 + 'px');

    });

    $(document).ready(function(){
        $('body').removeClass('nogo');
    });

    jQuery(document).ready(function() {
        setTimeout(function() {
            go();
        }, 1000);
    });

    $.fn.isOnScreen = function(){
        var win = $(window);
        var viewport = {
            top : win.scrollTop()
        };
        viewport.bottom = viewport.top + win.height() - 120;
        var bounds = this.offset();
        bounds.bottom = bounds.top + this.outerHeight() + 120;
        return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    $.fn.changeGo = function(){
        if($(this).length > 0){
            if($(this).isOnScreen() === true){
                $(this).addClass('go').removeClass('nogo');
            }else{
                $(this).removeClass('go').addClass('nogo');
            }
        }
    };

    function go(){
        $('section').each(function(){ $(this).changeGo(); });
    }

    $('section').addClass('nogo');

    $(document).on('scroll', function(){
        go();
    });

    $('#nav').click(function(){
        $('div',this).toggleClass('open');
    });

    $('#nav a').click(function(){
        var scroll = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop : scroll},400);
        $('#nav > div').removeClass('open');
        return false;
    });

});
