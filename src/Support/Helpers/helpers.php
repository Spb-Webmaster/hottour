<?php

use App\Mail\SendMessage;
use App\Models\Manager;
use App\Models\MoonshineModuleText;
use App\Models\MoonshineModuleYoutube;
use App\Models\Project;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Support\Flash\Flash;
use Support\Manager\CardManager;
use Support\Module\Module;

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


        if (!is_null($model)) {
            Cache::forget($model->position); // для модулей
        }
        Cache::forget('list_articles');
        Cache::forget('list_articles_sorting');
        Cache::forget('category_composer');
        Cache::forget('team');
        Cache::forget('moonshine_module_text');
        Cache::forget('teaser_category');
        Cache::forget('cities');
        Cache::forget('social_network');

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

