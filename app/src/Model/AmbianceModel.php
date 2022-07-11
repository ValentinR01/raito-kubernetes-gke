<?php

namespace App\Model;

use App\Factory\PDOFactory;
use PDO;


class AmbianceModel extends BaseModel
{
    public function getAllAmbiance(): array
    {
        $query = $this->pdo->query('
        SELECT * FROM '  . PDOFactory::DATABASE . '.ambiance WHERE status = 1');
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAmbianceById(int $id): array
    {
        $query = $this->pdo->prepare('SELECT * FROM ' . PDOFactory::DATABASE . '.ambiance' . ' ' . 'WHERE id = :id');
        $query->bindvalue(':id', $id, \PDO::PARAM_INT);
        $query->execute();
        $query-> setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, 'App\Entity\Ambiance');
        return $query->fetch();
    }
}