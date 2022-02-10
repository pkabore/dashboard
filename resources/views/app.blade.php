<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title inertia>{{ config('app.name', 'Admin') }}</title>
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">

  <style>
    * {
        scrollbar-width: thin;
        scrollbar-color: gray lightgray;
      }

      /* Works on Chrome, Edge, and Safari */
      *::-webkit-scrollbar {
        width: 8px;
      }

      *::-webkit-scrollbar-track {
        background: lightgray;
        /*border-radius: 4px;*/
      }

      *::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 4px;
      }
  </style>

  <!-- Scripts -->
  @routes
  <script src="{{ mix('js/app.js') }}" defer></script>
  <script src="{{ mix('js/vendor.js') }}" defer></script>
  <script src="{{ mix('js/manifest.js') }}" defer></script>
</head>

<body class="antialiased overflow-x-hidden overflow-y-scroll">
  @inertia
</body>

</html>