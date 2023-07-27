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
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable(false);
            $table->year('year')->nullable(false);
            $table->integer('length_minutes')->nullable(false);
            $table->string('genre')->nullable(false);
            $table->unsignedBigInteger('director_id')->nullable();
            $table->unsignedBigInteger('actor_id')->nullable();
            $table->boolean('is_removed')->default(false);

            $table->foreign('director_id')
            ->references('id')
            ->on('directors')
            ->onDelete('set null');

            $table->foreign('actor_id')
            ->references('id')
            ->on('actors')
            ->onDelete('set null');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
