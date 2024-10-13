<?php

namespace App\Http\Controllers;

use App\Models\HospitalRegister;
use Illuminate\Http\Request;

class BasicController extends Controller
{
    public function index(){

        return view('vaccine.index');
    }
    public function index1(){

        return view('vaccine.index1');
    }
    public function index2(){

        return view('vaccine.index2');
    }
    public function info(){

        return view('vaccine.info');
    }
    public function program(){

        return view('vaccine.program');
    }
    public function faq(){

        return view('vaccine.faq');
    }
    public function vaccine_pg(){

        return view('vaccine.vaccine_page');
    }
    public function contact(){

        return view('vaccine.contact');
    }



    public function about(){

        return view('vaccine.about');
    }

    public function child(){

        return view('vaccine.child');
    }
    public  function hospital(){

        return view('vaccine.hospital');
    }


}
