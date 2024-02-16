<?php
namespace Domain\Dump\ViewModels;
use App\Models\Dump;
use Illuminate\Support\Facades\Cache;
use Support\Traits\Makeable;

class DumpViewModel
{
    use Makeable;

    public function OneDump($slug)
    {
        $list_dumps_all = Cache::rememberForever('list_dumps_all', function () {

            return Dump::query()
                ->get_dumps()
                ->get();
        });
        $one_dump = $list_dumps_all->firstWhere('slug', $slug);
        return $one_dump;


    }


}


