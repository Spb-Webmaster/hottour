<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\Hotel;

use MoonShine\ActionButtons\ActionButton;
use MoonShine\Decorations\Collapse;
use MoonShine\Decorations\Column;
use MoonShine\Decorations\Divider;
use MoonShine\Decorations\Grid;
use MoonShine\Decorations\Tab;
use MoonShine\Decorations\Tabs;
use MoonShine\Fields\Date;
use MoonShine\Fields\Image;
use MoonShine\Fields\Json;
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


class HotelResource extends ModelResource
{
    protected string $model = Hotel::class;

    protected string $title = 'Hotels';


    public function filters(): array
    {
        return [
            ID::make()
                ->useOnImport()
                ->showOnExport(),

            Text::make('Title', 'title')
                ->useOnImport()
                ->showOnExport(),
           Text::make('ID', 'slug')
               ->useOnImport()
               ->showOnExport()
        ];
    }


    protected string $column = 'title';

    protected string $sortColumn = 'sorting';


    /**
     * @return //array, выводим teaser
     */

    public function indexFields(): array
    {
        return [
            ID::make()
                ->sortable(),

            Image::make(__('Изображение'), 'img')
                ->disk(config('moonshine.disk', 'moonshine'))
                ->dir('category')
                ->allowedExtensions(['jpg', 'png', 'jpeg', 'gif', 'svg']),

            Text::make(__('Заголовок'), 'title')
                ->required()
                ->useOnImport()
                ->showOnExport(),
            Slug::make(__('Алиас'), 'slug')
                ->from('title')
                ->hint('url адрес, обязательное поле')
                ->unique()
                ->useOnImport()
                ->showOnExport(),

            Switcher::make('Публикация', 'published')->updateOnPreview(),
            Switcher::make('Desc', 'description'),
            Switcher::make('Key', 'keywords'),


        ];
    }

    /**
     * @return //array, выводим full
     */
    public function formFields(): array
    {
        return [
            Block::make([
                Tabs::make([

                    Tab::make(__('Общие настройки'), [
                        Grid::make([
                            Column::make([

                                ID::make()
                                    ->sortable()
                                    ->useOnImport()
                                    ->showOnExport(),
                                Collapse::make('Заголовок/Алиас', [
                                    Text::make('Заголовок', 'title')
                                        ->required()
                                        ->useOnImport()
                                        ->showOnExport(),
                                    Slug::make('Алиас', 'slug')
                                        ->from('title')->unique()
                                        ->useOnImport()
                                        ->showOnExport()
                                ]),


                                Text::make(__('Подзаголовок'), 'subtitle'),
                                Image::make(__('Изображение'), 'img')
                                    ->disk(config('moonshine.disk', 'moonshine'))
                                    ->dir('category')
                                    ->allowedExtensions(['jpg', 'png', 'jpeg', 'gif', 'svg'])
                                    ->removable(),

                                Column::make([
                                    TinyMce::make('Краткое описание', 'smalltext')
                                        ->useOnImport()
                                        ->showOnExport()
                                ])


                            ])
                                ->columnSpan(6),
                            Column::make([

                                Collapse::make('Метотеги', [
                                    Text::make('Мета тэг (title) ', 'metatitle'),
                                    Text::make('Мета тэг (description) ', 'description'),
                                    Text::make('Мета тэг (keywords) ', 'keywords'),
                                    Switcher::make('Публикация', 'published')->default(1),

                                ]),
                                Collapse::make('Вложенность', [
                                    BelongsTo::make('Категория', 'parent', resource: new HotCategoryResource())->nullable()->searchable(),

                                ]),


                            ])
                                ->columnSpan(6)

                        ]),
                        Divider::make(),

                        Column::make([
                            TinyMce::make('Описание', 'text')
                        ])
                            ->columnSpan(12),
                        Divider::make('Дополнительное изображение на страницу'),

                        Image::make(__('Изображение'), 'pageimg1')
                            ->disk(config('moonshine.disk', 'moonshine'))
                            ->dir('category')
                            ->allowedExtensions(['jpg', 'png', 'jpeg', 'gif', 'svg'])
                            ->removable()
                            ->hint('Растягивается на 100% ширины'),

                        Divider::make(),

                        Column::make([
                            TinyMce::make('Дополнительное описание', 'text2')
                        ])
                            ->columnSpan(12),

                        Image::make(__('Изображение'), 'pageimg2')
                            ->disk(config('moonshine.disk', 'moonshine'))
                            ->dir('category')
                            ->allowedExtensions(['jpg', 'png', 'jpeg', 'gif', 'svg'])
                            ->removable()
                            ->hint('Растягивается на 100% ширины'),

                        Divider::make(),

                        Column::make([
                            TinyMce::make('Дополнительное описание', 'text3')
                        ])
                            ->columnSpan(12),
                    ]),


                    Tab::make(__('Дополнительно'), [




                    ]),
                ]),


            ]),
        ];


    }




    public function rules(Model $item): array
    {
        return [
                          'metatitle' => 'max:255',
                           'description' => 'max:255',
                           'keywords' => 'max:512',
        ];
    }

    public function getActiveActions(): array
    {
        return ['create', /*'view',*/ 'update', 'delete', 'massDelete'];
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
