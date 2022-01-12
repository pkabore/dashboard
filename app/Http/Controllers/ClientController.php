<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clients = Client::paginate(15);

        return Inertia::render('Dashboard/Client/Index', [
            'clients' => $clients
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return Inertia::render('Dashboard/Client/Create', [ 'message' => '']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'fname' => 'required|string|min:3',
            'lname' => 'required|string|min:3',
            'email' => 'required|string|email|unique:clients|max:256',
            'phone' => 'required|string|unique:clients|max:20',
            'address' => 'required|string|max:256',
        ]);

        $c = new Client();

        $c->fname = $request->fname;
        $c->lname = $request->lname;
        $c->email = $request->email;
        $c->phone = $request->phone;
        $c->address = $request->address;

        $c->save();
        return Inertia::render('Dashboard/Client/Create', [
            'message' => 'Client ajouté avec succès',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Client $client)
    {
        return Inertia::render('Dashboard/Client/Edit', [
            'message' => '',
            'client' => $client
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
    {
        $request->validate([
            'fname' => 'required|string|min:3',
            'lname' => 'required|string|min:3',
            'email' => 'required|string|email|unique:clients|max:256',
            'phone' => 'required|string|unique:clients|max:20',
            'address' => 'required|string|max:256',
        ]);

        $client->fname = $request->fname;
        $client->lname = $request->lname;
        $client->email = $request->email;
        $client->phone = $request->phone;
        $client->address = $request->address;

        $client->save();
        return Inertia::render('Dashboard/Client/Edit', [
            'client' => $client,
            'message' => 'Client édité avec succès'
        ]);
    }


    /**
     * Search the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByLname', 'sortByFname', 'sortByEmail', 'sortByPhone', 'sortByAddress']);
        $clients = Client::filter($filters)
                        ->paginate(15);

        return $clients;
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        $client->delete();
        return redirect(route('clients.index'));
    }
}
