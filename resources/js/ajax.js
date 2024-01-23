function loader() {
    $('.wrapper_loader ').css('display', 'flex');
}
function loaderHide() {
    $('.wrapper_loader ').css('display', 'none');
}

//todo:jquery
$(document).ready(function () {

    /* cities desktop */

    $('body').on('click', '.top_sity_js', function (event) {
        $('.top_sity_active_js').slideToggle();
        $(this).toggleClass('active');

    });

    $('body').on('click', '.tps_sity_title_js', function (event) {
        let Parents = $(this).parents('.top_sity_js');
        var Text = $(this).text();
        $('.tps_sity_title_js').removeClass('active');
        $(this).addClass('active');


        $('.top_sity_active_js').slideToggle();
        var Token = $('.top_sity_js').data('token');
        $.ajax({
            url: "/set-sity/city-action",
            method: "POST",
            data: {
                "_token": Token,
                "sity": Text,
            },
            success: function (response) {
                $('.h_s_sity_js').text(response.sity);
                console.log(response.sity);
            }
        });

    });

    /* cities desktop */

    /* order call */
    $('body').on('click', '.order_call_js', function (event) {

        var Parents = $(this).parents('.F_form_order_call');
        var Phone = Parents.find('.input[name="call_phone"]').val();
        var Sity =  Parents.find('[name="call_sity"]').val();
        var Crm = Parents.find('#CallCrm').val();
        var Token = Parents.data('token');
        var This = $(this);
        loader();

        $.ajax({
            url: "/send-mail/order-call",
            method: "POST",
            data: {
                "_token": Token,
                "crm": Crm,
                "phone": Phone,
                "sity": Sity
            },
            success: function (response) {
                setTimeout(function() {
                    $('.wrapper_loader ').css('display', 'none');
                    Parents.find('.F_form__body').hide();
                    Parents.find('.F_responce').show();
                }, 1000);
                console.log(response);
            }
        });

    });

    /* order call */

});
