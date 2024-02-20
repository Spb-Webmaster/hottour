<?php

namespace App\Http\Controllers;

use App\Events\OrderCallEvent;
use App\Events\OrderMiniEvent;
use App\Events\PickTourEvent;
use App\Http\Controllers\Tourvisor\Service\Tourvisor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AjaxController extends Controller
{

    public $api;

    public function __construct()
    {
        $this->api = new Tourvisor();
    }

    /**
     * Метод  получения session (город)
     */

    public function sity(Request $request)
    {

        session(['sity' => $request->sity]);

        /**
         * возвращаем назад в браузер
         */

        return response()->json([
            'sity' => $request->sity
        ]);

    }


    /**
     * Метод отправки сообщения "Заказать звонок"
     */

    public function OrderCall(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'phone' => ['required', 'string', 'min:5']
        ]);

        if ($validator->passes()) {

            /**
             * Событие отправка сообщения админу (заказ звонка)
             */

            OrderCallEvent::dispatch($request);

            /**
             * возвращаем назад в браузер
             */

            return response()->json([
                'request' => $request

            ]);
        }

        return response()->json(['error'=>$validator->errors()]);

    }

    /**
     * Метод отправки сообщения "Заказать звонок"
     */

    public function OrderMini(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string' , 'min:1'],
            'phone' => ['required', 'string', 'min:5'],
            'email' => ['required', 'email', 'email:dns'],
            ]);

        if ($validator->passes()) {

            /**
             * Событие отправка сообщения админу (заявка)
             */

            OrderMiniEvent::dispatch($request);

            /**
             * возвращаем назад в браузер
             */

            return response()->json([
                'request' => $request

            ]);
        }

        return response()->json(['error'=>$validator->errors()]);

    }

    /**
     * Метод отправки сообщения "Подобрать тур"
     */

    public function PickTour(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string' , 'min:1'],
            'phone' => ['required', 'string', 'min:5'],
            'email' => ['required', 'email', 'email:dns'],
            'date' => [ 'string', 'max:255'],

            ]);

        if ($validator->passes()) {

            /**
             * Событие отправка сообщения админу (Подобрать тур)
             */

             PickTourEvent::dispatch($request);

            /**
             * возвращаем назад в браузер
             */

            return response()->json([
                'name' => $request->name,
                'phone' => $request->phone,
                'email' => $request->email,
                'date' => $request->date,
                'url' => $request->url,
                'country' => $request->country,

            ]);
        }

        return response()->json(['error'=>$validator->errors()]);

    }



    public function getHotelInfo(Request $request){



        $url = url()->previous();
        $slugs = explode("/", $url);
        $l1 = $slugs [(count($slugs) - 1)];

        $slugs = explode("/", $request->url);
        $l2 = $slugs [(count($slugs) - 1)];

        if($l1 == $l2) {
            //reviews=1 - отзывы
            $hotel = $this->api->_get(['hotelcode'=>$l1,'reviews' => '1'], 'hotel.php');

        }
        /**
         * возвращаем назад в браузер
         */

        return response()->json([
            'realurl' => $l1,
            'sendurl' => $l2,
            'hotel' => $hotel,
        ]);

    }

}
