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
     * @return bool
     */
    public function isStatus(): bool
    {
        return $this->status;
    }

    /**
     * @param bool $status
     */
    public function setStatus(bool $status): void
    {
        $this->status = $status;
    }

    /**
     * @return float
     */
    public function getDuration(): float
    {
        return $this->duration;
    }

    /**
     * @param float $duration
     */
    public function setDuration(float $duration): void
    {
        $this->duration = $duration;
    }

    /**
     * @return float
     */
    public function getVoiceDuration(): float
    {
        return $this->voice_duration;
    }

    /**
     * @param float $voice_duration
     */
    public function setVoiceDuration(float $voice_duration): void
    {
        $this->voice_duration = $voice_duration;
    }

    /**
     * @return float
     */
    public function getRiseDuration(): float
    {
        return $this->rise_duration;
    }

    /**
     * @param float $rise_duration
     */
    public function setRiseDuration(float $rise_duration): void
    {
        $this->rise_duration = $rise_duration;
    }

    /**
     * @return float
     */
    public function getFallDuration(): float
    {
        return $this->fall_duration;
    }

    /**
     * @param float $fall_duration
     */
    public function setFallDuration(float $fall_duration): void
    {
        $this->fall_duration = $fall_duration;
    }

    /**
     * @return float
     */
    public function getHighIntensity(): float
    {
        return $this->high_intensity;
    }

    /**
     * @param float $high_intensity
     */
    public function setHighIntensity(float $high_intensity): void
    {
        $this->high_intensity = $high_intensity;
    }

    /**
     * @return float
     */
    public function getLowIntensity(): float
    {
        return $this->low_intensity;
    }

    /**
     * @param float $low_intensity
     */
    public function setLowIntensity(float $low_intensity): void
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
    public function getMusicUrl(): string
    {
        return $this->music_url;
    }

    /**
     * @param string $music_url
     */
    public function setMusicUrl(string $music_url): void
    {
        $this->music_url = $music_url;
    }

    /**
     * @return string
     */
    public function getImageUrl(): string
    {
        return $this->image_url;
    }

    /**
     * @param string $image_url
     */
    public function setImageUrl(string $image_url): void
    {
        $this->image_url = $image_url;
    }

    /**
     * @return float
     */
    public function getRating(): float
    {
        return $this->rating;
    }

    /**
     * @param float $rating
     */
    public function setRating(float $rating): void
    {
        $this->rating = $rating;
    }

    /**
     * @return int
     */
    public function getNbRating(): int
    {
        return $this->nb_rating;
    }

    /**
     * @param int $nb_rating
     */
    public function setNbRating(int $nb_rating): void
    {
        $this->nb_rating = $nb_rating;
    }

    /**
     * @return int
     */
    public function getAuthorId(): int
    {
        return $this->author_id;
    }

    /**
     * @param int $author_id
     */
    public function setAuthorId(int $author_id): void
    {
        $this->author_id = $author_id;
    }
}