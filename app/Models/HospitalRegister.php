<?php

namespace App\Models;

use App\Models\Appointment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HospitalRegister extends Model
{
    use HasFactory;
    protected $fillable=['hospitalname','hospitaladdress','hospitalnumber','description','hospitalimage' , 'user_id'];
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
