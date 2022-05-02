<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\Clients\CoinGecko;

use App\Ship\Telegram\Log\TelegramLog;

class CoinGeckoSirdar
{
    private CoinGeckoClient $client;
    private TelegramLog $log;

    public function __construct()
    {
        $this->client = app(CoinGeckoClient::class);
        $this->log = app(TelegramLog::class);
    }

    public function getRate(string $currencyId, string $vsCurrencyId): ?float
    {
        $url = "/api/v3/simple/price/?ids=$currencyId&vs_currencies=$vsCurrencyId";
        $response = $this->client->fetch($url);
        if ($response === null) {
            return null;
        }
        if (
            !isset($response[$currencyId])
            || !isset($response[$currencyId][$vsCurrencyId])
            || !$response[$currencyId][$vsCurrencyId]
        ) {
            $responseStr = json_encode($response);
            $methodName = __METHOD__;

            $this->log->error(
                "Get currency rate error\n"
                . "$methodName\n"
                . "CURRENCY_ID=$currencyId\n"
                . "VS_CURRENCY_ID=$vsCurrencyId\n"
                . "URL=$url\n"
                . "RESPONSE=$responseStr\n"
            );

            return null;
        }

        return $response[$currencyId][$vsCurrencyId];
    }
}
