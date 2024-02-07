<?php

namespace Domain\Resort\ViewModels;

use App\Models\HotCategory;
use App\Models\Resort;
use Illuminate\Support\Facades\Cache;
use Support\Traits\Makeable;

class ResortViewModel
{
    use Makeable;


    public function OneResort($slug)
    {
        $resorts = Cache::rememberForever('resort', function () {
            return Resort::query()
                ->get_resorts()
                ->get();
        });
        $resort = $resorts->firstWhere('slug', $slug);
        return $resort;


    }

}
