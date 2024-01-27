<?php

namespace App\Http\Controllers;

use App\Events\OrderCallEvent;
use App\Events\OrderMiniEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AjaxController extends Controller
{



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
}
