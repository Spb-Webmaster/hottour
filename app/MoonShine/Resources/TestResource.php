<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Models\Test;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

use MoonShine\Fields\Text;
use MoonShine\Handlers\ExportHandler;
use MoonShine\Handlers\ImportHandler;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;


class TestResource extends ModelResource
{
    protected string $model = Test::class;

    protected string $title = 'Tests';

    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Text::make('Заголовок', 'title')->required()
                    ->useOnImport()
                    ->showOnExport(),
            ]),
        ];
    }

    public function rules(Model $item): array
    {
        return [];
    }

    public function import(): ?ImportHandler
    {
        return ImportHandler::make('Import');
    }

    public function export(): ?ExportHandler
    {
        return ExportHandler::make('Export');
    }
}
