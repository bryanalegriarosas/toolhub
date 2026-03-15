<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        if ($request->filled('website') || $request->input('submitted_at') > now()->subSeconds(3)) {
            return back()->with('error', 'Bot detected!');
        }

        $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'subject' => 'nullable|string|max:150',
            'message' => 'required|string|max:2000',
        ]);

        Contact::create($request->all());

        return back()->with('success','Message sent!');
    }
}
