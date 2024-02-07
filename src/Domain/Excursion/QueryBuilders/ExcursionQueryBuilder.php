<?php
namespace Domain\Excursion\QueryBuilders;

use Illuminate\Database\Eloquent\Builder;

class ExcursionQueryBuilder extends Builder
{
    public function get_excursions()
    {
        return $this->where('published', 1);

    }
}
