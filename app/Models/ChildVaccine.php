<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChildVaccine extends Model
{
    use HasFactory;
    protected $fillable=['child_id','vaccine_id','status'];
}
