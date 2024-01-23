@if ($paginator->hasPages())
    <nav class="nav__pagination">
        {{-- Previous Page Link --}}
        <div class="nav__pagination_previous">
        @if ($paginator->onFirstPage())
            <li class="disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                <span aria-hidden="true"></span>
            </li>
        @else
            <li>
                <a href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')">
                    <img src="{{ asset('/images/pagination/prev.svg') }}"  alt="prev" />
                    <i>{{ __('Назад') }}</i></a>
            </li>
        @endif
        </div>
        <ul class="pagination">


            {{-- Pagination Elements --}}
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <li class="disabled" aria-disabled="true"><span>{{ $element }}</span></li>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page == $paginator->currentPage())
                            <li class="active" aria-current="page"><span>{{ $page }}</span></li>
                        @else
                            <li><a href="{{ $url }}">{{ $page }}</a></li>
                        @endif
                    @endforeach
                @endif
            @endforeach


        </ul>
        <div class="nav__pagination_next">

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li>
                <a href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')">
                    <i>{{ __('Вперед') }}</i> <img src="{{ asset('/images/pagination/next.svg') }}"  alt="next" /></a>
            </li>
        @else
            <li class="disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                <span aria-hidden="true"></span>
            </li>
        @endif
        </div>
    </nav>
@endif
