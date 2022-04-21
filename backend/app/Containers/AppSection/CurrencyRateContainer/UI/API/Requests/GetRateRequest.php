<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\UI\API\Requests;

use App\Ship\Parents\Requests\Request;

/**
 * @property $currency_from_name
 * @property $currency_to_name
 */
class GetRateRequest extends Request
{
    public function rules(): array
    {
        return [
            'currency_from_name' => 'string|required',
            'currency_to_name' => 'string|required',
        ];
    }
}
