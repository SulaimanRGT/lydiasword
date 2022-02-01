<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    public function users()
    {
        return $this->belongsToMany( 'App\User', 'user_publication', 'publication_id');
    }

    public function publisher()
    {
        return $this->belongsTo(Publisher::class, 'publisher_id');
    }

    public function author()
    {
        return $this->belongsTo(Author::class, 'author_id');
    }

//    public function countpublication()
//    {
//        return $this->belongsToMany( 'App\Publication', 'user_publication', 'id');
//    }


}
