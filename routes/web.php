<?php

use App\Http\Controllers\AjaxController;
use App\Http\Controllers\Country\CountryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ThumbnailController;
use App\Http\Controllers\Tourvisor\TourvisorController;
use Illuminate\Support\Facades\Route;



Route::get('/storage/images/{dir}/{method}/{size}/{file}', ThumbnailController::class)
    ->where('method', 'resize|crop|fit')
    ->where('size', '\d+x\d+')
    ->where('file', '.+\.(png|jpg|gif|bmp|jpeg|svg)$')
    ->name('thumbnail');



Route::controller(HomeController::class)->group(function () {

    Route::get('/', 'index')
        ->name('home');
});

Route::controller(AjaxController::class)->group(function () {

    Route::post('/send-mail/order-call', 'OrderCall');
    Route::post('/send-mail/order-mini', 'OrderMini');
    Route::post('/set-sity/city-action', 'sity');

});
Route::controller(TourvisorController::class)->group(function () {

    Route::get('/'.config('links.link.search'), 'page')->name('search_tours');
    Route::post('/'.config('links.link.search').'/search', 'search');
 //   Route::match(['get', 'post'],'/tourvisor/ajax.php', 'ajax');

});
Route::controller(CountryController::class)->group(function () {

    Route::get('/'.config('links.link.countries'), 'pages')->name('countries');
    Route::get('/'.config('links.link.countries').'/{slug}', 'page')->name('country');
 //   Route::match(['get', 'post'],'/tourvisor/ajax.php', 'ajax');
    Route::get('/'.config('links.link.countries').'/{slug_country}/{slug_subcountry}', 'category');
    Route::get('/'.config('links.link.countries').'/{slug_country}/{slug_subcountry}/{slug_subcountry__item}', 'item');


});

