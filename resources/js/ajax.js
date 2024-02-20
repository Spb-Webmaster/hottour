function loader(Parents) {
    Parents.find('.wrapper_loader ').css('display', 'flex');
}

function loaderHide(Parents) {
    Parents.find('.wrapper_loader ').css('display', 'none');
}

function printErrorMsg(Parents, msg) {
    $.each(msg, function (key, value) {

        console.log(key);
        console.log(' -- ');
        console.log(msg);

        Parents.find('.error_' + key).text(value);
        Parents.find('input.' + key).addClass('_is-error');
    });
}

function url() {
    return window.location.href;

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
        var Sity = Parents.find('[name="sity"]').val();
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

                if (response.error) {
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
                if (response.error) {
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


    /* order call  (mini форма на главной)*/
    $('body').on('click', '.pick_tour_button_js', function (event) {
        var Country = $(this).data('country');
        $('#pick_tour').attr('data-country',Country );
    });

    $('body').on('click', '.pick_tour_js', function (event) {

        var Parents = $(this).parents('.F_form');
        var Name = Parents.find('.input[name="name"]').val();
        var Phone = Parents.find('.input[name="phone"]').val();
        var Sity = Parents.find('[name="sity"]').val();
        var Email = Parents.find('.input[name="email"]').val();
        var Date = Parents.find('.input[name="date"]').val();
        var Crm = Parents.find('.input[name="crm"]').val();
        var Country = Parents.data('country');
        var Token = Parents.data('token');
        loader(Parents);

        $.ajax({
            url: "/send-mail/pick_tour",
            method: "POST",
            data: {
                "_token": Token,
                "crm": Crm,
                "name": Name,
                "date": Date,
                "phone": Phone,
                "email": Email,
                "sity": Sity,
                "country": Country,
                "url": url(),
            },
            success: function (response) {
                if (response.error) {
                    setTimeout(function () {
                        Parents.find('.wrapper_loader ').css('display', 'none');
                        printErrorMsg(Parents, response.error);
                    }, 1000);

                } else {
                    setTimeout(function () {
                        console.log(response);
                        Parents.find('.wrapper_loader ').css('display', 'none');
                        Parents.find('.F_form__pick ').hide();
                        Parents.find('.F_responce').show();
                    }, 1000);
                }
            }
        });

    });
    /* order call  (mini форма на главной)*/


    /*   (выводим описание на странице отеля через tourvior )   */

    if ($('#getHotelInfo').length) {

        var This = $('#getHotelInfo');
        var Reviews = $('#getHotelReviews');
        var Token = $('#getHotelInfo').data('token');
        loader(This);

        $.ajax({
            url: "/get-hotel-info",
            method: "POST",
            data: {
                "_token": Token,
                "url": url(),
            },
            success: function (response) {
                if (response.error) {
                    setTimeout(function () {
                        This.find('.wrapper_loader ').css('display', 'none');
                    }, 1000);

                } else {
                    console.log(response);
                    var hotel = response.hotel.data.hotel;

                    let build = '';
                    let repair = '</li>';
                    let square = '';
                    let roomtypes = '';

                    if (hotel.build) {
                        build = '<li>год строительства: ' + hotel.build;
                    }
                    if (hotel.repair) {
                        repair = ', ремонт: ' + hotel.repair + '</li>';
                    }
                    if (hotel.square) {
                        square = '<li>площадь: ' + hotel.square + '</li>';
                    }

                    This.append('<div class="servise_item hotel_build"><h4>Отель <span>' + hotel.name + '</span></h4><div class="desc"><ul>' + build + ' ' + repair + '' + square + '</ul></div></div>');

                    if (hotel.territory) {
                        This.append('<div class="servise_item hotel_territory"><h4>Территория</h4><div class="desc">' + hotel.territory + '</div></div>');
                    }
                    if (hotel.beach) {
                        This.append('<div class="servise_item hotel_beach"><h4>Пляж</h4><div class="desc">' + hotel.beach + '</div></div>');
                    }
                    if (hotel.roomtypes) {
                        This.append('<div class="servise_item hotel_roomtypes"><h4>Номер</h4><div class="desc">' + hotel.roomtypes + '</div></div>');
                    }
                    if (hotel.inroom) {

                        This.append('<div class="servise_item hotel_inroom"><h4>В номере</h4><div class="desc">' + hotel.inroom + '</div></div>');
                    }
                    if (hotel.mealtypes) {

                        This.append('<div class="servise_item hotel_mealtypes"><h4>Питание</h4><div class="desc">' + hotel.mealtypes + '</div></div>');
                    }
                    if (hotel.child) {

                        This.append('<div class="servise_item hotel_child"><h4>Для детей</h4><div class="desc">' + hotel.child + '</div></div>');
                    }

                    if (hotel.servicefree) {

                        This.append('<div class="servise_item hotel_servicefree"><h4>Бесплатно</h4><div class="desc">' + hotel.servicefree + '</div></div>');
                    }

                    if (hotel.servicepay) {

                        This.append('<div class="servise_item hotel_servicepay"><h4>Платно</h4><div class="desc">' + hotel.servicepay + '</div></div>');
                    }



                    if (hotel.reviews) {
                        Reviews.append('<div class="servise_item hotel_review"><div class="desc">');
                        // console.log(hotel.reviews.review[0]);

                        for (var key in hotel.reviews.review) {
                            if(hotel.reviews.review[key].name) {
                                let name = hotel.reviews.review[key].name;
                                let traveltime = hotel.reviews.review[key].traveltime;
                                let content = hotel.reviews.review[key].content;
                                let rate = 'Оценка' + ': <span>' + hotel.reviews.review[key].rate+ '</span>';

                                Reviews.append('<div class="review_flex flex"><div class="rev1"><div class="rev1__flex"><div class="r_user__icon"></div><div class="r_user__data"><div class="review_ review_name">' + name + '</div><div class="review_ review_traveltime">' + traveltime + '</div><div class="review_ review_rate">' + rate + '</div></div></div></div><div class="rev2"><div class="review_ review_content">' + content + '</div></div>');
                            }
                        }


                        Reviews.append('</div></div>');

                    }
                    setTimeout(function () {
                        This.find('.wrapper_loader ').css('display', 'none');
                    }, 1000);
                }
            }
        });

    } // if

    /*   (выводим описание на странице отеля через tourvior )   */

});
