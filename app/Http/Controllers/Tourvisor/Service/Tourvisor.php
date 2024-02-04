<?php
namespace App\Http\Controllers\Tourvisor\Service;

class Tourvisor
{
    private $login = 'director@hottour.com';
    private $password = 'BM4foWz6wX48';
    private $url = 'https://tourvisor.ru/xml/';
    public $default = [];

    public function _get($query, $script)
    {
        $url = $this->url . $script . "?authlogin=" . $this->login . "&authpass=" . $this->password . "&format=json&" . http_build_query($query, "", "&", PHP_QUERY_RFC1738);

        $result = file_get_contents($url);
        return json_decode($result);
    }

    public function getDeparture()
    {

        $query = ['type' => 'departure'];
        $result = $this->_get($query, 'list.php');
        $default = json_decode(file_get_contents(__DIR__.'/departure.json'), true);
        $_d = [];
        foreach ($default as $departure) {
            $_d[$departure['id']] = $departure;
            if (!empty($departure['default'])) {
                $this->default['departure'] = $departure['id'];
            }
        }
        $list = ['popular' => [], 'other' => []];
        foreach ($result->lists->departures->departure as $departure) {
            if (isset($_d[$departure->id]) && $_d[$departure->id]['active']) {
                if ($_d[$departure->id]['popular']) {
                    $list['popular'][] = $_d[$departure->id];
                } else {
                    $list['other'][] = $_d[$departure->id];
                }

            }
        }
        return $list;
    }

    public function getCountry($dep = false)
    {
        if ($dep === false) {
            $dep = $this->default['departure'];
        }
        $default = json_decode(file_get_contents(__DIR__.'/countries.json'), true);
        $_d = [];

        foreach ($default as $country) {
            $_d[$country['id']] = $country;
            if (!empty($country['default'])) {
                $this->default['country'] = $country['id'];
            }
        }
        $query = ['type' => 'country'];
        if ($dep) {
            if (is_array($dep)) {
                $query['cndep'] = implode(",", $dep);
            } else {
                $query['cndep'] = $dep;
            }
        }

        $result = $this->_get($query, 'list.php');

        $list = ['popular' => [], 'other' => []];
        foreach ($result->lists->countries->country as $country) {
            if (isset($_d[$country->id]) && $_d[$country->id]['active']) {
                if ($_d[$country->id]['popular']) {
                    $list['popular'][] = $_d[$country->id];
                } else {
                    $list['other'][] = $_d[$country->id];
                }

            }
        }

        return $list;
    }

    public function getRegions($country = false)
    {
        if (!$country) {
            $country = $this->default['country'];
        }
        $query = ['type' => 'region', 'regcountry' => $country];

        $result = $this->_get($query, 'list.php');
        return $result;

    }

    public function getHotels($country = false, $regions = false, $addparams = [])
    {
        if (!$country) {
            $country = $this->default['country'];
        }
        $query = ['type' => 'hotel', 'hotcountry' => $country];
        if ($regions) {
            if (is_array($regions)) {
                $query['cndep'] = implode(",", $regions);
            } else {
                $query['hotregion'] = $regions;
            }
        }
        if ($addparams) {
            foreach ($addparams as $key => $value) {
                if (is_array($value)) {
                    $query[$key] = implode(",", $value);
                } else {
                    $query[$key] = $value;
                }
            }
        }
        $result = $this->_get($query, 'list.php');
        return $result;

    }

    public function getFlag($name)
    {
        $name = str_replace(" ", '_', mb_strtolower($name));
        $simbol = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'щ', 'ш', 'ъ', 'ь', 'э', 'ю', 'я', 'ы'];
        $repeat = ['a', 'b', 'v', 'g', 'd', 'e', 'z', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', 'c', 'c', 's', '', '', 'e', 'u', 'i', 'y'];
        return str_replace($simbol, $repeat, $name);
    }

}
