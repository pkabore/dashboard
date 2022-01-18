<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Exports\ClientExport;
use Maatwebsite\Excel\Facades\Excel;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::paginate(12);

        return Inertia::render('Client/Index', [
            'clients' => $clients
        ]);
    }

    public function create(Request $request)
    {
        $message = session('message');
        $request->session()->put('message', '');
        if (!$message)
            $message = session('message');
        return Inertia::render('Client/Create', [ 'message' => $message]);
    }

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
        $request->session()->put('message', 'Client ajouté avec succès');
        return redirect(route('clients.create'));
    }

    public function edit(Request $request, Client $client)
    {
        $message = session('message');
        $request->session()->put('message', '');
        if (!$message)
            $message = session('message');

        return Inertia::render('Client/Edit', [
            'message' => $message,
            'client' => $client
        ]);
    }

    public function update(Request $request, Client $client)
    {
        $rules = [
            'fname' => 'required|string|min:3',
            'lname' => 'required|string|min:3',
            'email' => 'required|string|email|max:256',
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:256',
        ];

        if ($request->email != $client->email)
            $rules['email'] = 'required|string|email|unique:clients|max:256';
        if ($request->phone != $client->phone)
            $rules['phone'] = 'required|string|phone|unique:clients|max:256';

        $request->validate($rules);

        $client->fname = $request->fname;
        $client->lname = $request->lname;
        $client->email = $request->email;
        $client->phone = $request->phone;
        $client->address = $request->address;

        $client->save();

        $request->session()->put('message', 'Client édité avec succès');
        return redirect(route('clients.edit', $client->id));
    }

    public function search(Request $request)
    {
        $filters = $request->only(['search', 'sortByLname', 'sortByFname', 'sortByEmail', 'sortByPhone', 'sortByAddress']);
        $clients = Client::filter($filters)
                        ->paginate(12);

        return $clients;
    }

    public function destroy(Client $client)
    {
        $client->delete();
        return redirect(route('clients.index'));
    }

    public function export(){
        return Excel::download(new ClientExport, 'clients.xlsx');
    }
}
