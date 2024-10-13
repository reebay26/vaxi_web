<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string('child_name',30);
            $table->string('child_dob',30);
            $table->string('parent_name',30);
            $table->string('parent_email',30);
            $table->string('parent_phone',30);
            $table->string('vaccine_type',30);
            $table->date('date',30);
            $table->string('time',30);
            $table->string('hospital_name',30);
            $table->string('gender',30);
            $table->string('child_allergies',45)->nullable();
            $table->text('message',200)->nullable();
            $table->unsignedBigInteger('hospital_id');
            $table->string('status')->default('pending');
            $table->foreign('hospital_id')->references('id')->on('hospital_registers')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
