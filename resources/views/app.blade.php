<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title inertia>{{ config('app.name', 'Admin') }}</title>
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">

  @routes
  <script src="{{ mix('js/app.js') }}" defer></script>
  <script src="{{ mix('js/vendor.js') }}" defer></script>
  <script src="{{ mix('js/manifest.js') }}" defer></script>

  <style>

    @font-face{
      font-family: 'Ubuntu Mono';
      src:  url('/fonts/UbuntuMono-Regular.ttf'),
            url('/fonts/UbuntuMono-Italic.ttf');
      font-display: swap;
    }

    @font-face{
      font-family: 'Ubuntu';
      src:  url('/fonts/Ubuntu-Regular.ttf'),
            url('/fonts/Ubuntu-Bold.ttf');
      font-display: swap;
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: gray lightgray;
      }

      /* Works on Chrome, Edge, and Safari */
      *::-webkit-scrollbar {
        width: 6px;
        height: 4px;
      }

      *::-webkit-scrollbar-track {
        background: lightgray;
        /*border-radius: 4px;*/
      }

      *::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 3px;
      }
  </style>
</head>

<body class="antialiased font-sans overflow-x-hidden overflow-y-scroll bg-slate-200">
  @inertia
</body>

</html>