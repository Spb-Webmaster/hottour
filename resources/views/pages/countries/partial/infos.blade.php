@foreach($infos as $item)
    <div class="hcol hcolImgText">
        <div class="hcolImgText__flex flex">

            <div class="hcolImgText__left">
                <a href="{{ asset(route('countries').'/'. $country->slug. '/'. $hot_category->slug.'/'.$item->slug) }}">
                    <img src="{{ asset(intervention('199x199', $item->img)) }}" width="199" height="199"
                         alt="{{ $item->title }}" loading="lazy" />
                </a>
            </div>

            <div class="hcolImgText__right">

                <div class="hcolImgText__title">
                    <h2><a href="{{ asset(route('countries').'/'. $country->slug. '/'. $hot_category->slug.'/'.$item->slug) }}">{{ $item->title }}</a></h2>
                </div>

                <div class="hcolImgText__smalltext colorGrey">
                    {!! $item->smalltext !!}
                </div>

            </div>

        </div>
    </div>

@endforeach
{{ $infos->withQueryString()->links('pagination::default') }}
