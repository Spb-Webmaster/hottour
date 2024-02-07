<?php
namespace Domain\Excursion\ViewModels;

use App\Models\Excursion;
use Illuminate\Support\Facades\Cache;
use Support\Traits\Makeable;

class ExcursionViewModel
{
    use Makeable;

    public function OneExcursion($slug)
    {
        $excursions = Cache::rememberForever('excursion', function () {

            return Excursion::query()
            ->get_excursions()
            ->get();
        });
        $excursion = $excursions->firstWhere('slug', $slug);
        return $excursion;

    }

}
