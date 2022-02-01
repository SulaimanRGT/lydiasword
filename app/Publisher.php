<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publisher extends Model
{
    public function publication()
    {
        return $this->hasMany(Publication::class, 'publisher_id');
    }
}
