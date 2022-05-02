<?php declare(strict_types=1);

namespace App\Ship\Telegram\Client;

use Exception as BaseException;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Log;

class TelegramClient
{
    private Client $client;
    private string $botToken;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://api.telegram.org'
        ]);
        $this->botToken = config('telegram.token');
    }

    public function sendMessage(int $chatId, string $text): bool
    {
        $method = 'GET';
        $url = "/bot$this->botToken/sendMessage";
        $params = [
            'query' => [
                'chat_id' => $chatId,
                'text' => $text,
            ],
        ];
        $classMethod = __METHOD__;
        $paramsStr = json_encode($params);
        $errorInfo = "Telegram send message error: \n"
            . "$classMethod\n"
            . "METHOD=$method\n"
            . "URL=$url\n"
            . "PARAMS=$paramsStr\n";

        try {
            $res = $this->client->request($method, $url, $params);
        } catch (GuzzleException $exception) {
            Log::error($errorInfo . $exception);

            return false;
        }

        $statusCode = $res->getStatusCode();

        try {
            $bodyStr = $res->getBody()->getContents();
            $bodyArray = json_decode($bodyStr, true);
        } catch (BaseException $exception) {
            $bodyStr = "GET_BODY_ERROR: $exception";
            $bodyArray = [];
        }

        if (
            $statusCode !== 200
            || !isset($bodyArray['ok'])
            || $bodyArray['ok'] !== true
        ) {
            Log::error(
                $errorInfo
                . "STATUS_CODE=$statusCode\n"
                . "BODY=$bodyStr\n"
            );

            return false;
        }

        return true;
    }
}
