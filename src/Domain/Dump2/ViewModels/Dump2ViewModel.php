<?php
namespace Domain\Dump2\ViewModels;
use App\Models\Dump2;
use Illuminate\Support\Facades\Cache;
use Support\Traits\Makeable;

class Dump2ViewModel
{
    use Makeable;

    public function OneDump2($slug)
    {
        $list_dump2s_all = Cache::rememberForever('list_dump2s_all', function () {

            return Dump2::query()
                ->get_dump2s()
                ->get();
        });
        $one_dump2 = $list_dump2s_all->firstWhere('slug', $slug);
        return $one_dump2;


    }


}


