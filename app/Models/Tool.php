<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tool extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'icon',
        'description',
        'active'
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
