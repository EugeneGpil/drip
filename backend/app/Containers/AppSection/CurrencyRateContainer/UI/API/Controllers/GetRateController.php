<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\UI\API\Controllers;

use App\Containers\AppSection\CurrencyRateContainer\Actions\GetRateAction;
use App\Containers\AppSection\CurrencyRateContainer\UI\API\Requests\GetRateRequest;
use App\Ship\Parents\Controllers\ApiController;

class GetRateController extends ApiController
{
    public function __invoke(GetRateRequest $request): array
    {
        $rate = app(GetRateAction::class)
            ->run($request->currency_from_name, $request->currency_to_name);

        return ['rate' => $rate];
    }
}
