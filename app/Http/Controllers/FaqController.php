<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function insert_faq(Request $request){
        $faq = new Faq();
        $faq->name = $request->input('name');
        $faq->email = $request->input('email');
        $faq->message = $request->input('message');
        $faq->save();
        session()->flash('faqstatus','Message sent successfully');
        return redirect()->back();
    }
}
