<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\Passport;
use Symfony\Component\HttpFoundation\Response;

class ClientAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        $accessToken = $request->bearerToken();

        if (!$accessToken) {
            return response('Unauthorized access', 401);
        }

        //$token = Passport::token()->where('id', $accessToken)->first();
        $token = DB::table('oauth_clients')
            ->where('secret', $accessToken)
            ->first();

        if (!$token) {
            return response('Invalid token', 401);
        }

        return $next($request);
    }
}
