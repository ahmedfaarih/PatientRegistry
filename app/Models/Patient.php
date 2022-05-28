<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'dob', 'national_id','adr_id'];

    public function adr()
    {
        return $this->belongsTo(Adr::class);
    }
}
