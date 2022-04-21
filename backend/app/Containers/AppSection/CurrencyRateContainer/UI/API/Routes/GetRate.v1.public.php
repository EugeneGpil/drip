<?php declare(strict_types=1);

/**
 * @apiGroup            CurrencyRate
 * @apiName             getRate
 *
 * @api                 {GET} /v1/currency_rate/rate
 * @apiDescription      Get rate by currency from and currency to names
 *
 * @apiVersion          1.0.0
 * @apiPermission       none
 *
 * @apiParam            {String}    currency_from_name
 * @apiParam            {String}    currency_to_name
 *
 * @apiSuccessExample   {json}  Success-Response:
 * HTTP/1.1 204 OK
 * { 'rate': 14.43 }
 */

use App\Containers\AppSection\CurrencyRateContainer\UI\API\Controllers\GetRateController;
use Illuminate\Support\Facades\Route;

Route::get('currency_rate/rate', [GetRateController::class, '__invoke'])
    ->name('api.v1.currency_rate.rate.get');
