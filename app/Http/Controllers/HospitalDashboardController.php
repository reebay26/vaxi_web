<?php

namespace App\Http\Controllers;

use App\Models\Vaccine;
use App\Models\Appointment;
use Illuminate\Http\Request;
use App\Mail\AppointmentBooked;
use App\Models\HospitalRegister;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class HospitalDashboardController extends Controller
{
    public function add_hospital(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'hospitalname' => 'required|string|max:30',
            'hospitaladdress' => 'required|string|max:200',
            'hospitalnumber' => 'required|string|max:30',
            'description' => 'required|string|max:200',
            'hospitalimage' => 'required|file|mimes:jpg,jpeg,png|max:2048',
        ]);



        // Handle the file upload
        $filePath = null;
        if ($request->hasFile('hospitalimage')) {
            $filePath = $request->file('hospitalimage')->store('documents', 'public');
        }

        // Create and save
        $hospital = new HospitalRegister();
        $hospital->hospitalname = $request->input('hospitalname');
        $hospital->hospitaladdress = $request->input('hospitaladdress');
        $hospital->hospitalnumber = $request->input('hospitalnumber');
        $hospital->description = $request->input('description');
        $hospital->user_id = auth()->id(); // Set the user_id to the currently authenticated user

        if ($filePath) {
            $hospital->hospitalimage = $filePath;
        }
        $hospital->save();

        // Flash success message
        session()->flash('status', 'Hospital registered successfully.');
        return redirect()->back();
    }
    public function hospital_details(){
        $hospital_data=HospitalRegister::all();
        // Generate URLs for the hospitalimage
 foreach ($hospital_data as $hospitals) {
    if ($hospitals->hospitalimage) {
        $hospitals->hospitalimage_url = Storage::url($hospitals->hospitalimage);
    }
}
$vaccine_details=Vaccine::all();
        return view('vaccine.hospital',compact('hospital_data','vaccine_details'));
    }


    public function hospital_appointment()
    {
        // Get appointments for the logged-in hospital
        $hospital = auth()->id(); // or use session if you are not using auth
        $hospitalAppointments = Appointment::where('hospital_id', $hospital)->get();

        return view('hospital.hospital_appointment', compact('hospitalAppointments'));


}
public function updateappointmentStatus(Request $request, $id)
 {
    $a_details = Appointment::find($id);
     if ($a_details) {
 $newStatus=$request->input('status');
 $a_details->status=$newStatus;
 $a_details->save();

 if($newStatus === 'approved'){
     // send email to parent
     Mail::to($a_details->parent_email)->send(new AppointmentBooked($a_details));
 }

 else{
    return redirect()->back()->with('error', 'Appointment not find');
 }
 session()->flash('status','Confirmation Email sent successfully');
         return redirect()->back();
     }


 }
}
