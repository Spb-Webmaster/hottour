<?php

namespace App\Models;

use Domain\Tour\QueryBuilders\TourQueryBuilder;
use Domain\Travel\QueryBuilders\TravelQueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Travel extends Model
{

    public $table = "travels";

    protected $fillable = [
        'title',
        'subtitle',
        'title_for_menu',
        'slug',
        'img',
        'imgflag',
        'travel_id',
        'travels_id',
        'smalltext',
        'text',
        'text2',
        'pageimg1',
        'text3',
        'pageimg2',
        'text',
        'published',
        'params',
        'metatitle',
        'description',
        'keywords',
        'sorting'
    ];

    protected $casts = [
        'params' => 'collection',
    ];

    public function parent():BelongsTo
    {
        return $this->belongsTo(self::class, 'travel_id');
    }


    /**
     * Создание метода вывода со своим ExcursionQueryBuilder
     */
    public function newEloquentBuilder($query):TravelQueryBuilder
    {
        return new TravelQueryBuilder($query);
    }

    protected static function boot()
    {
        parent::boot();

        static::created(function () {
            cache_clear();
        });

        static::updated(function () {
            cache_clear();
        });

        static::deleted(function () {
            cache_clear();
        });


    }

}
