<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\Actions;

use App\Containers\AppSection\CurrencyRateContainer\Clients\Drip\DripSirdar;
use App\Containers\AppSection\CurrencyRateContainer\Repositories\CurrencyRateRepository;
use App\Ship\Parents\Actions\Action;
use App\Ship\Telegram\Log\TelegramLog;

class UpdateDripRateAction extends Action
{
    private DripSirdar $client;
    private CurrencyRateRepository $repository;
    private TelegramLog $log;

    public function __construct()
    {
        $this->client = app(DripSirdar::class);
        $this->repository = app(CurrencyRateRepository::class);
        $this->log = app(TelegramLog::class);
    }

    public function run(): bool
    {
        $rate = $this->client->getDripRate();

        if ($rate === null) {
            return false;
        }

        $fromCurrencyName = 'usd';
        $toCurrencyName = 'drip';

        $currencyRate = $this->repository
            ->updateCurrencyRate($fromCurrencyName, $toCurrencyName, $rate);

        if ($currencyRate === null) {
            $method = __METHOD__;
            $error = "Update currency rate error. Currency not found in database\n"
                . "$method\n"
                . "FROM_CURRENCY_NAME=$fromCurrencyName\n"
                . "TO_CURRENCY_NAME=$toCurrencyName\n"
                . "RATE=$rate\n";
            $this->log->error($error);

            return false;
        }

        return true;
    }
}
