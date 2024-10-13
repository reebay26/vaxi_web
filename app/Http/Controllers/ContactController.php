<?php

namespace App\Http\Controllers;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{

public function contact(Request $request){
$contact = new Contact();
$contact->name = $request->input('name');
$contact->email = $request->input('email');
$contact->message = $request->input('message');
$contact->save();
session()->flash('contactstatus','message sent successfully');
return redirect()->back();

}
}
