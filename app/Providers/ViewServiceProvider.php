<?php

namespace App\Providers;



use App\View\Composers\CityComposer;
use App\View\Composers\TopmenuComposer;
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
        View::composer('include.menu.menu', TopmenuComposer::class);


    }
}
