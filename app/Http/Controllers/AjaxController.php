<?php

namespace App\Http\Controllers;

use App\Events\OrderCallEvent;
use Illuminate\Http\Request;

class AjaxController extends Controller
{


    /**
     * Метод отправки сообщения
     */

    public function OrderCall(Request $request)
    {

        /**
         * Событие отправка сообщения админу (заказ звонка)
         */

        OrderCallEvent::dispatch($request);

        /**
         * возвращаем назад в браузер
         */

        return response()->json([
            'phone' => $request->phone,
            'sity' => $request->sity,
            'crm' => $request->crm,
        ]);

    }

    /**
     * Метод отправки сообщения
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
}
