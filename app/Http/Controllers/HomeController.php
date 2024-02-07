<?php

namespace App\Http\Controllers;

use App\Events\OrderCallEvent;
use App\Models\HotCategory;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {

        $hot_counrty  = HotCategory::find(1);
        return view('home', ['hot_country'=> $hot_counrty]);
    }


}
