<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Undangan extends Model
{
    /** @use HasFactory<\Database\Factories\UndanganFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'text',
        'received_at',
    ];
}
