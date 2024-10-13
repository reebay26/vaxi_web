<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterChild extends Model
{
    use HasFactory;
    protected $fillable = ['child_name', 'dob', 'gender', 'parent_email'];
}
