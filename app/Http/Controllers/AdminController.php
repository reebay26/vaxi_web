<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Contact;
use App\Models\Appointment;
use App\Models\HospitalRegister;
use Illuminate\Http\Request;
use App\Models\RegisterChild;

class AdminController extends Controller
{
    public function faq_details(){
        $faq_details=Faq::all();
        return view('admin.faq_details',compact('faq_details'));
    }

public function contact_details(){
$contact_details =Contact::all();
return view('admin.contact_details',compact('contact_details'));
}
public function admin_dashboard(){
    $appointment=Appointment::latest()->limit(10)->get();
    $child_details=RegisterChild::latest()->limit(10)->get();
    $fhospital= RegisterChild::latest()->limit(10)->get();
    return view('admin.admin_dashboard',compact('appointment','child_details' , 'fhospital'));
}
public function appointment_details(){
    $appointment_details =Appointment::all();
    return view('admin.appointment_details',compact('appointment_details'));
    }

    public function fetchhospital(){
        $fetchhospital = HospitalRegister::all();
        return view('admin.hospital_details',compact('fetchhospital'));
        }

        public function child_details(){
            $child_details = RegisterChild::all();
            return view('admin.child_details',compact('child_details'));
            }

}
