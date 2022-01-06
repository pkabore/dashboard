<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id');
            $table->string('name')->max(256);
            $table->string('description')->max(512);
            $table->double('partial_total')->min(0);   //partial total
            $table->double('taxes')->min(0);   //taxes
            $table->double('shipment')->min(0);   //shipment fees
            $table->string('status')->max(64);   //sale status
            $table->double('total')->min(0); // total
            $table->softDeletes();
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
        Schema::dropIfExists('invoices');
    }
}
