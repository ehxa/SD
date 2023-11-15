<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_Event_Registration extends Model
{
    use HasFactory;


    protected $table = 'user_event_registration';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_email', 'events_id', 'registered_date',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'registered_date' => 'datetime',
        'events_id' => 'hashed',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_email');
    }

    public function event()
    {
        return $this->belongsTo(Events::class, 'events_id');
    }
}
