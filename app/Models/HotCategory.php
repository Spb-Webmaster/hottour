<?php

namespace App\Models;

use Domain\Country\QueryBuilders\HotCategoryQueryBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Support\Traits\Models\HasThumbnail;

class HotCategory extends Model
{
    use HasThumbnail;


    protected $fillable = [
        'title',
        'subtitle',
        'title_for_menu',
        'slug',
        'img',
        'imgflag',
        'hot_category_id',
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
        return $this->belongsTo(self::class,  'hot_category_id');
    }

    public function excursions():HasMany
    {
        return $this->hasMany(Excursion::class);
    }

    public function resorts():HasMany
    {
        return $this->hasMany(Resort::class);
    }

    public function hotels():HasMany
    {
        return $this->hasMany(Hotel::class);
    }

    public function infos():HasMany
    {
        return $this->hasMany(Info::class);
    }

    /**
     * Создание метода вывода со своим HotCategoryQueryBuilder
     */
    public function newEloquentBuilder($query):HotCategoryQueryBuilder
    {
        return new HotCategoryQueryBuilder($query);
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
        return 'countries';
    }
}
