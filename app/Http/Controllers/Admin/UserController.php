<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
        $this->middleware('admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function index()
    {
        $users = User::all()->where('role','!=', 'customer');
        return view('admin.user.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->has('image')){
            $img = $request->file('image')->move('photos/users', uniqid().$request->file('image')->getClientOriginalName());
        }else {

            if ($request->gender == 'female') {
                $img = 'photos/femaleavatar.png';
            }else{
                $img = 'photos/avatar.png';
            }
        }
//dd($request->user());
        $user = new user();
        $user->name = $request->name;
        $user->role = 'admin';
        $user->email = $request->email;
        $user->contact = $request->contact;
        $user->gender = $request->gender;
        $user->image = $img;
        $user->password = Hash::make("lydia'sword1");
        $user->created_by = Auth::user()->id;

        $user->save();

        $user = User::where('email', $request->email)->first();

        $user->sendEmailVerificationNotification();
        return response()->json(['message' => 'User member added successfully👍', 'icon' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function show($id)
    {
        $user = User::find($id);
//        dd($user);
        return view('admin.user.show', compact('user'));;
//        view('admin.user.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($request->id);
        if ($request->has('image')){
            $img = $request->file('image')->move('photos/users', uniqid().$request->file('image')->getClientOriginalName());
        }else {
            $img = $user->image;
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->contact = $request->contact;
        $user->gender = $request->gender;
        $user->image = $img;
        $user->save();

        return response()->json(['message' => 'User member updated successfully👍', 'icon' => 'success']);

    }


    public function updateStatus(Request $request)
    {
            $user = User::find($request->id);
            $user->status = $request->input('status');
            //  dd($user);
            $user->save();

            $user = User::find($request->id);
            if ($user->status == 1){
                $message = 'You activate '.$user->name.' account successfully';
            }else{
                $message = 'You Deactivated '.$user->name.' account successfully';
            }

            return response()->json(['message' => $message.'👍', 'icon' => 'success']);
    }


    public function updateImage(Request $request)
    {

            $user = User::find($request->id);
            if ($user->image != 'photos/avatar.png' || $user->image != 'photos/femaleavatar.png'){
                File::delete($user->image);
            }
//            dd($user->image);
            if($request->hasFile('img')){
                // dd($request->hasFile('image'));
                $img = $request->file('img')->move('photos/users', uniqid().$request->file('img')->getClientOriginalName());
                $user->image = $img;

                $user->save();

                $notification = array(
                    'message' => $request->name.' Photo uploaded successfully!',
                    'alert-type' => 'success'
                );

                return redirect()->back()->with($notification);
            }else{
                $notification = array(
                    'message' => $request->name.' please select a photo!',
                    'alert-type' => 'warning'
                );
                return redirect()->back()->with($notification);
                // dd($image);
            }

    }


    public function changePwd(Request $request){

        $user = User::where('id', $request->id)->first();

        if (password_verify($request->currentPwd,  $user->password)){
//            return $request->currentPwd;
            $newpwd = $request->newPwd;
            $conNewpwd = $request->conNewpwd;


            if ($newpwd !== $conNewpwd){

                dd('password did not match');
                $notification = array(
                    'message' => 'The password does not match!',
                    'alert-type' => 'error'
                );

    //            return redirect(route('profile', $request->id));
                return redirect()->back()->with($notification);

            }else{

                $user->password = Hash::make($newpwd);
                $user->save();

                $notification = array(
                    'message' => 'You change your password successfully',
                    'alert-type' => 'success'
                );

                dd('your new password is '.$newpwd);
                return redirect()->back()->with($notification);

            }
        }else{
            $notification = array(
                'message' => 'You have entered an incorrect password',
                'alert-type' => 'success'
            );
            dd('You have entered an incorrect password');
            return redirect()->back()->with($notification);
        }

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $user = User::find($request->id);
        File::delete($user->image);
        $user->delete();
        return response()->json(['message' => 'Publication deleted successfully 👍', 'icon' => 'success']);
    }
}
