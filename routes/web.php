<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\BasicController;
use App\Http\Controllers\HospitalDashboardController;
use App\Http\Controllers\RegisterChildController;
use App\Models\Appointment;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('auth.register');
});
Route::get('/appointment_form', function () {
    return view('vaccine.appointment_Form');
});




Route::get('/hospital_dashboard', function () {
    return view('hospital.hospital_dashboard');
});
Route::get('/hospital_register', function () {
    return view('hospital.hospital_register');
});

Route::get('/hospital_register', function () {
    return view('hospital.hospital_register');
});



Route::post('/insert_faq', [FaqController::class,'insert_faq']);
Route::post('/contact', [ContactController::class,'contact']);
Route::post('/appointment', [AppointmentController::class,'appointment']);
Route::post('/register_form', [RegisterChildController::class,'register_form']);
Route::post('/add_hospital', [HospitalDashboardController::class,'add_hospital']);
Route::get('/hospital_appointment', [HospitalDashboardController::class,'hospital_appointment']);
Route::get('/faq_details', [AdminController::class,'faq_details']);
Route::get('/contact_details', [AdminController::class,'contact_details']);
Route::get('/admin_dashboard', [AdminController::class,'admin_dashboard']);
Route::get('/fetchhospital', [AdminController::class,'fetchhospital']);
Route::get('/child_details', [AdminController::class,'child_details']);
Route::get('/appointment_details', [AdminController::class,'appointment_details']);
Route::get('/hospital_details', [HospitalDashboardController::class,'hospital_details']);
Route::get('/appointment_hospitals', [AppointmentController::class,'appointment_hospitals']);
Route::get('/index', [BasicController::class,'index']);
Route::get('/index1', [BasicController::class,'index1']);
Route::get('/index2', [BasicController::class,'index2']);
Route::get('/info', [BasicController::class,'info']);
Route::get('/program', [BasicController::class,'program']);
Route::get('/faq', [BasicController::class,'faq']);
Route::get('/vaccine_pg', [BasicController::class,'vaccine_pg']);
Route::get('/contact', [BasicController::class,'contact']);
Route::get('/about', [BasicController::class,'about']);
Route::get('/child', [BasicController::class,'child']);
Route::get('/hospital', [BasicController::class,'hospital']);
Route::get('/appointment_form', [AppointmentController::class,'appointment_form']);

Route::patch('hospital/appointment/{id}/status', [HospitalDashboardController::class, 'updateappointmentStatus'])->name('hospital.updateappointmentStatus');


Route::get('/hospital_login', [AppointmentController::class, 'hospital_login']);


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        $user = Auth::user();

        // Role-based redirection logic
        if ($user->role === 'admin') {
            return redirect()->intended('/admin_dashboard');
        } elseif ($user->role === 'hospital') {
            return redirect()->intended('/hospital_dashboard');
        } elseif ($user->role === 'parent') {
            return redirect()->intended('/index');
        }
        return view('dashboard');
    })->name('dashboard');







});
