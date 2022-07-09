<?php

namespace App\Model;

use App\Factory\PDOFactory;
use PDO;


class ContentModel extends BaseModel
{

    public function getAllAmbiance(): array
    {
        $query = $this->pdo->query('SELECT * FROM '  . PDOFactory::DATABASE . '.content' . ' WHERE id_type = 2');
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAmbianceById(int $id): array
    {
        $query = $this->pdo->prepare('SELECT * FROM ' . PDOFactory::DATABASE . '.content' . ' ' . 'WHERE id = :id');
        $query->bindvalue(':id', $id, \PDO::PARAM_INT);
        $query->execute();
        $query-> setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, 'App\Entity\Content');
        return $query->fetch();
    }
}