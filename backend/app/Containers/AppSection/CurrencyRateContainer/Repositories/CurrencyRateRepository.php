<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\Repositories;

use App\Ship\Parents\Repositories\Repository;

class CurrencyRateRepository extends Repository
{
    public function getRate(
        string $currencyFromName,
        string $currencyToName
    ): ?float
    {
        return $this->model::query()
            ->select('currency_rates.rate')
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
            ->where('ct.name', $currencyToName)
            ->value('rate');
    }
}
