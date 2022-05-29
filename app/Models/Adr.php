<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adr extends Model
{
    use HasFactory;

    protected $fillable = ['house_name', 'district','island_id'];

    public function island(){
        return $this->belongsTo(Island::class,);
    }
    public function patients(){
        return $this->hasMany(Patient::class,);
    }
}
