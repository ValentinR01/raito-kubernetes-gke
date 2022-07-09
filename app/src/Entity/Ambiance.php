<?php 

namespace App\Entity;

class Ambiance extends BaseEntity {
    private int $id;
    private string $title;
    private int $id_category;
    private bool $status;
    private float $duration;
    private string $music_url;
    private string $image_url;
    private string $description;
    private int $author_id;

}
