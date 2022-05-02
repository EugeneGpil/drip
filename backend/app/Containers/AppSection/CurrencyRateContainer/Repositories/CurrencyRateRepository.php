<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\Repositories;

use App\Containers\AppSection\CurrencyRateContainer\Models\CurrencyRate;
use App\Ship\Parents\Repositories\Repository;
use Illuminate\Database\Eloquent\Builder;

class CurrencyRateRepository extends Repository
{
    public function getRate(
        string $currencyFromName,
        string $currencyToName
    ): ?float
    {
        $query = $this->model::query()
            ->select('currency_rates.rate');

        $query = $this->addWhereCurrencyNamesToQuery($query, $currencyFromName, $currencyToName);

        return $query->value('rate');
    }

    public function updateCurrencyRate(
        string $currencyFrom,
        string $currencyTo,
        float  $currencyRateValue
    ): ?array
    {
        $query = $this->model::query()
            ->select('currency_rates.*');

        $query = $this->addWhereCurrencyNamesToQuery($query, $currencyFrom, $currencyTo);

        /** @var CurrencyRate $currencyRate */
        $currencyRate = $query->first();

        if ($currencyRate === null) {
            return null;
        }

        $currencyRate->update([
            'rate' => $currencyRateValue,
        ]);

        return $currencyRate->toArray();
    }

    private function addWhereCurrencyNamesToQuery(
        Builder $query,
        string  $currencyFromName,
        string  $currencyToName
    ): Builder
    {
        return $query
            ->leftJoin(
                'currencies as cf',
                'cf.id',
                '=',
                'currency_rates.currency_from_id'
            )
            ->leftJoin(
                'currencies as ct',
                'ct.id',
                '=',
                'currency_rates.currency_to_id'
            )
            ->where('cf.name', $currencyFromName)
            ->where('ct.name', $currencyToName);
    }
}
