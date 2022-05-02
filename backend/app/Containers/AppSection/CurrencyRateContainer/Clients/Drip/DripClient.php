<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\Clients\Drip;

use App\Ship\Telegram\Log\TelegramLog;
use Exception as BaseException;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class DripClient
{
    private Client $client;
    private TelegramLog $log;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://api.drip.community',
        ]);
        $this->log = app(TelegramLog::class);
    }

    public function fetch(string $url): ?array
    {
        $method = 'GET';
        $classMethod = __METHOD__;
        $errorInfo = "Drip fetch error\n"
            . "$classMethod\n"
            . "METHOD=$method\n"
            . "URL=$url\n";

        try {
            $res = $this->client->request($method, $url);
        } catch (GuzzleException $exception) {
            $this->log->error($errorInfo . $exception);
            return null;
        }

        $statusCode = $res->getStatusCode();

        try {
            $bodyStr = $res->getBody()->getContents();
            $bodyArray = json_decode($bodyStr, true);
        } catch (BaseException $exception) {
            $bodyStr = "GET BODY ERROR: $exception";
            $bodyArray = [];
        }

        if ($statusCode !== 200) {
            $this->log->error(
                $errorInfo
                . "CODE=$statusCode\n"
                . "BODY=$bodyStr\n"
            );
        }

        return $bodyArray;
    }
}
