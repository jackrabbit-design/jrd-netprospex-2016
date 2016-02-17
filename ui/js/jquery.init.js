$('select').chosen({
    "disable_search": true,
     width: '170px'
});

$('select').change(function(){
    var o = $(this).val();
    $(this).parent('.sort').siblings('.graph').children('li').each(function(){
        $(this).height(Math.ceil(168*$(this).data(o)/100));
    });
});
