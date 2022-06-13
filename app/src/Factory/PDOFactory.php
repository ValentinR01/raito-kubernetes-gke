<?php

namespace App\Factory;
use App\Interface\ConnectionInterface;
use PDO;

class PDOFactory implements ConnectionInterface
{
    public PDO $pdo;

    public function __construct()
    {
        $this->pdo = new PDO('mysql:host=db;dbname=Raito', 'root', 'password');
    }

    /**
     * @return PDO
     */
    public function getPdo(): PDO
    {
        return $this->pdo;
    }
}