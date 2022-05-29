<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdrRequest;
use App\Http\Resources\AdrResource;
use App\Http\Resources\IslandResource;
use App\Http\Resources\PatientResource;
use App\Models\Adr;
use App\Models\Patient;
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
    public function store(AdrRequest $request)
    {
        $adress = Adr::create($request->validated());
        return new AdrResource($adress);
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
    public function update(AdrRequest $request, Adr $adr)
    {
        $adr->update($request->validated());
        return new AdrResource($adr);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Adr  $adr
     * @return \Illuminate\Http\Response
     */
    public function destroy(Adr $adr)
    {
        $adr->delete();
        return response()->noContent();
    }
}
