<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class CreateBaseCurrencies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        $now = now();
        $defaults = [
            'created_at' => $now,
            'updated_at' => $now,
        ];

        $usd = $defaults;
        $usd['name'] = 'usd';

        $bnb = $defaults;
        $bnb['name'] = 'bnb';

        $drip = $defaults;
        $drip['name'] = 'drip';
        DB::table('currencies')->insert([$usd, $bnb, $drip]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        DB::table('currencies')
            ->whereIn('name', ['usd', 'bnb', 'drip'])
            ->delete();
    }
}
