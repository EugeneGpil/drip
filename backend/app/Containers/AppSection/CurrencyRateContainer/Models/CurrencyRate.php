<?php /** @noinspection PhpUnused */
declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\Models;

use App\Ship\Parents\Models\Model;

class CurrencyRate extends Model
{
    protected $fillable = [
        'currency_from_id',
        'rate',
        'currency_to_id',
    ];
}
