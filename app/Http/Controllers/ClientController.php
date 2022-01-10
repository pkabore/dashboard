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
        $messages = session('messages');
        $request->session()->put('messages.clients.success', '');
        if(!$messages)
            $messages = session('messages');

        return Inertia::render('Dashboard/Client/Create', [
            'messages' => $messages
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->lname = strtoupper($request->lname);
        $request->fname = strtoupper($request->fname);
        $request->validate([
            'fname' => 'required|string|min:3',
            'lname' => 'required|string|min:3',
            'email' => 'required|string|email|max:256',
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:256',
        ]);

        $c = new Client();

        $c->fname = $request->fname;
        $c->lname = $request->lname;
        $c->email = $request->email;
        $c->phone = $request->phone;
        $c->address = $request->address;

        $c->save();
        $request->session()->put('messages.clients.success', 'Client ajouté avec succès');
        return redirect(route('clients.create'));
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
        $messages = session('messages');
        $request->session()->put('messages.clients.editSuccess', '');
        if(!$messages)
            $messages = session('messages');

        return Inertia::render('Dashboard/Client/Edit', [
            'messages' => $messages,
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
        $request->lname = strtoupper($request->lname);
        $request->fname = strtoupper($request->fname);
        $request->validate([
            'fname' => 'required|string|min:3',
            'lname' => 'required|string|min:3',
            'email' => 'required|string|email|max:256',
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:256',
        ]);

        $client->fname = $request->fname;
        $client->lname = $request->lname;
        $client->email = $request->email;
        $client->phone = $request->phone;
        $client->address = $request->address;

        $client->save();
        $request->session()->put('messages.clients.editSuccess', 'Client édité avec succès');
        return redirect(route('clients.edit', $client->id));
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
