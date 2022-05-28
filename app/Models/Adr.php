<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adr extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'district'];

    public function island(){
        return $this->belongsTo(Island::class,'island_id','id');
    }
    public function patients(){
        return $this->hasMany(Adr::class,'user_id');
    }
}
