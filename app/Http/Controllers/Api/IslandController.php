<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\IslandResource;
use App\Http\Requests\IslandRequest;
use App\Models\Island;
use Illuminate\Http\Request;

class IslandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return IslandResource::collection(Island::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(IslandRequest $request)
    {
        $island = Island::create($request->validated());

        return new IslandResource($island);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Island  $island
     * @return \Illuminate\Http\Response
     */
    public function show(Island $island)
    {
        return new IslandResource($island);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Island  $island
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Island $island)
    {
        $island->update($request->validated());

        return new IslandResource($island);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Island  $island
     * @return \Illuminate\Http\Response
     */
    public function destroy(Island $island)
    {
        $island->delete();

        return response()->noContent();
    }
}
