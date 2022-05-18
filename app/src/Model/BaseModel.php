<?php

namespace App\Model;

use App\Interfaces\ConnectionInterface;

abstract class BaseModel {
    protected \PDO $pdo;
    public function __construct(ConnectionInterface $pdo)
    {
        $this->pdo = $pdo->getConnection();
    }
}