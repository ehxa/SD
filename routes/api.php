<?php

use App\Http\Controllers\UserEventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/user/{email}/events', [UserEventController::class, 'getUserEvents']);
Route::post('/user/{email}/registeredEvents', [UserEventController::class, 'registeredEventsFromUser']);
Route::post('/user/{email}/paidEvents', [UserEventController::class, 'paidEventsFromUser']);
Route::post('/event/{id}/users', [UserEventController::class, 'getAssistants']);
Route::post('/event/{id}/paidUsers', [UserEventController::class, 'getPaidAssistants']);
Route::post('/event/{id}/count', [UserEventController::class, 'getTotalAssistants']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
