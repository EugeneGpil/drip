<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\Clients\Drip;

use App\Ship\Telegram\Log\TelegramLog;

class DripSirdar
{
    private DripClient $client;
    private TelegramLog $log;

    public function __construct()
    {
        $this->client = app(DripClient::class);
        $this->log = app(TelegramLog::class);
    }

    public function getDripRate(): ?float
    {
        $url = '/prices';
        $response = $this->client->fetch($url);
        if ($response === null) {
            return null;
        }

        $lastPrice = collect($response)->last();

        if (
            $lastPrice === null
            || !isset($lastPrice[1])
            || !$lastPrice[1]
        ) {
            $responseStr = json_encode($response);
            $methodName = __METHOD__;

            $this->log->error(
                "Get drip rates error\n"
                . "$methodName\n"
                . "URL=$url\n"
                . "RESPONSE=$responseStr\n"
            );

            return null;
        }

        return $lastPrice[1];
    }
}
