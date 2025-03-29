<!DOCTYPE html>
<html data-theme="light" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="Wedding Rian & Reva">
    <meta property="og:description" content="20 April 2025">
    <meta property="og:image" content="https://chiranjivi.site/assets/img-1.png">
    <meta property="og:url" content="{{ URL::current() }}">
    <meta property="og:type" content="website">
    <title inertia>{{ config('app.name', 'Undangan Digital') }}</title>

    <!-- Fonts -->

    <link rel="icon" type="image/x-icon" href="/icon.ico">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet" />

    <style>
        @font-face {
            font-family: amiko;
            src: url("/assets/Amiko-Regular.ttf");
        }

        @font-face {
            font-family: alegreasc;
            src: url("/assets/AlegreyaSC-Regular.ttf");
        }

        .amiko {
            font-family: amiko;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: 10%;
        }

        .alegreasc {
            font-family: alegreasc;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: 0%;
        }

        .color-select {
            --btn-color: #BE7F2C !important;
        }

        .text-color-1 {
            color: #D0892B !important;
        }

        .bg-color-1 {
            background-color: #E1E1E1 !important;
        }

        .bg-color-2 {
            background-color: #BE7F2C !important;
        }

        .border-color {
            border-color: #BE7F2C !important;
        }

        .border-maps {
            border-radius: 40px 0 40px 0;
        }

        #last-section {
            background-image: url("/assets/image-5.png");
            background-position: center;
            background-size: cover;
            filter: grayscale(1);
            /* opacity: 80%; */
        }

        .rotate {
            animation: rotate 3s infinite alternate;
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    </style>


    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead


</head>

<body class="font-sans antialiased">
    @inertia
</body>

<script defer>
    if (global === undefined) {
        var global = window;
    }
</script>
{{-- Toaster Alert --}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
<script>
    // Initialize toastr options
    toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "timeOut": "3000"
    };
</script>

</html>
