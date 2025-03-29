<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Undangan;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreUndanganRequest;
use App\Http\Requests\UpdateUndanganRequest;

class UndanganController extends Controller


{
    protected $undangan;
    public function __construct(Undangan $undangan)
    {
        $this->undangan = $undangan;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $title = "Rian Reva Wedding";
        $datas = $this->undangan::orderByDesc('created_at')->get();
        $csrf_token = csrf_token();
        return Inertia::render('Undangan', compact('title', 'csrf_token', 'datas'));
    }
    public function fetchComment()
    {
        $datas = $this->undangan::orderByDesc('created_at')->get();
        return response()->json(['comments' => $datas]);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUndanganRequest $request)
    {
        $datas = $request->validated();
        $datas['received_at'] = Carbon::now()->format("d M Y H:i:s");
        $this->undangan::create($datas);
       return response()->json(['message'=>'ok']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Undangan $undangan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Undangan $undangan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUndanganRequest $request, Undangan $undangan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Undangan $undangan)
    {
        //
    }
}
