<?php

namespace App\Providers;



use App\View\Composers\CityComposer;
use App\View\Composers\CountryMainComposer;
use App\View\Composers\TopmenuComposer;
use App\View\Composers\Topmenudump2sComposer;
use App\View\Composers\TopmenudumpsComposer;
use App\View\Composers\TopmenutoursComposer;
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
        View::composer('*', CountryMainComposer::class);
        View::composer('include.menu.menu', TopmenuComposer::class);
        View::composer('include.menu.menu', TopmenutoursComposer::class);
        View::composer('include.menu.menu', TopmenudumpsComposer::class);
        View::composer('include.menu.menu', Topmenudump2sComposer::class);


    }
}
