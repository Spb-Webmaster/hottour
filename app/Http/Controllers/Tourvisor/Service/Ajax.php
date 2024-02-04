<?php

namespace App\Http\Controllers\Tourvisor\Service;

class Ajax
{
    public $api;

    public function __construct()
    {
        $this->api = new Tourvisor();
    }

    public function getRegion(){
        $params = $_POST;
        if(!empty($params['onlyHotels'])){
            return $this->api->getHotels($params['country_id']);
        } else {
            $result = $this->api->getRegions($params['country_id']);
            $hotels = $this->api->getHotels($params['country_id']);
            $result->lists->hotels = $hotels->lists->hotels;
            $result->regions = $this->getRegionsHtml($result->lists->regions->region);
            return $result;
        }
    }

    public function getRegionsHtml($list){
        $html = '';
        foreach($list as $region) {
            $html .= '<label class="control control-checkbox">' . $region->name;
            $html .= '<input class="region_checkbox" type="checkbox" name="region[]" value="' . $region->id . '" data-title="' . $region->name . '">';
            $html .= '<span class="control_indicator"></span></label>';
        }
        return $html;
    }

    public function searchTour(){
        $params = $_POST;
        if(is_array(@$params['region'])) {
            $params['regions'] = implode(",",$params['region']);
        } else {
            $params['regions'] = @$params['region'];
        }
        unset($params['region']);
        if(is_array(@$params['services'])) $params['services'] = implode(",",$params['services']);
        if(is_array(@$params['hotels'])) $params['hotels'] = implode(",",$params['hotels']);
        $dataRenge = explode("-",$params['daterange']);
        unset($params['daterange']);
        $params['datefrom'] = trim($dataRenge[0]);
        $params['dateto'] = trim($dataRenge[1]);
        $params['currency'] = 0;
        if(!empty($params['hotelstars'])){
            $params['stars'] = $params['hotelstars'];
            unset($params['hotelstars']);
        }
        if(!empty($params['hotelrating'])){
            $params['rating'] = $params['hotelrating'];
            unset($params['hotelrating']);
        }

        $child = explode(":",@$params['child']);
        $infant = @$params['infant'];
        $params['priceto'] = (int)trim(str_replace([' ',' '], '', $params['priceto']));
        $params['pricefrom'] = (int)trim(str_replace([' ',' '], '', $params['pricefrom']));
        unset($params['infant']);
        $params['child'] = 0;
        $_i = 1;
        if(!empty($child)){
            $params['child'] = $child[0];
            if(!empty($child[1])) {
                $year = explode(',',$child[1]);

                foreach ($year as $_y){
                    $params["childage{$_i}"] = (int)$_y;
                    $_i++;
                }
            }
        }
        if(!empty($infant)){
            $params['child'] += $infant;
            for($i=0;$i<$infant;$i++){
                $params["childage{$_i}"] = 1;
                $_i++;
            }
        }

        return $this->api->_get($params, 'search.php');
    }

    public function searchTourStatus(){
        $params['requestid'] = $_POST['requestid'];
        $params['type'] = 'status';
        return $this->api->_get($params, 'result.php');
    }

    public function searchTourResult(){
        $params['requestid'] = $_POST['requestid'];
        $params['type'] = 'result';
        $params['page'] = $_POST['page'];
        $result = $this->api->_get($params, 'result.php');
        foreach ($result->data->result->hotel as $key => $hotel){

            $hotel_result = $this->api->_get(['hotelcode'=>$hotel->hotelcode], 'hotel.php');
            $result->data->result->hotel[$key]->hotels_info = $hotel_result->data->hotel;

            if(!empty($hotel_result->data->hotel->coord1)) {
                $result->data->result->hotel[$key]->hotels_info->addinfo = (object)['coord1' => $hotel_result->data->hotel->coord1, 'coord2' => $hotel_result->data->hotel->coord2];
            } else {
                $result->data->result->hotel[$key]->hotels_info->addinfo = (object)['coord1' => '', 'coord2' => ''];
            }
            $result->data->result->hotel[$key]->price_for_site = $hotel->tours->tour[0]->price;
        }
        return $result;
    }
}


