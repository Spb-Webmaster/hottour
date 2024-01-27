<footer class="background_292F3D">
    <div class="block">
        <div class="f_flextop">
            <div class="f_flextop__left">
                <div class="fl_1 f_logo">
                    <x-logo.logo
                        class="footer_logo"
                        width="260"
                        height="59"
                        alt="Footer Logo Hottour"
                    />
                    <div class="f_contact">
                    <div class="f_contact__label">
                        {{ __('Связь с нами в один клик') }}
                    </div>
                    <div class="f_contact__phone">
                        {{ config('config.phone2') }}
                    </div>
                    <div class="f_contact__label_address">
                        {{ __('  Фактический адрес') }}
                    </div>

                    <div class="f_contact__address">
                        <div>{{ config('config.idn') }}</div>
                        <div>{{ config('config.country') }}</div>
                        <div>{{ config('config.sityAddress') }}</div>
                    </div>
                    </div>


                </div>
                <div class="fl_2 f_menus">

                    <div class="f1 ff">
                        <div class="h4">О нас</div>
                        <ul class=" nav menu mod-list">
                            <li class="item-243"><a href="/o-nas/otzyvy">Отзывы</a></li>
                            <li class="item-245"><a href="/o-nas/partnjory">Партнеры</a></li>
                            <li class="item-246"><a href="/o-nas/obrashchenie">Обращение</a></li>
                            <li class="item-312"><a href="/sitemap.xml">Карта сайта</a></li>
                            <li class="item-250"><a href="/kontakty">Контакты</a></li>
                        </ul>
                    </div>

                    <div class="f2 ff">
                        <div class="h4">О нас</div>
                        <ul class=" nav menu mod-list">
                            <li class="active"><a href="/o-nas/otzyvy">Отзывы</a></li>
                            <li class="item-245"><a href="/o-nas/partnjory">Партнеры</a></li>
                            <li class="item-246"><a href="/o-nas/obrashchenie">Обращение</a></li>
                            <li class="item-312"><a href="/sitemap.xml">Карта сайта</a></li>
                            <li class="item-250"><a href="/kontakty">Контакты</a></li>
                        </ul>
                    </div>

                    <div class="f3 ff">
                        <div class="h4">О нас</div>
                        <ul class=" nav menu mod-list">
                            <li class="item-243"><a href="/o-nas/otzyvy">Отзывы</a></li>
                            <li class="item-245"><a href="/o-nas/partnjory">Партнеры</a></li>
                            <li class="item-246"><a href="/o-nas/obrashchenie">Обращение</a></li>
                            <li class="item-312"><a href="/sitemap.xml">Карта сайта</a></li>
                            <li class="item-250"><a href="/kontakty">Контакты</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="f_flextop__right">
                <div class="fr_1 f_social">
                    <div class="f_social__label">
                        {{__('Мы в социальных сетях')}}
                    </div>
                    @include('include.icons.top_social_big')
                    <div class="f_social__mobileapp">
                        {{__('Скачайте наше мобильное приложение')}}
                    </div>
                    <x-mobile_app.mobile_app
                        width="141"
                        height="40"
                    />
                </div>
            </div>
        </div>
        <div class="f_flexbottom">
            <div class="copyright">© 1993 - {{ date("Y") }} HOT TOUR - ХОТ ТУР</div>
            <div class="sign_the_contract">
                <a href="">{{ __('Подписать договор онлайн') }}</a>
            </div>

        </div>
    </div>
</footer>