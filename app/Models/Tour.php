<?php

namespace App\Models;

use Domain\Tour\QueryBuilders\TourQueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{

    public $table = "tours";

    protected $fillable = [
        'title',
        'subtitle',
        'title_for_menu',
        'slug',
        'img',
        'imgflag',
        'tour_id',
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

    /**
     * Создание метода вывода со своим ExcursionQueryBuilder
     */
    public function newEloquentBuilder($query):TourQueryBuilder
    {
        return new TourQueryBuilder($query);
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
