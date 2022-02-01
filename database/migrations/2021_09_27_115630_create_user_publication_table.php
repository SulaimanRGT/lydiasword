<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserPublicationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_publication', function (Blueprint $table) {
            $table->id();
            $table->integer('payment_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->integer('publication_id')->unsigned();
            $table->integer('is_paid')->default('0');
            $table->float('price');
            $table->enum('payment_type', ['Orange Money', 'Mobile Money', 'Credit Card', 'TipMe'])->default('Credit Card');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_publication');
    }
}
