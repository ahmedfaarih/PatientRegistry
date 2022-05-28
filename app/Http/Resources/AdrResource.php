<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdrResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'house_name'=> $this->house_name,
            'district'=> $this->district,
            /* 'island_id'=> $this->island_id,*/
            'island'=>new IslandResource($this->island)
        ];
    }
}
