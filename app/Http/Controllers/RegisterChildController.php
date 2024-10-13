<?php

namespace App\Http\Controllers;

use App\Mail\Child_Vaccine;
use Carbon\Carbon;
use App\Models\Vaccine;
use App\Models\ChildVaccine;
use Illuminate\Http\Request;
use App\Models\RegisterChild;
use Illuminate\Support\Facades\Mail;

class RegisterChildController extends Controller
{
    public function register_form(Request $request)
{
    // Validate the incoming request data
    $request->validate([
        'child_name' => 'required|string|max:30',
        'dob' => 'required|date',
        'gender' => 'required|string|max:30',
        'parent_email' => 'required|email|max:30',
        // Add rules for each vaccine field if necessary
    ]);


    // Calculate age from the DOB
    $age = $this->calculateAge($request->dob);

    // Get the required vaccines for the child's age
    $requiredVaccines = $this->getVaccinationSchedule($age);

    // Store child information
    $child = RegisterChild::create([
        'child_name' => $request->input('child_name'),
        'dob' => $request->input('dob'),
        'gender' => $request->input('gender'),
        'parent_email' => $request->input('parent_email'),
    ]);


      // Store vaccination status and check for missed vaccines
      $missedVaccines = [];

      foreach ($requiredVaccines as $vaccine) {
          if ($request->input($vaccine) === 'yes') {
              $vaccineRecord = Vaccine::where('name', $vaccine)->first();

              if ($vaccineRecord) {
                  ChildVaccine::create([
                      'child_id' => $child->id,
                      'vaccine_id' => $vaccineRecord->id,
                  ]);
              }
          } else {
              $missedVaccines[] = $vaccine; // Add missed vaccine to the list
          }
      }
            // Get upcoming vaccines for the child's age
            $upcomingVaccines = $this->getUpcomingVaccinationSchedule($age);

            // Send email to parent
            Mail::to($request->input('parent_email'))->send(new Child_Vaccine($missedVaccines, $upcomingVaccines));
            
      return redirect()->back()->with('success', 'Child registered successfully! All required vaccines administered.');
  }
    // Function to calculate age from the date of birth
    private function calculateAge($dob)
    {
        $dob = Carbon::parse($dob); // Parse the DOB using Carbon
        return $dob->diffInYears(now()); // Calculate the difference in years
    }
    private function getVaccinationSchedule($age)
{
    // Get the vaccines recommended for the child's age
    return Vaccine::where('age_recommended', '<=', $age)->pluck('name')->toArray();
}
private function getUpcomingVaccinationSchedule($age)
{
    // Get upcoming vaccines based on the child's age
    return Vaccine::where('age_recommended', '>', $age)->pluck('name')->toArray();
}

}



