<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Premium_member extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }

    // protected $table = 'premium_members';

    protected $fillable = [
        'user_id'
    ];
}
