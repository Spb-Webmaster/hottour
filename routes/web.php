<?php

use App\Http\Controllers\AjaxController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Tourvisor\TourvisorController;
use Illuminate\Support\Facades\Route;


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

    Route::get('/find-tour', 'page')->name('find-tour');
    Route::post('/find-tour/search', 'search');
 //   Route::match(['get', 'post'],'/tourvisor/ajax.php', 'ajax');

});

