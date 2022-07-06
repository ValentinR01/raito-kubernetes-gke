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

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return int
     */
    public function getIdUser(): int
    {
        return $this->id_user;
    }

    /**
     * @param int $id_user
     */
    public function setIdUser(int $id_user): void
    {
        $this->id_user = $id_user;
    }

    /**
     * @return int
     */
    public function getIdUserRole(): int
    {
        return $this->id_user_role;
    }

    /**
     * @param int $id_user_role
     */
    public function setIdUserRole(int $id_user_role): void
    {
        $this->id_user_role = $id_user_role;
    }

    /**
     * @return int
     */
    public function getIdCategory(): int
    {
        return $this->id_category;
    }

    /**
     * @param int $id_category
     */
    public function setIdCategory(int $id_category): void
    {
        $this->id_category = $id_category;
    }

    /**
     * @return int
     */
    public function getIdType(): int
    {
        return $this->id_type;
    }

    /**
     * @param int $id_type
     */
    public function setIdType(int $id_type): void
    {
        $this->id_type = $id_type;
    }

    /**
     * @return int
     */
    public function getStatus(): int
    {
        return $this->status;
    }

    /**
     * @param int $status
     */
    public function setStatus(int $status): void
    {
        $this->status = $status;
    }

    /**
     * @return int
     */
    public function getDurationCreation(): int
    {
        return $this->duration_creation;
    }

    /**
     * @param int $duration_creation
     */
    public function setDurationCreation(int $duration_creation): void
    {
        $this->duration_creation = $duration_creation;
    }

    /**
     * @return string
     */
    public function getVoiceCreation(): string
    {
        return $this->voice_creation;
    }

    /**
     * @param string $voice_creation
     */
    public function setVoiceCreation(string $voice_creation): void
    {
        $this->voice_creation = $voice_creation;
    }

    /**
     * @return int
     */
    public function getRiseDuration(): int
    {
        return $this->rise_duration;
    }

    /**
     * @param int $rise_duration
     */
    public function setRiseDuration(int $rise_duration): void
    {
        $this->rise_duration = $rise_duration;
    }

    /**
     * @return int
     */
    public function getFallDuration(): int
    {
        return $this->fall_duration;
    }

    /**
     * @param int $fall_duration
     */
    public function setFallDuration(int $fall_duration): void
    {
        $this->fall_duration = $fall_duration;
    }

    /**
     * @return int
     */
    public function getHightIntensity(): int
    {
        return $this->hight_intensity;
    }

    /**
     * @param int $hight_intensity
     */
    public function setHightIntensity(int $hight_intensity): void
    {
        $this->hight_intensity = $hight_intensity;
    }

    /**
     * @return int
     */
    public function getLowIntensity(): int
    {
        return $this->low_intensity;
    }

    /**
     * @param int $low_intensity
     */
    public function setLowIntensity(int $low_intensity): void
    {
        $this->low_intensity = $low_intensity;
    }

    /**
     * @return string
     */
    public function getColor(): string
    {
        return $this->color;
    }

    /**
     * @param string $color
     */
    public function setColor(string $color): void
    {
        $this->color = $color;
    }

    /**
     * @return string
     */
    public function getMusic(): string
    {
        return $this->music;
    }

    /**
     * @param string $music
     */
    public function setMusic(string $music): void
    {
        $this->music = $music;
    }

    /**
     * @return string
     */
    public function getPicture(): string
    {
        return $this->picture;
    }

    /**
     * @param string $picture
     */
    public function setPicture(string $picture): void
    {
        $this->picture = $picture;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return float
     */
    public function getNote(): float
    {
        return $this->note;
    }

    /**
     * @param float $note
     */
    public function setNote(float $note): void
    {
        $this->note = $note;
    }

    /**
     * @return int
     */
    public function getNbNote(): int
    {
        return $this->nb_note;
    }

    /**
     * @param int $nb_note
     */
    public function setNbNote(int $nb_note): void
    {
        $this->nb_note = $nb_note;
    }
    private string $music;
    private string $picture;
    private string $description;
    private float $note;
    private int $nb_note;


}