<?php

namespace App\Http\Controllers;

use App\Models\Premium_member;
use Illuminate\Http\Request;

class StripeController extends Controller
{

    public function index()
    {
        return view('index');
    }
    public function checkout($id)
    {
        $url='http://127.0.0.1:8000/api/success/'.$id;

        \Stripe\Stripe::setApiKey(config(key: 'stripe.sk'));

        $session = \Stripe\Checkout\Session::create([
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'bdt',
                        'product_data' => [
                            'name' => 'Blog membership'
                        ],
                        'unit_amount' => 50000
                    ],
                    'quantity' => 1
                ],
            ],
            'mode' => 'payment',
            'success_url' => $url,
            'cancel_url' => route(name: 'index')
        ]);

        return redirect()->away($session->url);
    }
    public function success($id)
    {
         Premium_member::create([
            'user_id' => $id
        ]);
        return redirect()->away('http://127.0.0.1:8000/api/success/'.$id);
    }
}
