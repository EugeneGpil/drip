<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\UI\CLI\Commands;

use App\Containers\AppSection\CurrencyRateContainer\Actions\UpdateBnbRateAction;
use App\Containers\AppSection\CurrencyRateContainer\Clients\CoinGecko\CoinGeckoSirdar;
use App\Containers\AppSection\CurrencyRateContainer\Repositories\CurrencyRateRepository;
use App\Ship\Telegram\Log\TelegramLog;
use Illuminate\Console\Command;

class UpdateUsdToBnbRateCommand extends Command
{
    protected $signature = 'update-usd-to-bnb-rate';
    private UpdateBnbRateAction $action;

    public function __construct()
    {
        parent::__construct();

        $this->action = app(UpdateBnbRateAction::class);
    }

    public function handle(): void
    {
        $res = $this->action->run();

        $this->line($res ? 'SUCCESS!' : 'FAIL!');
    }


}
