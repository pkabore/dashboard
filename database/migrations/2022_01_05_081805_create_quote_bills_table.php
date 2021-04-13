<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuoteBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quote_bills', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->nullable();
            $table->string('client_name')->max(256)->nullable();
            $table->string('client_email')->max(256)->nullable();
            $table->string('client_phone')->max(256)->nullable();
            $table->boolean('is_quote')->nullable()->default(false);
            $table->boolean('is_bill')->nullable()->default(false);
            $table->string('receipt_id');
            $table->string('description')->max(256);
            $table->double('partial')->min(0);//partial total
            $table->double('taxes')->min(0);//taxes
            $table->double('total')->min(0);//ttc total
            $table->double('shipment')->min(0)->nullable();//shipment fees
            $table->string('status')->max(64)->nullable()->default('Non Payé');//sale status
            $table->timestamp('deadline')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quote_bills');
    }
}
