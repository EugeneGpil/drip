<?php

namespace App\Containers\AppSection\CurrencyRateContainer\Actions;

use App\Containers\AppSection\CurrencyRateContainer\Clients\CoinGecko\CoinGeckoSirdar;
use App\Containers\AppSection\CurrencyRateContainer\Repositories\CurrencyRateRepository;
use App\Ship\Parents\Actions\Action;
use App\Ship\Telegram\Log\TelegramLog;

class UpdateBnbRateAction extends Action
{
    private CoinGeckoSirdar $geckoClient;
    private CurrencyRateRepository $repository;
    private TelegramLog $log;

    public function __construct()
    {
        $this->geckoClient = app(CoinGeckoSirdar::class);
        $this->repository = app(CurrencyRateRepository::class);
        $this->log = app(TelegramLog::class);
    }

    public function run(): bool
    {
        $currencyId = 'binancecoin';
        $vsCurrencyId = 'usd';
        $rate = $this->geckoClient->getRate($currencyId, $vsCurrencyId);

        if ($rate === null) {
            return false;
        }

        $toCurrencyName = 'bnb';
        $currencyRate = $this->repository->updateCurrencyRate($vsCurrencyId, $toCurrencyName, $rate);

        if ($currencyRate === null) {
            $method = __METHOD__;
            $error = "Update currency rate error. Currency rate not found in database\n"
                . "$method\n"
                . "CURRENCY_ID=$currencyId\n"
                . "VS_CURRENCY_ID=$vsCurrencyId\n"
                . "TO_CURRENCY_NAME=$toCurrencyName\n"
                . "RATE=$rate";
            $this->log->error($error);
            return false;
        }

        return true;
    }
}
