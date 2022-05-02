<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\Clients\CoinGecko;

use App\Ship\Telegram\Log\TelegramLog;
use Exception as BaseException;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class CoinGeckoClient
{
    private Client $client;
    private TelegramLog $log;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://api.coingecko.com'
        ]);
        $this->log = app(TelegramLog::class);
    }

    public function fetch(string $url): ?array
    {
        $method = 'GET';
        $classMethod = __METHOD__;
        $errorInfo = "Coin gecko request error:\n"
            . "$classMethod\n"
            . "METHOD=$method\n"
            . "URL=$url";

        try {
            $res = $this->client->request($method, $url);
        } catch (GuzzleException $exception) {
            $this->log->error($errorInfo . $exception);
            return null;
        }

        $statusCode = $res->getStatusCode();

        try {
            $stringBody = $res->getBody()->getContents();
            $arrayBody = json_decode($stringBody, true);
        } catch (BaseException $exception) {
            $stringBody = "GET_BODY_ERROR: $exception";
            $arrayBody = [];
        }

        if ($statusCode !== 200) {
            $this->log->error(
                $errorInfo
                . "CODE=$statusCode\n"
                . "BODY=$stringBody\n"
            );
            return null;
        }

        return $arrayBody;
    }
}
