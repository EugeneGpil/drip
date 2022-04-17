<?php /** @noinspection PhpUnused */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurrencyRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('currency_rates', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('currency_from_id');
            $table->float('rate');
            $table->unsignedBigInteger('currency_to_id');
            $table->timestamps();

            $table
                ->foreign('currency_from_id')
                ->references('id')
                ->on('currencies')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table
                ->foreign('currency_to_id')
                ->references('id')
                ->on('currencies')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->unique(['currency_from_id', 'currency_to_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('currency_rates');
    }
}
