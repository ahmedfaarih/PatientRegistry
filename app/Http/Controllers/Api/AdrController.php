<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdrResource;
use App\Http\Resources\IslandResource;
use App\Models\Adr;
use Illuminate\Http\Request;

class AdrController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AdrResource::collection(Adr::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Adr  $adr
     * @return \Illuminate\Http\Response
     */
    public function show(Adr $adr)
    {
        return new AdrResource($adr);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Adr  $adr
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Adr $adr)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Adr  $adr
     * @return \Illuminate\Http\Response
     */
    public function destroy(Adr $adr)
    {
        //
    }
}
