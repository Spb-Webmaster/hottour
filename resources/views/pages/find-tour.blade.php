@extends('layouts.layout_search')
@section('title', ($seo_title)??null)
@section('description', ($seo_description)??null)
@section('keywords', ($seo_keywords)??null)
@section('content')
<main>

    <div class="container">
        <div class="form_wrap search_tour__form_wrap mobile">
            <form action="#" id="formsearch" name="formsearch">
                <div class="input-group">
                    <label for="departure">Город вылета</label>
                    <div class="input_item">
                        <select name="departure" class="input_item__select js-customSelect-search" data-input="departureInput" >
                            <optgroup label="ПОПУЛЯРНЫЕ">
                                <?php foreach($departures['popular'] as $departure):?>
                                <option value="<?php echo $departure['id']?>" <?php if(!empty($departure['default'])) echo 'selected';?>>
                                        <?php echo $departure['name']?></option>
                                <?php endforeach;?>
                            </optgroup>
                            <optgroup label="ОСТАЛЬНЫЕ">
                                <?php foreach($departures['other'] as $departure):?>
                                <option value="<?php echo $departure['id']?>" <?php if(!empty($departure['default'])) echo 'selected';?>>
                                        <?php echo $departure['name']?></option>
                                <?php endforeach;?>

                            </optgroup>
                        </select>

                    </div>
                </div>
                <div class="input-group">
                    <label for="country">Направление</label>
                    <div class="input_item input_item__search-country">
                        <select name="country" class="input_item__select js-customSelect-search" >
                            <optgroup label="ПОПУЛЯРНЫЕ">
                                <?php foreach($countries['popular'] as $country):?>
                                <option  value="<?php echo $country['id']?>" <?php if(!empty($country['default'])) echo 'selected';?>>
                                        <?php echo $country['name']?></option>
                                <?php endforeach;?>
                            </optgroup>
                            <optgroup label="ОСТАЛЬНЫЕ"><?php foreach($countries['other'] as $country):?>
                                <option  value="<?php echo $country['id']?>" <?php if(!empty($country['default'])) echo 'selected';?>>
                                        <?php echo $country['name']?></option>
                                <?php endforeach;?>
                            </optgroup>
                        </select>

                    </div>
                </div>

                <div class="input-group">
                    <label>Интервал дат вылета</label>
                    <div class="date_input">
                        <input type="text" class="datepicker-range" value="<?php echo rusdate(strtotime("+1 days"))?> - <?php echo rusdate(strtotime("+7 days"))?>" readonly="">
                        <input type="text" class="datepicker-hidden" name="daterange" value="<?php echo date('d.m.Y', strtotime('+1 days'))?> - <?php echo date('d.m.Y', strtotime('+7 days'))?>" data-max_span="13" readonly="">
                    </div>
                </div>

                <div class="input-group">
                    <label>Кол-во ночей</label>

                    <div class="input_item number_range_picker" data-target_from=".number_range_picker__from" data-target_to=".number_range_picker__to">
                        <input class="number_range_picker__input" type="text" value="6 - 14" readonly="">
                        <input class="number_range_picker__from" type="hidden" name="nightsfrom" value="6">
                        <input class="number_range_picker__to" type="hidden" name="nightsto" value="14">

                        <div class="number_range_picker__wrap">
                            <div class="number_range_picker__body">
                                <div class="number_range_picker__item " data-val="1">
                                    1                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="2">
                                    2                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="3">
                                    3                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="4">
                                    4                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="5">
                                    5                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item start_range" data-val="6">
                                    6                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item range_hover" data-val="7">
                                    7                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item range_hover" data-val="8">
                                    8                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item range_hover" data-val="9">
                                    9                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item range_hover" data-val="10">
                                    10                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item range_hover" data-val="11">
                                    11                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item range_hover" data-val="12">
                                    12                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item range_hover" data-val="13">
                                    13                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item end_range" data-val="14">
                                    14                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="15">
                                    15                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="16">
                                    16                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="17">
                                    17                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="18">
                                    18                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="19">
                                    19                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="20">
                                    20                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="21">
                                    21                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="22">
                                    22                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="23">
                                    23                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="24">
                                    24                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="25">
                                    25                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="26">
                                    26                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="27">
                                    27                    <span>Ночей</span>
                                </div>
                                <div class="number_range_picker__item " data-val="28">
                                    28                    <span>Ночей</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="input-group">
                    <label>Кол-во человек</label>
                    <div class="input_item number_people" id="adults">
                        <input type="hidden" name="adults" value="2" id="adults_input">
                        <p>
                            2 взрослых
                        </p>

                        <div class="number_people_drop full_people">
                            <div class="adults how_people">
                                <label>Взрослые</label>
                                <div class="quantity adult">
                                    <a href="#" data-input="adults_input">1</a>
                                    <a href="#" data-input="adults_input" class="active">2</a>
                                    <a href="#" data-input="adults_input">3</a>
                                    <a href="#" data-input="adults_input">4</a>
                                </div>
                            </div>
                            <div class="children how_people">
                                <label>Дети от 2-х до 14 лет</label>
                                <input type="hidden" id="input_child" name="child" value="0">
                                <div class="quantity child" id="child_list">
                                    <a href="#" data-input="input_child" class="active">0</a>
                                    <a href="#" data-input="input_child">1</a>
                                    <a href="#" data-input="input_child">2</a>
                                    <a href="#" data-input="input_child">3</a>
                                </div>
                            </div>
                            <div class="babies how_people">
                                <label>Дети до 2-х лет</label>
                                <input type="hidden" id="input_infant" name="infant" value="0">
                                <div class="quantity child" id="infatn_list">
                                    <a href="#" data-input="input_infant" class="active">0</a>
                                    <a href="#" data-input="input_infant">1</a>
                                    <a href="#" data-input="input_infant">2</a>
                                    <a href="#" data-input="input_infant">3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <span class="input-group search_tour__form_wrap__more" data-toggle_text="Скрыть доп. параметры поиска">Показать доп. параметры поиска</span>

                <div class="search_tour__form_wrap__drop">
                    <div class="input-group">
                        <div class="search_tour__resort">
                            <label class="search_tour__label">Курорт</label>
                            <div class="search_tour__checkbox">


                                <label class="control control-checkbox">
                                    Любой
                                    <input type="checkbox" name="all" checked="" class="js-resort-region-any">
                                    <span class="control_indicator"></span>
                                </label>
                            </div>
                            <div class="checkbox_choice-b">
                                <div class="container__box_loader">
                                    <div class="box_loader"></div>
                                    <div class="box_loader"></div>
                                    <div class="box_loader"></div>
                                    <div class="box_loader"></div>
                                    <div class="box_loader"></div>
                                </div>

                                <div class="checkbox_choice js-search-dropdown checkbox_choice__container" id="search_regions_container" style="padding-left: 0px; padding-right: 0px;"><div class="checkbox_choice__inner" style="margin-right: -17px; overflow-x: hidden;">
                                        <?php foreach($regions as $region):?>
                                        <label class="control control-checkbox">
                                                <?php echo $region->name; ?>
                                            <input class="region_checkbox" type="checkbox" name="region[]" value="<?php echo $region->id; ?>  " data-title="<?php echo $region->name;?>">
                                            <span class="control_indicator"></span>
                                        </label>
                                        <?php endforeach;?>

                                    </div><div class="checkbox_choice__bar-y" style="height: 114px; top: 0px;"></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="search_tour__hotel">
                            <div class="title">
                                <label class="search_tour__label">Отель</label>
                                <a href="#" class="link open_other_filter" data-modal="modal" data-target="#other_filter">
                                    Параметры отелей <span class="count"></span>
                                </a>
                            </div>
                            <div class="checkbox_choice-b">
                                <div class="container__box_loader">
                                    <div class="box_loader"></div>
                                    <div class="box_loader"></div>
                                    <div class="box_loader"></div>
                                    <div class="box_loader"></div>
                                    <div class="box_loader"></div>
                                </div>

                                <div class="search_hotel">
                                    <input aria-label="" type="text" class="js-search-hotel-input" placeholder="Введите название">
                                    <div class="search_hotel__tabs hidden">
                                        <div class="search_hotel__tabs-item active search_hotel__tabs-item_name">Все</div>
                                        <div class="search_hotel__tabs-item search_hotel__tabs-item_selection">Выбрано <span>1</span></div>
                                        <div class="search_hotel__tabs-item search_hotel__tabs-item_clear">Сброс</div>
                                    </div>
                                </div>
                                <div class="checkbox_choice search_hotel__checkbox js-search-hotels">
                                    <?php foreach($hotels as $hotel):?>
                                    <label class="control control-checkbox">
                                            <?php echo $hotel->name?>&nbsp;<?php echo $hotel->stars?>*
                                        <input class="hotel_checkbox" name="hotels[]" type="checkbox" data-value="<?php echo $hotel->name?>" value="<?php echo $hotel->id?>">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <?php endforeach;?>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="search_tour__extra">

                            <div class="search_tour__food mobile">
                                <label>Питание</label>
                                <input type="hidden" id="search_meals_form" name="meals" value="">
                                <div class="input_item dropdown">
                                    <p>Любое</p>
                                    <div class="form_dropdown">
                                        <a href="#" data-input="search_meals_form" data-value="0">Любое</a>
                                        <a href="#" data-input="search_meals_form" data-value="2">RO - Нет питания</a>
                                        <a href="#" data-input="search_meals_form" data-value="5">FB - Полный пансион</a>
                                        <a href="#" data-input="search_meals_form" data-value="7">AI - Всё включено</a>
                                        <a href="#" data-input="search_meals_form" data-value="3">BB - Только завтраки</a>
                                        <a href="#" data-input="search_meals_form" data-value="4">HB - Завтрак и ужин</a>
                                        <a href="#" data-input="search_meals_form" data-value="9">UAI - Ультра все включено</a>
                                    </div>
                                </div>
                            </div>

                            <div class="search_tour__hotel_level mobile">
                                <label>Уровень отеля</label>
                                <input type="hidden" name="hotelstars" value="1">
                                <div class="choice_rating search_tour__choice_rating">
                                    <div class="choice_rating__star" data-rate="5"></div>
                                    <div class="choice_rating__star" data-rate="4"></div>
                                    <div class="choice_rating__star" data-rate="3"></div>
                                    <div class="choice_rating__star" data-rate="2"></div>
                                    <div class="choice_rating__star active" data-rate="1"></div>
                                </div>
                            </div>
                            <div class="range_slider search_tour__range_slider">
                                <div class="prices">
                                    <label for="amount" class="range_slider__label">Цена, руб.</label>
                                    <div class="price_inputs">
                                        <input type="text" class="range_slider__input pricefrom required-num" name="pricefrom" placeholder="0">
                                        <input type="text" class="range_slider__input priceto required-num" name="priceto" placeholder="10 000 000">
                                    </div>
                                </div>
                                <div class="range_slider__slide search ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-minvalue="0" data-maxvalue="10000000" data-min="0" data-max="10000000"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span></div>
                            </div>
                            <div class="search_tour__hotel_rating">
                                <label>Рейтинг</label>
                                <div class="choice_rating_hotel">
                                    <label class="choice_rating_hotel__item all active" id="item-all">
                                        Любой
                                        <input type="radio" name="hotelrating" checked="" value="all">
                                    </label>
                                    <label class="choice_rating_hotel__item">
                                        +3
                                        <input type="radio" name="hotelrating" value="3">
                                    </label>
                                    <label>/</label>
                                    <label class="choice_rating_hotel__item">
                                        +3,5
                                        <input type="radio" name="hotelrating" value="3.5">
                                    </label>
                                    <label>/</label>
                                    <label class="choice_rating_hotel__item">
                                        +4
                                        <input type="radio" name="hotelrating" value="4">
                                    </label>
                                    <label>/</label>
                                    <label class="choice_rating_hotel__item">
                                        +4,5
                                        <input type="radio" name="hotelrating" value="4.5">
                                    </label>
                                </div>
                            </div>
                            <div class="input-group input-group__extra">
                                <div class="search_tour__checkbox_flight">
                                    <label class="control control-checkbox">
                                        Скрыть регулярные рейсы
                                        <input type="hidden" name="hideregular" value="0">
                                        <input type="checkbox" name="hideregular" value="1" checked="">
                                        <span class="control_indicator"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="input-group input-group__extra_button">
                                <button data-type="full" id="searchButtonForm" class="btn__red form_wrap__button search_tour__button" data-autostart="false">
                                    Найти туры
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="search_tour__form_buttons">
                    <div class="input-group">
                        <a href="#" class="link" data-modal="modal" data-target="#save_history">Сохранить параметры поиска</a>
                    </div>
                    <div class="input-group">
                        <div class="search_tour__checkbox_flight">
                            <label class="control control-checkbox">
                                Скрыть регулярные рейсы
                                <input type="checkbox" name="hideregular" value="1" checked="" disabled="">
                                <span class="control_indicator"></span>
                            </label>
                        </div>
                    </div>
                    <div class="input-group">
                        <button data-type="full" id="searchButtonForm" class="btn__red form_wrap__button search_tour__button" >
                            Найти туры
                        </button>
                    </div>
                </div>
                <div style="display: none">
                    <div class="box-modal box-modal__other-filter" id="other_filter">
                        <div class="box-modal_close arcticmodal-close">
                            <div class="close_item">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="title_head text-center box-modal__title_head">
                            Параметры отелей
                        </div>
                        <div class="form_modal form_modal__other-filter">
                            <div class="body">
                                <div class="checkbox-services">
                                    <span>Для детей</span>
                                    <label class="control control-checkbox" style="margin-top: 10px">
                                        Водные горки для детей                                                <input type="checkbox" name="services[]" value="1">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Детское меню                                                <input type="checkbox" name="services[]" value="2">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Мини-клуб                                                <input type="checkbox" name="services[]" value="3">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Детская анимация                                                <input type="checkbox" name="services[]" value="4">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Детская площадка                                                <input type="checkbox" name="services[]" value="6">
                                        <span class="control_indicator"></span>
                                    </label>
                                </div>
                                <div class="checkbox-services">
                                    <span>Номер</span>
                                    <label class="control control-checkbox" style="margin-top: 10px">
                                        Кухня в номере                                                <input type="checkbox" name="services[]" value="7">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Балкон в номере                                                <input type="checkbox" name="services[]" value="8">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Wi-Fi в номере                                                <input type="checkbox" name="services[]" value="10">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Кондиционер                                                <input type="checkbox" name="services[]" value="12">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Размещение с животными                                                <input type="checkbox" name="services[]" value="14">
                                        <span class="control_indicator"></span>
                                    </label>
                                </div>
                                <div class="checkbox-services">
                                    <span>Пляж</span>
                                    <label class="control control-checkbox" style="margin-top: 10px">
                                        Первая береговая линия                                                <input type="checkbox" name="services[]" value="15">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Собственный пляж                                                <input type="checkbox" name="services[]" value="16">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Песчаный пляж                                                <input type="checkbox" name="services[]" value="17">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Галечный пляж                                                <input type="checkbox" name="services[]" value="18">
                                        <span class="control_indicator"></span>
                                    </label>
                                </div>
                                <div class="checkbox-services">
                                    <span>Территория</span>
                                    <label class="control control-checkbox" style="margin-top: 10px">
                                        Бассейн                                                <input type="checkbox" name="services[]" value="23">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Бассейн с подогревом                                                <input type="checkbox" name="services[]" value="24">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Водные горки                                                <input type="checkbox" name="services[]" value="25">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        СПА-центр                                                <input type="checkbox" name="services[]" value="26">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Ресторан/кафе                                                <input type="checkbox" name="services[]" value="27">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Спортзал                                                <input type="checkbox" name="services[]" value="28">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Теннис                                                <input type="checkbox" name="services[]" value="30">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Футбол                                                <input type="checkbox" name="services[]" value="31">
                                        <span class="control_indicator"></span>
                                    </label>
                                </div>
                                <div class="checkbox-services">
                                    <span>Услуги</span>
                                    <label class="control control-checkbox" style="margin-top: 10px">
                                        Анимация                                                <input type="checkbox" name="services[]" value="33">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Дискотека                                                <input type="checkbox" name="services[]" value="34">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Wi-Fi                                                <input type="checkbox" name="services[]" value="36">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Размещение одиноких мужчин                                                <input type="checkbox" name="services[]" value="39">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Только для взрослых                                                <input type="checkbox" name="services[]" value="48">
                                        <span class="control_indicator"></span>
                                    </label>
                                </div>
                                <div class="checkbox-services">
                                    <span>Тип отеля</span>
                                    <label class="control control-checkbox" style="margin-top: 10px">
                                        Активный                                                <input type="checkbox" name="services[]" value="42">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Городской                                                <input type="checkbox" name="services[]" value="43">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        Семейный                                                <input type="checkbox" name="services[]" value="44">
                                        <span class="control_indicator"></span>
                                    </label>
                                    <label class="control control-checkbox">
                                        VIP                                                <input type="checkbox" name="services[]" value="45">
                                        <span class="control_indicator"></span>
                                    </label>
                                </div>
                                <div class="checkbox-services">
                                    <span>Доп.фильтры</span>
                                    <label class="control control-checkbox" style="margin-top: 10px">
                                        Мгновенное подтверждение                                                <input type="checkbox" name="services[]" value="46">
                                        <span class="control_indicator"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="buttons">
                                <a class="btn__red form_wrap__button search_tour__button apply">Применить</a>
                                <a class="link cancel">Сбросить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>
    <section id="searchLoader" style="display: none;">
        <div class="container__box_loader">
            <div class="box_loader"></div>
            <div class="box_loader"></div>
            <div class="box_loader"></div>
            <div class="box_loader"></div>
            <div class="box_loader"></div>
        </div>

        <span class="box_loader_procent"> 0%</span>
    </section>
    <section class="search_result">
        <div class="container" id="header_search_result" style="display: none;">

        </div>
        <div class="container container-fluid-mobile" id="resultsearchcontainer" style="display: none;" data-full_page="false">
            <div class="search_result__wrapper" data-page="1"></div>
        </div>


        <div class="text-center" id="buttonadd" style="display: none;">
            <a href="#" class="button-more search_result__button-more">
                <span>Найти еще туры</span> <span>+</span>
            </a>
        </div>


    </section>

</main>

@endsection


