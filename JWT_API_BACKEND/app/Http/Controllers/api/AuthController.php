<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)    
    {
        $validator= Validator::make($request->all(), [
            
        ]);


    }
}
