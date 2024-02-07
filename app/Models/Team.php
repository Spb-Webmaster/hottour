<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Support\Traits\Models\HasThumbnail;


class Team extends Model
{
    use HasThumbnail;


    protected function thumbnailDir(): string
    {
        return 'images';
    }
}
