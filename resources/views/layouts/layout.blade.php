<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite([
    'resources/css/app.css',
    'resources/js/app.js',
    ])
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <title>@yield('title', config('datastorage.title'))</title>
    <meta name="description" content="@yield('description',  config('datastorage.description'))"/>
    <meta name="keywords" content="@yield('keywords',  config('datastorage.keywords'))"/>
</head>
<body>
<div class="wrapper">
    <x-message.message/>

    @include('include.header')
    <x-menu.menu/>


    @yield('content')
    {{--    @include('include.footer')
        @include('include.dashboardMobile')--}}

</div><!--.wrapper-->

@include('html.modals.top_order_call')
<script src="{{ asset('js/jquery-3.7.1.min.js') }}"></script>

</body>
</html>

