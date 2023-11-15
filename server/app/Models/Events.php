<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;

    protected $table = 'events';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name', 'description', 'date', 'place'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $hidden = ['pivot'];
    protected $casts = [
        'date' => 'datetime',
    ];

    public function assistants()
    {
        return $this->belongsToMany(User::class, 'user_event_registration', 'event_id', 'user_id');
    }

    public function futureEvents($query)
    {
        return $query->where('date', '>', now());
    }
}
