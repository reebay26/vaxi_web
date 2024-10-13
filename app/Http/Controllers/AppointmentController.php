<?php

namespace App\Http\Controllers;
use App\Models\Vaccine;
use App\Models\Appointment;
use Illuminate\Http\Request;
use App\Mail\AppointmentBooked;
use App\Models\HospitalRegister;
use Illuminate\Support\Facades\Mail;

class AppointmentController extends Controller
{
    public function appointment(Request $request){


        $appointmentLimit = 5;

        // Check the number of existing appointments for the selected date and time
        $existingAppointments = Appointment::where('date', $request->input('date'))
            ->where('time', $request->input('time'))
            ->count();

        if ($existingAppointments >= $appointmentLimit) {
            session()->flash('bookedstatus', 'This time slot is fully booked. Please choose a different time.');
            return redirect()->back();
        }
         // Fetch the hospital record by the selected hospital name
    $hospital = HospitalRegister::where('hospitalname', $request->input('hospital_name'))->first();



        $appointment = new Appointment;
        $appointment->child_name = $request->input('child_name');
        $appointment->child_dob = $request->input('child_dob');
        $appointment->parent_name = $request->input('parent_name');
        $appointment->parent_email = $request->input('parent_email');
        $appointment->parent_phone = $request->input('parent_phone');
        $appointment->vaccine_type = $request->input('vaccine_type');
        $appointment->date = $request->input('date');
        $appointment->time = $request->input('time');
        $appointment->hospital_name = $request->input('hospital_name');
        $appointment->status = 'pending';
        $appointment->hospital_id = $hospital->id;

        $appointment->gender = $request->input('gender');
        $appointment->child_allergies = $request->input('child_allergies');
        $appointment->message = $request->input('message');
        $appointment->save();



        session()->flash('appointmentstatus','Your Appointment is pending');
        return redirect()->back();
    }

    public  function appointment_form(){
        $hospitals = HospitalRegister::all();
        $vaccine_details=Vaccine::all();
           return view('vaccine.appointment_Form',compact('hospitals','vaccine_details'));
       }





}
