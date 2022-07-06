<?php 

namespace App\Entity;

class Content extends BaseEntity {
    private int $id;
    private string $title;
    private int $id_user;
    private int $id_user_role;
    private int $id_category;
    private int $id_type;
    private int $status;
    private int $duration_creation;
    private string $voice_creation;
    private int $rise_duration;
    private int $fall_duration;
    private int $hight_intensity; 
    private int $low_intensity; 
    private string $color;
    private string $music;
    private string $picture;
    private string $description;
    private float $note;
    private int $nb_note;


}