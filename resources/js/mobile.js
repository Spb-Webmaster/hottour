//todo:jquery
$(document).ready(function () {

    /**
     *
     * */
$('.mobile_version__logo').html($('.header_bottom .logo').html());
$('.mobile_version__social').html($('.header_top .top_social').html());

        $('body').on('click', '.m_f3', function (event) {
            $('.m_f').removeClass('active');
            $(this).toggleClass('active');
     /*       $('.mob_menu_content').toggle( "slow", function() {
            });*/
            $('.mob_menu_content').fadeToggle();



        });

        $('body').on('click', '.m_m_top_close', function (event) {

            $('.mob_menu_content').fadeOut();

        });

});
