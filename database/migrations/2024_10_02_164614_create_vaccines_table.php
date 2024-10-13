<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vaccines', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->integer('age_recommended'); // No need to specify length for integer
            $table->timestamps();
        });

        // Insert common vaccines
        DB::table('vaccines')->insert([
            ['name' => 'BCG', 'age_recommended' => 0],
            ['name' => 'Hepatitis_B', 'age_recommended' => 0],
            ['name' => 'Oral_Polio_Vaccine', 'age_recommended' => 0],
            ['name' => 'Inactivated_Polio_Vaccine', 'age_recommended' => 2],
            ['name' => 'DTP', 'age_recommended' => 2],
            ['name' => 'Haemophilus_Influenzae_Type_B', 'age_recommended' => 2],
            ['name' => 'Pneumococcal_Vaccine', 'age_recommended' => 2],
            ['name' => 'Rotavirus', 'age_recommended' => 2],
            ['name' => 'Measles_Mumps_Rubella', 'age_recommended' => 12],
            ['name' => 'Varicella', 'age_recommended' => 12],
            ['name' => 'Hepatitis_A', 'age_recommended' => 12],
            ['name' => 'Influenza', 'age_recommended' => 6],
            ['name' => 'Meningococcal_Vaccine', 'age_recommended' => 11],
            ['name' => 'Japanese_Encephalitis', 'age_recommended' => 9],
            ['name' => 'Typhoid_Vaccine', 'age_recommended' => 24],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vaccines');
    }
};
