<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
   protected $fillable = ['child_name', 'child_dob', 'parent_name', 'parent_email', 'parent_phone', 'vaccine_type', 'date', 'time','hospital_name','gender','child_allergies', 'message','status'];
        public function hospital()
        {
            return $this->belongsTo(HospitalRegister::class);
        }

}
