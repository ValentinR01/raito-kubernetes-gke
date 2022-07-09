<?php 

namespace App\Entity;

class Exercice extends BaseEntity {
    private int $id;
    private string $title;
    private bool $status;
    private float $duration;
    private float $voice_duration;
    private float $rise_duration;
    private float $fall_duration;
    private float $high_intensity;
    private float $low_intensity;
    private string $color;
    private string $music_url;
    private string $image_url;
    private float $rating;
    private int $nb_rating;
    private int $author_id;
}