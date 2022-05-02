<?php declare(strict_types=1);

namespace App\Containers\AppSection\CurrencyRateContainer\UI\CLI\Commands;

use App\Containers\AppSection\CurrencyRateContainer\Actions\UpdateDripRateAction;
use Illuminate\Console\Command;

class UpdateUsdToDripRateCommand extends Command
{
    protected $signature = 'update-usd-to-drip-rate';
    private UpdateDripRateAction $action;

    public function __construct()
    {
        parent::__construct();

        $this->action = app(UpdateDripRateAction::class);
    }

    public function handle(): void
    {
        $res = $this->action->run();

        $this->line($res ? 'SUCCESS!' : 'FAIL!');
    }
}
