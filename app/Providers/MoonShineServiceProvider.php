<?php

declare(strict_types=1);

namespace App\Providers;

use App\MoonShine\Resources\HotCategoryResource;
use App\MoonShine\Resources\HotelResource;
use App\MoonShine\Resources\InfoResource;
use App\MoonShine\Resources\MenuResource;
use App\MoonShine\Resources\ResortResource;
use App\MoonShine\Resources\ExcursionResource;
use App\MoonShine\Resources\TestResource;
use MoonShine\Providers\MoonShineApplicationServiceProvider;
use MoonShine\MoonShine;
use MoonShine\Menu\MenuGroup;
use MoonShine\Menu\MenuItem;
use MoonShine\Resources\MoonShineUserResource;
use MoonShine\Resources\MoonShineUserRoleResource;

class MoonShineServiceProvider extends MoonShineApplicationServiceProvider
{
    protected function resources(): array
    {
        return [];
    }

    protected function pages(): array
    {
        return [];
    }

    protected function menu(): array
    {
        return [
            MenuGroup::make(static fn() => __('moonshine::ui.resource.system'), [
               MenuItem::make(
                   static fn() => __('moonshine::ui.resource.admins_title'),
                   new MoonShineUserResource()
               ),
               MenuItem::make(
                   static fn() => __('moonshine::ui.resource.role_title'),
                   new MoonShineUserRoleResource()
               ),
            ]),

            MenuGroup::make(static fn() => __('Разделы'), [
                MenuItem::make(
                    static fn() => __('Категории'),
                    new HotCategoryResource()
                )->icon('heroicons.outline.flag'),

            ]),

            MenuGroup::make(static fn() => __('Материалы'), [

                MenuItem::make(
                    static fn() => __('Курорты'),
                    new ResortResource()
                )->icon('heroicons.sun'),

                MenuItem::make(
                    static fn() => __('Отели'),
                    new HotelResource()
                )->icon('heroicons.building-office'),

                MenuItem::make(
                    static fn() => __('Экскурсии'),
                    new ExcursionResource()
                )->icon('heroicons.ticket'),

                MenuItem::make(
                    static fn() => __('Полезное'),
                    new InfoResource()
                )->icon('heroicons.information-circle'),

                MenuItem::make(
                    static fn() => __('Test'),
                    new TestResource()
                )->icon('heroicons.information-circle'),



            ]),


            MenuGroup::make(static fn() => __('Меню'), [
                MenuItem::make(
                    static fn() => __('Меню стран'),
                    new MenuResource()
                )->icon('heroicons.bars-3'),

            ]),


        ];
    }

    /**
     * @return array{css: string, colors: array, darkColors: array}
     */
    protected function theme(): array
    {
        return [];
    }
}
