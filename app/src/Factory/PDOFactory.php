<?php

namespace App\Factory;
use App\Interface\ConnectionInterface;
use Exception;
use PDO;

class PDOFactory implements ConnectionInterface
{
    public PDO $pdo;

    private static string $dsn = 'mysql:host=db';
    private static string $username = 'root';
    private static string $password = 'password';
    const DATABASE = 'Raito';

    public static function getMysqlConnection(): PDO
    {
        try {
            $db = new PDO(self::$dsn, self::$username, self::$password);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch (Exception $e){
            echo 'Erreur : ' . $e->getMessage();
        }
        return $db;
    }

    public function getConnection(): PDO {
        return self::getMysqlConnection();
    }

    /*    public function __construct()
    {
        $this->pdo = new PDO('mysql:host=db;dbname=Raito', 'root', 'password');
    }

    /**
     * @return PDO
     */
//    public function getPdo(): PDO
//    {
//        return $this->pdo;
//    }
}