<?php

namespace App\Entity;

class User extends BaseEntity
{

    private string $email;
    private string $password;
    private int $id_role;
    private int $nb_creation;
    private string $date_inscription;
    private int $id;

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param string $password
     */
    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

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
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return int
     */
    public function getIdRole(): int
    {
        return $this->id_role;
    }

    /**
     * @param int $id_role
     */
    public function setIdRole(int $id_role): void
    {
        $this->id_role = $id_role;
    }

    /**
     * @return int
     */
    public function getNbCreation(): int
    {
        return $this->nb_creation;
    }

    /**
     * @param int $nb_creation
     */
    public function setNbCreation(int $nb_creation): void
    {
        $this->nb_creation = $nb_creation;
    }

    /**
     * @return string
     */
    public function getDateInscription(): string
    {
        return $this->date_inscription;
    }

    /**
     * @param string $date_inscription
     */
    public function setDateInscription(string $date_inscription): void
    {
        $this->date_inscription = $date_inscription;
    }
}
