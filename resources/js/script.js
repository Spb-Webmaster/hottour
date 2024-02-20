//todo:jquery
$(document).ready(function () {

    /**
     * input движение label
     * */
    var show = 'show';

    $('.inputClass').each(function (index) {
        let label = $(this).next('label');
        if ($(this).val() != '') {
            label.addClass(show);
        }
    });
    $('.inputClass').change(function () {
        let label = $(this).next('label');
        if ($(this).val() != '') {
            label.addClass(show);
        }

    });


    $('.inputClass').on('checkval', function () {
        let label = $(this).next('label');


        if (this.value !== '') {
            label.addClass(show);
        } else {
            label.removeClass(show);
        }


    }).on('keyup', function () {
        $(this).trigger('checkval');
    });

    /* удаление  рамки при error */
    $('input[type="text"], input[type="date"], input[type="password"], input[type="email"]').focus(
        function () {
            $(this).parents('.text_input').find('.errorBlade').text('');
            $(this).removeClass('_is-error');
        }
    );
    /* удаление рамки при error */





});







