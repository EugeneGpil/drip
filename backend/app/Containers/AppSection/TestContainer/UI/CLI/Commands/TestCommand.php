<?php

namespace App\Containers\AppSection\TestContainer\UI\CLI\Commands;

use Illuminate\Console\Command;

class TestCommand extends Command
{
    protected $signature = 'test-command';

    public function handle(): void
    {
        $this->line('hi');
    }
}
