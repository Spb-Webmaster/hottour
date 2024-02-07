<nav>
    <ul class="top_menu">
        <li><a href="/">Главная</a></li>
        <li><a href="{{ route('search_tours') }}">Поиск тура</a></li>
        <li class="active"><a href="{{ route('countries') }}">Страны</a>


            <ul class="submenu menu_400_px">
                <div class="display_flex">
                <div class="submenu__left">
                    @foreach($top_menu__left as $menu)
                        <li><a href="{{ route('countries') }}/{{ $menu['slug']  }}" class="flag"><span><img src="{{asset('storage/'. $menu['imgflag'])}}" width="28" height="18" alt=""></span> {{ $menu['title']  }}</a></li>
                    @endforeach
                </div>
                <div class="submenu__right">
                    @foreach($top_menu__right as $menu)
                        <li><a href="{{ route('countries') }}/{{ $menu['slug']  }}" class="flag"><span><img src="{{asset('storage/'. $menu['imgflag'])}}" width="28" height="18" alt=""></span> {{ $menu['title']  }}</a></li>
                    @endforeach

                </div>
                </div>
                <li class="submenu__all-country pad_t7">
                    <a href="{{ route('countries') }}"><span>Смотреть все страны</span></a>
                </li>
            </ul>
        </li>
        <li><a href="" class="down fire">Горящие туры</a></li>

        <li><a href="" class="down">Туры</a>
            <ul class="submenu">
                <li><a href="">Category</a></li>
                <li><a href="">Author</a></li>
                <li><a href="">Archive</a></li>
                <li><a href="">Tags</a></li>
            </ul>
        </li>
        <li><a href="">Круизы</a></li>
        <li><a href="" class="down">Полезное</a>
            <ul class="submenu">
                <li><a href=""><img src="{{asset('storage/images/country-flags-svg/ad.svg')}}" width="28" height="18" alt="">Category</a></li>
                <li><a href="">Author</a></li>
                <li><a href="">Archive</a></li>
                <li><a href="">Tags</a></li>
            </ul>
        </li>
    </ul>
</nav>
