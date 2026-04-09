<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ToolVisit extends Model
{
    protected $fillable = [
        'tool_id',
        'ip_address',
        'visit_date',
    ];

    protected $casts = [
        'visit_date' => 'date',
    ];

    public function tool(): BelongsTo
    {
        return $this->belongsTo(Tool::class);
    }

    /**
     * Check if a visit from this IP already exists for today
     */
    public static function hasVisitedToday($toolId, $ipAddress): bool
    {
        return self::where('tool_id', $toolId)
            ->where('ip_address', $ipAddress)
            ->where('visit_date', now()->toDateString())
            ->exists();
    }

    /**
     * Record a new visit
     */
    public static function recordVisit($toolId, $ipAddress): self
    {
        return self::create([
            'tool_id' => $toolId,
            'ip_address' => $ipAddress,
            'visit_date' => now()->toDateString(),
        ]);
    }
}
