<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\UI\CLI\Commands;

use App\Containers\AppSection\CurrencyRateContainer\Clients\CoinGecko\CoinGeckoSirdar;
use App\Containers\AppSection\CurrencyRateContainer\Repositories\CurrencyRateRepository;
use App\Ship\Telegram\Log\TelegramLog;
use Illuminate\Console\Command;

class UpdateUsdToBnbRateCommand extends Command
{
    protected $signature = 'update-usd-to-bnb-rate';
    private CoinGeckoSirdar $geckoClient;
    private CurrencyRateRepository $repository;
    private TelegramLog $log;

    public function __construct()
    {
        parent::__construct();

        $this->geckoClient = app(CoinGeckoSirdar::class);
        $this->repository = app(CurrencyRateRepository::class);
        $this->log = app(TelegramLog::class);
    }

    public function handle(): void
    {
        $currencyId = 'binancecoin';
        $vsCurrencyId = 'usd';
        $rate = $this->geckoClient->getRate($currencyId, $vsCurrencyId);

        if ($rate === null) {
            return;
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
            $this->line($error);
            return;
        }

        $this->line("SUCCESS! RATE=$rate");
    }
}
