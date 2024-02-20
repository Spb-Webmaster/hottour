<?php

namespace App\Providers;

use App\Events\OrderCallEvent;
use App\Events\OrderMiniEvent;
use App\Events\PickTourEvent;
use App\Listeners\OrderCallHandlerListener;
use App\Listeners\OrderMiniHandlerListener;
use App\Listeners\PickTourHandlerListener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        OrderCallEvent::class => [
            OrderCallHandlerListener::class
        ],
        OrderMiniEvent::class => [
            OrderMiniHandlerListener::class
        ],
        PickTourEvent::class => [
            PickTourHandlerListener::class
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
