<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title inertia>{{ config('app.name', 'Admin') }}</title>

  <!-- Styles -->
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">

  <!-- Scripts -->
  @routes
  <script src="{{ mix('js/app.js') }}" defer></script>
  <script src="{{ mix('js/vendor.js') }}" defer></script>
  <script src="{{ mix('js/manifest.js') }}" defer></script>

  <style>
    *::-webkit-scrollbar {
    width: 7px;
  }

*::-webkit-scrollbar-track {
    background: rgb(179, 177, 177);
    border-radius: 7px;
}

*::-webkit-scrollbar-thumb {
    background: rgb(136, 136, 136);
    border-radius: 7px;
  }

*::-webkit-scrollbar-thumb:hover {
    background: rgb(100, 100, 100);
    border-radius: 7px;
  }

*::-webkit-scrollbar-thumb:active {
    background: rgb(68, 68, 68);
    border-radius: 7px;
  }
    @media(min-width: 768px) {
      body {
        max-width: calc(100vw - 7px);
      }
    }
  </style>
</head>

<body class="font-sans antialiased bg-gray-200 selection:bg-green-300">
  @inertia
</body>

</html>