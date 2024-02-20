<?php

namespace App\Providers;



use App\View\Composers\CityComposer;
use App\View\Composers\CountryMainComposer;
use App\View\Composers\OtzMainComposer;
use App\View\Composers\PageMainComposer;
use App\View\Composers\PublMainComposer;
use App\View\Composers\TopmenuComposer;
use App\View\Composers\Topmenudump2sComposer;
use App\View\Composers\TopmenudumpsComposer;
use App\View\Composers\TopmenutoursComposer;
use App\View\Composers\TopmenutravelcategoriesComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {

        View::composer('*', CityComposer::class);
        View::composer('include.module.index_text', PageMainComposer::class);
        View::composer('include.module.popular_country', CountryMainComposer::class);
        View::composer('include.module.index_news', PublMainComposer::class);
        View::composer('include.module.response', OtzMainComposer::class);
        View::composer('include.menu.menu', TopmenuComposer::class);
        View::composer('include.menu.menu', TopmenutravelcategoriesComposer::class);
        View::composer(['include.menu.menu','include.footer' ], TopmenutoursComposer::class);
        View::composer(['include.menu.menu', 'include.footer'], TopmenudumpsComposer::class);
        View::composer(['include.menu.menu', 'include.footer'], Topmenudump2sComposer::class);


    }
}
