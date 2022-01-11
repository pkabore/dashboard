<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'Admin') }}</title>

        <!-- Fonts -->
        {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"> --}}

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/nprogress.min.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/manifest.js') }}" defer></script>
        <script src="{{ mix('js/vendor.js') }}" defer></script>
        <script src="{{ mix('js/app.js') }}" defer></script>

        <style>
            /* width */
            ::-webkit-scrollbar {
              width: 13px;
              height: 13px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              border-radius: 100vh;
              background: #edf2f7;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: #cbd5e0;
              border-radius: 100vh;
              border: 3px solid #edf2f7;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: #a0aec0;
            }

            @media(min-width: 768px){
                body{
                    max-width: calc(100vw - 13px);
                }
            }
        </style>
    </head>
    <body class="font-sans antialiased bg-slate-200 selection:bg-green-300">
        @inertia
    </body>
</html>
