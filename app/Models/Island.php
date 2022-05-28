<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Island extends Model
{
    use HasFactory;
    protected $fillable = ['atoll', 'name'];

    public function adrs(){
        return $this->hasMany(Adr::class,'adr_id');
    }
}
