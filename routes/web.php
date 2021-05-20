<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Monitor');
});

Route::get('/btc-ke-idr', function () {
    return inertia('KonversiIDR');
});

Route::get('/idr-ke-btc', function () {
    return inertia('KonversiBTC');
});
