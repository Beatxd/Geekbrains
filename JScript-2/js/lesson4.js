;(function ($) {
    'use strict';
    $("#tab1").click(function(){clickOnTab('#tab1','#case1')});
    $("#tab2").click(function(){clickOnTab('#tab2','#case2')});
    $("#tab3").click(function(){clickOnTab('#tab3','#case3')});
    $("#tab4").click(function(){clickOnTab('#tab4','#case4')});
    function clickOnTab(tab, strCase) {
        $('.hr-menu ~ div').hide(); // прячем все дивы с контентом
        $("ul.hr-menu li").removeClass('active-tab'); // убираем со всех вкладок активность
        $(strCase).show(); // показываем переданный див
        $(tab).addClass('active-tab'); // делаем активной переданную вкладку
    }

})(jQuery);
