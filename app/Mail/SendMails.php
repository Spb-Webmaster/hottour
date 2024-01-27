<?php

namespace App\Mail;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

class SendMails
{
    public function sendOrderCall($data):void
    {
        $view = 'html.email.order_call';
        $subject = 'Заказ обратного звонка ' . $data['phone'];

        Mail::send($view, ['data' => $data],  function ($message) use ($subject){
            $message->to(env("MAIL_USERNAME"), 'Admin')->subject($subject);
        });
    }
    public function sendOrderMini($data):void
    {
        $view = 'html.email.order_mini';
        $subject = 'Заявка с сайта ' . $data['phone'];

        Mail::send($view, ['data' => $data],  function ($message) use ($subject){
            $message->to(env("MAIL_USERNAME"), 'Admin')->subject($subject);
        });
    }


}
