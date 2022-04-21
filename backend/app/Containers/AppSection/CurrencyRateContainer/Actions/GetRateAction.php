<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\Actions;

use App\Containers\AppSection\CurrencyRateContainer\Repositories\CurrencyRateRepository;
use App\Ship\Parents\Actions\Action;

class GetRateAction extends Action
{
    public function run(string $currencyFromName, string $currencyToName): ?float
    {
        return app(CurrencyRateRepository::class)
            ->getRate(
                $currencyFromName,
                $currencyToName
            );
    }
}
