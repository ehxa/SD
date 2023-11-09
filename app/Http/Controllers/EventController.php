<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Events;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function events()
    {
        $events = Events::select('name', 'date', 'place')->get();

        return response()->json($events);
    }
}
