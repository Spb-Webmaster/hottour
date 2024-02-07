<?php

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Support\Flash\Flash;
use Support\Module\Module;
use Illuminate\Support\Facades\Route;


if (!function_exists('flash')) {

    function flash(): Flash
    {
        return app(Flash::class);
    }
}
/* вырезаем из телефона все, кроме цифр */
if (!function_exists('phone')) {
    function phone(string $phone = null): string|int
    {
        return trim(preg_replace('/^1|\D/', "", $phone));
    }
}

/* Удаляем лэш  */
if (!function_exists('cache_clear ')) {


    function cache_clear($model = null)
    {


     /*   if (!is_null($model)) {
            Cache::forget($model->position); // для модулей
        }*/
        Cache::forget('top_menu');
        Cache::forget('countries');

        Cache::forget('list_countries');
        Cache::forget('hot_categories_relation');
        Cache::forget('list_countries_all');
        Cache::forget('sub_countries');

        Cache::forget('excursion');
        Cache::forget('hotel');
        Cache::forget('info');
        Cache::forget('resort');


    }
}


if (!function_exists('format_phone')) {

    function format_phone($from): string
    {
        if ($from) {
            $to = sprintf("%s (%s) %s-%s-%s",
                substr($from, 0, 1),
                substr($from, 1, 3),
                substr($from, 4, 3),
                substr($from, 7, 2),
                substr($from, 9)
            );
            return $to;
        }
        return '';
    }
}


if (!function_exists('sity')) {

    function sity($value): string
    {
        foreach (config('selects.data_sity') as $k => $v)
        {
            if($value == $k) {
                return $v['text'];
            }
        }
       return $value;
    }
}



if (!function_exists('clearFolder')) {

    function clearFolder($path, $disk)
    {

        if (Storage::disk($disk)->directoryExists($path)) {

            $folderPath = public_path('storage/' . $disk . '/' . $path);

            File::deleteDirectory($folderPath);

            return __('Папка успешно очищена и удалена.');

        }
        return __('Папка не существует, файлов не было удалено.');


    }
}


if (!function_exists('module')) {

    function module(): Module
    {
        return app(Module::class);
    }
}

if (!function_exists('role')) {

    function role($id = null): string
    {
        if (!auth()->user()) {
            return 'guest';
        }

        if ($id) {

            $user = User::query()
                ->where('id', $id)
                ->first();
            if ($user) {
                if ($user->admin) {
                    return 'admin';
                }
                if ($user->manager) {
                    return 'manager';
                }
                return 'user';
            }
            return 'error_id';

        }
        $id = (auth()->user()) ? auth()->user()->id : '';
        if ($id) {

            $user = User::query()
                ->where('id', $id)
                ->first();
            if ($user) {
                if ($user->admin) {
                    return 'admin';
                }
                if ($user->manager) {
                    return 'manager';
                }
                return 'user';
            }
        }
        return 'error_id';

    }
}


if (!function_exists('num2word')) {

    function num2word($num, $words)
    {
        $num = $num % 100;
        if ($num > 19) {
            $num = $num % 10;
        }
        switch ($num) {
            case 1:
            {
                return ($words[0]);
            }
            case 2:
            case 3:
            case 4:
            {
                return ($words[1]);
            }
            default:
            {
                return ($words[2]);
            }
        }
    }


}


if (!function_exists('slugCheck')) {

    function slugCheck($str, Model $model)
    {
        $placeObj = $model;

        $businessName = $str; //Input from User
        $businessNameURL = Str::slug($businessName, '-'); //Convert Input to Str Slug

        //Check if this Slug already exists
        $checkSlug = $placeObj->whereSlug($businessNameURL)->exists();

        if ($checkSlug) {
            //Slug уже существует.
            //Добавьте числовой префикс в конце. Начиная с 1
            $numericalPrefix = 1;

            while (1) {
                //Check if Slug with final prefix exists.

                $newSlug = $businessNameURL . "-" . $numericalPrefix++; //new Slug with incremented Slug Numerical Prefix
                $newSlug = Str::slug($newSlug); //String Slug


                $checkSlug = $placeObj->whereSlug($newSlug)->exists(); //Check if already exists in DB
                //This returns true if exists.

                if (!$checkSlug) {

                    //There is not more coincidence. Finally found unique slug.
                    $slug = $newSlug; //New Slug

                    break; //Break Loop

                }


            }

        } else {
            //Slug do not exists. Just use the selected Slug.
            $slug = $businessNameURL;
        }

        return $slug;
    }


}


if (!function_exists('ext')) {

    function ext($ext): string
    {
        switch (mb_strtolower($ext)) {
            case 'jpg':
                $result = '/images/files/jpg.svg';
                break;
            case 'jpeg':
                $result = '/images/files/jpg.svg';
                break;
            case 'doc':
                $result = '/images/files/doc.svg';
                break;
            case 'docx':
                $result = '/images/files/doc.svg';
                break;
            case 'png':
                $result = '/images/files/jpg.svg';
                break;
            case 'txt':
                $result = '/images/files/txt.svg';
                break;
            case 'zip':
                $result = '/images/files/zip.svg';
                break;
            case 'rar':
                $result = '/images/files/zip.svg';
                break;
            case 'pdf':
                $result = '/images/files/pdf.svg';
                break;
            default:
                $result = '/images/files/zip.svg';

        }
        return $result;
    }
}

if (!function_exists('active_link')) {
    function active_link(string|array $names, string $class = 'active'): string|null
    {


        if (is_string($names)) {
            $names = [$names];
        }
        return Route::is($names) ? $class : null;
    }
}


if (!function_exists('active_linkMenu')) {
    function active_linkMenu(string|array $names, string $class = 'active'): string|null
    {

       // dump(url()->current());
        return ($names == url()->current() ) ? $class : null;
    }
}


if (!function_exists('route_name')) {
    function route_name():string|null
    {

        return Route::currentRouteName();
    }
}


if (!function_exists('shortcode')) {
    function shortcode($html)
    {


        preg_match_all("/\{(.+?)\}/", $html, $matches);
        if($matches[1]) {
            foreach ($matches[1] as $match) {
                //dd($match);
                $html = str_replace('{'.$match.'}', '<embed style="width: 100%" width="100%" height="480" src="https://www.youtube.com/embed/'.$match.'" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></embed>', $html);
            }
            //  return implode(',', $matches[1]);
return $html;
        }
        return  $html;
     }
}

if (!function_exists('rusdate')) {
    function rusdate($timestump):string|null
    {
        $month = [1=>"Янв",2=> "Фев",3=>"Мар",4=>"Апр",5=>"Май",6=>"Июн",7=>"Июл",8=>"Авг",9=>"Сен",10=>"Окт",11=>"Ноя",12=>"Дек"];
        $return = date('d', $timestump);
        $return .= " " . $month[date('n', $timestump)];
        return $return;
    }
}


if (!function_exists('intervention')) {
    function intervention(string $size, string $image, string $method = 'fit')
    {
        $dir = 'countries';
       // $method = 'fit'; // 'resize|crop|fit'
        $file = File::basename($image);

       // dd($image);
        abort_if(!in_array($size, config('thumbnail.allowed_sizes', [])),
            403,
            'size not allowed'
        );


        $storage = Storage::disk('intervention');


        $realPath = $image;
        $newDirPath = "$dir/$method/$size";
        $resultPaht = "$newDirPath/$file";

        if(!$storage->exists($newDirPath)) {
            $storage->makeDirectory($newDirPath);
        }


        if(!$storage->exists($resultPaht)) {

            $image = Image::make($storage->path($realPath));


            [$w, $h] = explode('x', $size);

            $image->{$method}($w, $h);

            $image->save($storage->path($resultPaht));


        }


        return 'storage/' . $resultPaht;

    }
}





