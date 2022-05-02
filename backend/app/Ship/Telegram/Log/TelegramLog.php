<?php

namespace App\Ship\Telegram\Log;

use App\Ship\Telegram\Client\TelegramClient;

class TelegramLog
{
    private TelegramClient $client;
    private string $errorChatId;

    public function __construct()
    {
        $this->client = app(TelegramClient::class);
        $this->errorChatId = config('telegram.chat.error');
    }

    public function error(string $text): void
    {
        $this->client->sendMessage($this->errorChatId, $text);
    }
}
