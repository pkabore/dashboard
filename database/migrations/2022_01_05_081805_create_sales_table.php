<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->nullable();
            $table->boolean('is_invoice')->nullable()->default(false);
            $table->boolean('is_bill')->nullable()->default(false);
            $table->string('receipt_id');
            $table->double('partial')->min(0);   //partial total
            $table->double('taxes')->min(0);   //taxes
            $table->double('total')->min(0);   //ttc total
            $table->double('shipment')->min(0)->nullable();   //shipment fees
            $table->string('status')->max(64)->nullable()->default('Payé');   //sale status
            $table->timestamp('date');
            $table->timestamp('due_date')->nullable();
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
        Schema::dropIfExists('sales');
    }
}
