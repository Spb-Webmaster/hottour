function loader(Parents) {
    Parents.find('.wrapper_loader ').css('display', 'flex');
}
function loaderHide(Parents) {
    Parents.find('.wrapper_loader ').css('display', 'none');
}
function printErrorMsg (Parents, msg) {
    $.each( msg, function( key, value ) {

        console.log(key);
        console.log(' -- ');
        console.log(msg);

        Parents.find('.error_'+key).text(value);
        Parents.find('input.'+key).addClass('_is-error');
    });
}
function url()
{
    return  window.location.href;

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
               // console.log(response.sity);
            }
        });

    });

    /* cities desktop */

    /* order call */
    $('body').on('click', '.order_call_js', function (event) {

        var Parents = $(this).parents('.F_form');
        var Phone = Parents.find('.input[name="phone"]').val();
        var Sity =  Parents.find('[name="sity"]').val();
        var Crm = Parents.find('.input[name="crm"]').val();
        var Token = Parents.data('token');

        loader(Parents);

        $.ajax({
            url: "/send-mail/order-call",
            method: "POST",
            data: {
                "_token": Token,
                "crm": Crm,
                "phone": Phone,
                "sity": Sity,
                "url": url(),
            },
            success: function (response) {

                if(response.error) {
                    setTimeout(function () {
                    Parents.find('.wrapper_loader ').css('display', 'none');
                    printErrorMsg(Parents, response.error);
                    }, 1000);


                } else {
                    setTimeout(function () {
                        Parents.find('.wrapper_loader ').css('display', 'none');
                        Parents.find('.F_form__body').hide();
                        Parents.find('.F_responce').show();
                    }, 1000);
                }
              //  console.log(response);

            }
        });

    });

    /* order call */

    /* order call  (mini форма на главной)*/
    $('body').on('click', '.order_mini_js', function (event) {

        var Parents = $(this).parents('.F_form');
        var Name = Parents.find('.input[name="name"]').val();
        var Phone = Parents.find('.input[name="phone"]').val();
        var Email = Parents.find('.input[name="email"]').val();
        var Crm = Parents.find('.input[name="crm"]').val();
        var Token = Parents.data('token');
        loader(Parents);

        $.ajax({
            url: "/send-mail/order-mini",
            method: "POST",
            data: {
                "_token": Token,
                "crm": Crm,
                "name": Name,
                "phone": Phone,
                "email": Email,
                "url": url(),
            },
            success: function (response) {
                if(response.error) {
                    setTimeout(function () {
                    Parents.find('.wrapper_loader ').css('display', 'none');
                    printErrorMsg(Parents, response.error);
                    }, 1000);

                } else {
                    setTimeout(function () {
                        Parents.find('.wrapper_loader ').css('display', 'none');
                        Parents.find('.F_form__body').hide();
                        Parents.find('.F_responce').show();
                    }, 1000);
                }
            }
        });

    });

    /* order call  (mini форма на главной)*/

});
