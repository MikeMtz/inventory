<?php

namespace App\Http\Controllers;

use App\Models\Inventory;

class InventoryController extends Controller
{
    public function index()
    {
        try {
            return (json_encode([
                'success' => true,
                'data' => Inventory::orderBy('name', 'ASC')->get()
            ]));

        }Catch (\Exception $e) {
            return json_encode([
                'success' => false,
                'error' => $e->getMessage(),
                'trace' => $e->getTrace(),
            ]);
        }
    }

    public function create() {
        $request = request()->all();

        try {

            $new = new Inventory();
            $new->name = $request['name'];
            $new->cost = $request['cost'];
            $new->iva = $request['iva'];
            $new->price = $request['price'];
            $new->save();

            return (json_encode([
                'success' => true,
                'data' => $new
            ]));

        }Catch (\Exception $e) {
            return json_encode([
                'success' => false,
                'error' => $e->getMessage(),
                'trace' => $e->getTrace(),
            ]);
        }
    }
}
