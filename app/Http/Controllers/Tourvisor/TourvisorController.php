<?php

namespace App\Http\Controllers\Tourvisor;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Tourvisor\Service\Ajax;
use App\Http\Controllers\Tourvisor\Service\Tourvisor;
use Illuminate\Http\Request;

class TourvisorController extends Controller
{
    public function page() {



        $api = new Tourvisor();
        $departures = $api->getDeparture();
        $countries = $api->getCountry();
        $regions = $api->getRegions()->lists->regions->region;
        $hotels = [];

       return view('pages.find-tour', [
           'departures' => $departures,
           'countries' => $countries,
           'regions' => $regions,
           'hotels' => $hotels,
           'api' => $api,
        ]);
    }



    public function ajax(Request $request) {



        $api = new Tourvisor();
        $departures = $api->getDeparture();
        $countries = $api->getCountry();
        $regions = $api->getRegions()->lists->regions->region;
        $hotels = [];


      //  $action = $request;
      $action = $_GET['action'];

        $ajax = new Ajax();
        $response = $ajax->$action();

        if(empty($response->error)){
            $response->success = true;
            $head = "HTTP/1.0 200 OK";

        } else {
            $response->success = false;
            $head = "HTTP/1.0 401 fail";
        }
        header($head);
        header('Content-Type: application/json');
      //  echo json_encode($response, JSON_UNESCAPED_UNICODE);
        return response()->json([
            'response' => $response
        ]);


    }
}
