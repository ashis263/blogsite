<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Blog;
use App\Models\Premium_member;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;
use App\Mail\SendMail;

class BlogController extends Controller
{
    function register(Request $request)
    {
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);
        return $user;
    }

    function test(){
        return 'Hello world';
    }

    function blogs()
    {
        return Cache::remember('blogs', 600, function () {
            return Blog::with('user')->get();
        });

    }

    function create(Request $request)
    {
        $title = $request->input('title');
        $description = $request->input('description');
        $userId = $request->input('user_id');

        $email = "akj.bdin@gmail.com";
        Mail::to($email)->send(new SendMail($title, $description, $userId));

        return Blog::create([
            'title' => $title,
            'user_id' => $userId,
            'description' => $description
        ]);
    }

    function dashboard(Request $request)
    {
        $id = $request->input('id');
        $blogs = Blog::where('user_id', $id)->get();
        return $blogs;
    }

    function premium($id)
    {
        if(Premium_member::where('user_id', $id)->first()) {
            return ["isPremium"=> true];
        }else{
            return ["isPremium"=> false];

        }
    }
}
