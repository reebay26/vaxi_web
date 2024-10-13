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
        Schema::create('child_vaccines', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('child_id');
            $table->unsignedBigInteger('vaccine_id');
            $table->boolean('status')->default(0); // 1 for yes, 0 for no
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('child_id')->references('id')->on('register_children')->onDelete('cascade'); // Correct table name
            $table->foreign('vaccine_id')->references('id')->on('vaccines')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('child_vaccines');
    }
};
