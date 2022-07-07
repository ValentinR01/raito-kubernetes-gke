<?php

namespace App\Interface;

use PDO;

interface ConnectionInterface
{
    public function getConnection(): PDO;
}