<?php declare(strict_types=1);

return [
    'token' => env('TELEGRAM_TOKEN'),
    'chat' => [
        'error' => (int)env('TELEGRAM_CHAT_ERROR'),
    ],
];
