@extends('layouts.layout')
@section('title', ($seo_title)??null)
@section('description', ($seo_description)??null)
@section('keywords', ($seo_keywords)??null)
@section('content')
    <section class="good_summer"></section>
    <main>
        <div class="background_mobile">
        <section class="block z-index-20 pad_t16 pad_b16 ">
            @include('include.search.index_search')
        </section>
        <section class="block z-index-20 pad_t26 pad_b6 ">
            @include('include.quality.quality')
        </section>
        <section class="block z-index-20 pad_t16 pad_b14 ">
            <x-mobile_app.mobile_app/>
        </section>
        </div>
        <section class="z-index-20">
            @include('include.module.banner')
        </section>
        <section class="z-index-20 pad_t16 pad_b16 ">
            @include('include.module.hottours')
        </section>
         <section class="z-index-20 pad_t16 pad_b16 ">
            @include('include.module.popular')
        </section>
        <section class="z-index-20 pad_t16 pad_b16 ">
            @include('include.module.index_video')
        </section>
        <section class="z-index-20 pad_t16 pad_b16 ">
            @include('include.module.plane')
        </section>
        <section class="z-index-20 pad_t16 pad_b16 ">
            @include('include.module.popular_country')
        </section>
        <section class="z-index-20 pad_t16 pad_b16 ">
            @include('include.module.response')
        </section>
        <section class="z-index-20 pad_t16 pad_b16 ">
            @include('include.module.index_questions')
        </section>
        <section class="z-index-20 pad_t16  ">
            @include('include.module.index_news')
        </section>
        <section class="z-index-20 pad_t16  ">
            @include('include.module.index_text')
        </section>


    </main>
@endsection
