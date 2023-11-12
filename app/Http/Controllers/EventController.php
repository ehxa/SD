<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Events;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function events()
    {
        $events = Events::select('id', 'name', 'date', 'place')->get();

        return response()->json($events);
    }

    public function filter(Request $request)
    {
        $name = $request->input('name');
        $date = $request->input('date');
        $place = $request->input('place');

        $query = Events::query();

        if ($name) {
            $query->where('name', 'like', "%$name%");
        }

        if ($date) {
            $query->whereDate('date', '=', $date);
        }

        if ($place) {
            $query->where('place', 'like', "%$place%");
        }

        $filteredEvents = $query->get();

        return response()->json($filteredEvents);
    }
}
