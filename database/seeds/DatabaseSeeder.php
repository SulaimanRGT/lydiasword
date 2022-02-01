<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//        \App\Coupon::create([
//            'name' => 'DISCOUNT',
//            'code' =>'DISCOU123',
//            'type' =>'discount',
//            'value' => 30,
//            'description' => 'lot of text will go here'
//        ]);
        // $this->call(UsersTableSeeder::class);
        DB::table('users')->insert(array(
            0 =>
            array(
                'id' => 1,
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'contact' => '0776208587',
                'role' => 'admin',
                'image' => 'photos/avatar.png',
                'gender' => 'male',
                'status' => 1,
                'password' => Hash::make('admin')
            ),
            1 =>
                array(
                    'id' => 2,
                    'name' => 'customer',
                    'email' => 'customer@customer.com',
                    'contact' => '077874874',
                    'role' => 'customer',
                    'gender' => 'gender',
                    'status' => 1,
                    'image' => 'photos/avatar',
                    'password' => Hash::make('customer')
                )

        ));
    }
}
