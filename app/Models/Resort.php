<?php

namespace App\Models;

use Domain\Resort\QueryBuilders\ResortQueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Support\Traits\Models\HasThumbnail;

class Resort extends Model
{
    use HasThumbnail;


    protected $fillable = [
        'title',
        'subtitle',
        'title_for_menu',
        'slug',
        'img',
        'imgflag',
        'gallery',
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

    public function parent():BelongsTo
    {
        return $this->belongsTo(HotCategory::class,  'hot_category_id');
    }

    /**
     * Создание метода вывода со своим ResortQueryBuilder
     */
    public function newEloquentBuilder($query):ResortQueryBuilder
    {
        return new ResortQueryBuilder($query);
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

    protected function thumbnailDir(): string
    {
        return 'resorts';
    }
}
