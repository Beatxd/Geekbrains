;(function ($) {
    'use strict';
    // $(".hr-menu").click(function(){clickOnTab()}); // не удается корректно передать параметры, поэтому сделал то что ниже с 10 строки
    // function clickOnTab(tab, strCase) {
    //     $('.hr-menu ~ div').hide(); // прячем все дивы с контентом
    //     $("ul.hr-menu li").removeClass('active-tab'); // убираем со всех вкладок активность
    //     $(strCase).show(); // показываем переданный див
    //     tab.addClass('active-tab'); // делаем активной переданную вкладку
    // }
    $("#tab1").click(function () {
        $('.hr-menu ~ div').hide();
        $('#case1').show();
        $("ul.hr-menu li").removeClass('active-tab');
        $("#tab1").addClass('active-tab');
    });
    $("#tab2").click(function () {
        $('.hr-menu ~ div').hide();
        $('#case2').show();
        $("ul.hr-menu li").removeClass('active-tab');
        $("#tab2").addClass('active-tab');
    });
    $("#tab3").click(function () {
        $('.hr-menu ~ div').hide();
        $('#case3').show();
        $("ul.hr-menu li").removeClass('active-tab');
        $("#tab3").addClass('active-tab');
    });
    $("#tab4").click(function () {
        $('.hr-menu ~ div').hide();
        $('#case4').show();
        $("ul.hr-menu li").removeClass('active-tab');
        $("#tab4").addClass('active-tab');
    });
})(jQuery);
