<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Info;

use MoonShine\Decorations\Collapse;
use MoonShine\Decorations\Column;
use MoonShine\Decorations\Divider;
use MoonShine\Decorations\Grid;
use MoonShine\Decorations\Tab;
use MoonShine\Decorations\Tabs;
use MoonShine\Enums\ClickAction;
use MoonShine\Fields\Date;
use MoonShine\Fields\Image;
use MoonShine\Fields\Number;
use MoonShine\Fields\Relationships\BelongsTo;
use MoonShine\Fields\Slug;
use MoonShine\Fields\Switcher;
use MoonShine\Fields\Text;
use MoonShine\Fields\TinyMce;
use MoonShine\Handlers\ExportHandler;
use MoonShine\Handlers\ImportHandler;
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;

class InfoResource extends ModelResource
{
    protected string $model = Info::class;

    protected string $title = 'Infos';

    protected string $column = 'sorting';

    protected string $sortColumn = 'sorting';

    protected ?ClickAction $clickAction = ClickAction::EDIT;

    public function fields(): array
    {
        return [
            Block::make([


                ID::make()->sortable()
                    ->useOnImport()
                    ->showOnExport(),

                Text::make(__('Заголовок'), 'title')
                    ->required()
                    ->useOnImport()
                    ->showOnExport(),

                Text::make(__('Фото'), 'img')
                    ->hideOnIndex()
                    ->useOnImport()
                    ->showOnExport(),

                Slug::make(__('Алиас'), 'slug')
                    ->from('title')
                    ->unique()
                    ->useOnImport()
                    ->showOnExport(),

                Text::make(__('h_c_id'), 'hot_category_id')
                    ->useOnImport()
                    ->showOnExport(),

                TinyMce::make('Краткое описание', 'smalltext')->hideOnIndex()
                    ->useOnImport()
                    ->showOnExport(),

                Switcher::make('img', 'img')->hideOnForm(),
                Switcher::make('small', 'smalltext')->hideOnForm(),
                Switcher::make('text.', 'text')->hideOnForm(),
                Switcher::make('text2.', 'text2')->hideOnForm(),
                Switcher::make('text3', 'text3')->hideOnForm(),
                Switcher::make('desc', 'description')->hideOnForm(),
                Switcher::make('key', 'keywords')->hideOnForm(),
                Text::make('Мета тэг (title) ', 'metatitle')->hideOnIndex()
                    ->useOnImport()
                    ->showOnExport(),

                Text::make('Мета тэг (description) ', 'description')->hideOnIndex()
                    ->useOnImport()
                    ->showOnExport(),

                Text::make('Мета тэг (keywords) ', 'keywords')->hideOnIndex()
                    ->useOnImport()
                    ->showOnExport(),

                Switcher::make('Публикация', 'published')->default(1)->hideOnIndex(),

                TinyMce::make('Описание', 'text')
                    ->useOnImport()
                    ->showOnExport()
                    ->hideOnIndex(),

                TinyMce::make('Описание', 'text2')
                    ->useOnImport()
                    ->showOnExport()
                    ->hideOnIndex(),

                TinyMce::make('Описание', 'text3')
                    ->useOnImport()
                    ->showOnExport()
                    ->hideOnIndex()

            ]),


        ];
    }



    public function rules(Model $item): array
    {
        return [
            'metatitle' => 'max:1024',
            'description' => 'max:1024',
            'keywords' => 'max:1024',
        ];
    }


    public function import(): ?ImportHandler
    {
        return ImportHandler::make('Import');
    }

    public function export(): ?ExportHandler
    {
        return null;
    }

    public function getActiveActions(): array
    {
        return ['create', /*'view',*/ 'update', 'delete', 'massDelete'];
    }


    public function treeKey(): ?string
    {
        return null;
    }

    public function sortKey(): string
    {
        return 'sorting';
    }
}
