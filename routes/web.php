<?php
use App\Http\Controllers\AjaxController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Country\CountryController;
use App\Http\Controllers\Dump\DumpController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Hottour\HottourController;
use App\Http\Controllers\Pages\PageController;
use App\Http\Controllers\Tour\TourController;
use App\Http\Controllers\Tourvisor\TourvisorController;
use Illuminate\Support\Facades\Route;


Route::controller(HomeController::class)->group(function () {

    Route::get('/', 'index')
        ->name('home');
});

Route::controller(AjaxController::class)->group(function () {

    Route::post('/send-mail/order-call', 'OrderCall');
    Route::post('/send-mail/order-mini', 'OrderMini');
    Route::post('/send-mail/pick_tour', 'PickTour');
    Route::post('/set-sity/city-action', 'sity');
    Route::post('/get-hotel-info', 'getHotelInfo');

});

Route::controller(TourvisorController::class)->group(function () {

    Route::get('/'.config('links.link.search'), 'page')->name('search_tours');
    Route::post('/'.config('links.link.search').'/search', 'search');
 //   Route::match(['get', 'post'],'/tourvisor/ajax.php', 'ajax');

});

Route::controller(CountryController::class)->group(function () {

    Route::get('/'.config('links.link.countries'), 'pages')->name('countries');
    Route::get('/'.config('links.link.countries').'/{slug}', 'page')->name('country');

    Route::get('/'.config('links.link.countries').'/{slug_country}/{slug_subcountry}', 'category');
    Route::get('/'.config('links.link.countries').'/{slug_country}/{slug_subcountry}/{slug_subcountry__item}', 'item');

});

Route::controller(TourController::class)->group(function () {

    Route::get('/'.config('links.link.tours').'/{slug}', 'page')->name('tour');

});

Route::controller(DumpController::class)->group(function () {

    Route::get('/'.config('links.link.dump').'/{slug}', 'page')->name('dump');
    Route::get('/'.config('links.link.dump').'/{slug_category}'.'/{slug_category__item}', 'item');

    Route::get('/'.config('links.link.dump2').'/{slug}', 'page2')->name('dump2');
    Route::get('/'.config('links.link.dump2').'/{slug_category}'.'/{slug_category__item}', 'item2');

});


Route::controller(ContactController::class)->group(function () {

    Route::get('/'. config('links.link.contacts') , 'page');

});

Route::controller(HottourController::class)->group(function () {

    Route::get('/'. config('links.link.hottour').'/{slug_category}' , 'category');
    Route::get('/'. config('links.link.hottour').'/{slug_category}/{slug_item}' , 'item');

});

Route::controller(PageController::class)->group(function () {

    Route::get('{page:slug}', 'page')->name('page');

});


