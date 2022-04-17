<?php /** @noinspection PhpUnused */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class CreateBaseCurrencyRates extends Migration
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

        $currencies = $this->getCurrencies();

        $usdId = $currencies['usd'];
        $bnbId = $currencies['bnb'];
        $dripId = $currencies['drip'];

        $bnb = $defaults;
        $bnb['currency_from_id'] = $usdId;
        $bnb['currency_to_id'] = $bnbId;
        $bnb['rate'] = 414.33;

        $drip = $defaults;
        $drip['currency_from_id'] = $usdId;
        $drip['currency_to_id'] = $dripId;
        $drip['rate'] = 35.08;

        DB::table('currency_rates')->insert([$bnb, $drip]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        $currencies = $this->getCurrencies();

        $usdId = $currencies['usd'];
        $bnbId = $currencies['bnb'];
        $dripId = $currencies['drip'];

        DB::table('currency_rates')
            ->where('currency_from_id', $usdId)
            ->whereIn('currency_to_id', [$bnbId, $dripId])
            ->delete();
    }

    private function getCurrencies(): Collection
    {
        return DB::table('currencies')
            ->select('id', 'name')
            ->whereIn('name', ['usd', 'bnb', 'drip'])
            ->get()
            ->groupBy('name')
            ->map(fn($currency) => $currency->first()->id);
    }
}
