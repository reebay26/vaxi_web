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
        Schema::create('hospital_registers', function (Blueprint $table) {
            $table->id();
            $table->string('hospitalname',30);
            $table->text('hospitaladdress',200);
            $table->string('hospitalnumber',30);
            $table->text('description',200);
            $table->string('hospitalimage',2048);
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hospital_registers');
    }
};
