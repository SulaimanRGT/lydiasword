<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CustomerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::user()->role == 'admin') if (Auth::user()->status == 1){
            return $next($request);
        }else{
            $message = 'You account is not active, please contact your admin for any inquiry';
            return redirect(route('status',$message));
        }
        return redirect('/');
    }
}
