<?php
namespace Domain\Travel\QueryBuilders;
use Illuminate\Database\Eloquent\Builder;

class TravelQueryBuilder extends Builder
{
    public function get_resorts()
    {
        return $this->where('published', 1);

    }

}


