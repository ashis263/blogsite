<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\StripeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('register', [BlogController::class, 'register']);

Route::get("blogs", [BlogController::class, 'blogs']);

Route::post("create", [BlogController::class, 'create']);

Route::post("dashboard", [BlogController::class, 'dashboard']);

Route::get("premium/{id}", [BlogController::class, 'premium']);

Route::post('/checkout/{id}',[StripeController::class,'checkout'])->name('checkout');

Route::get('/success/{id}',[StripeController::class,'success'])->name('success');



