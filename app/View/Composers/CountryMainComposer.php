<?php

namespace App\View\Composers;

use App\Models\HotCategory;
use App\Models\Menu;
use Domain\Country\ViewModels\CountryViewModel;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;

class CountryMainComposer
{
    public function compose(View $view): void
    {

      //  $menu  = Cache::rememberForever('module_country_main', function () {
   /*       $country =  HotCategory::query()
            ->where('published', true)
            ->with(['parent' => function ($q) {
                return $q->where('published', true);
            }])
            ->take(100)
            ->orderBy('sorting')
            ->get();*/

        $countries = CountryViewModel::make()->listCountriesForMain();

       // dump($country->child);
       // dd($countries);

      //    });


        $view->with([
            'main_countries' => $countries,
        ]);

    }
}
