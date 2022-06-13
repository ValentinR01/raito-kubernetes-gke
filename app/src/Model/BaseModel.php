<?php

namespace App\Model;

use App\Interface\ConnectionInterface;
use PDO;

abstract class BaseModel {
    protected PDO $pdo;
    public function __construct(ConnectionInterface $pdo)
    {
        $this->pdo = $pdo->getConnection();
    }
}