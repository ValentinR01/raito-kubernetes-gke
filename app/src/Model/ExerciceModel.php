<?php

namespace App\Model;

use App\Factory\PDOFactory;
use PDO;


class ExerciceModel extends BaseModel
{

    public function getAllExercice(): array
    {
        $query = $this->pdo->query('
        SELECT * FROM '  . PDOFactory::DATABASE . '.exercice WHERE status = 1');
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getExerciceById(int $id): array
    {
        $query = $this->pdo->prepare('SELECT * FROM ' . PDOFactory::DATABASE . '.exercice' . ' ' . 'WHERE id = :id');
        $query->bindvalue(':id', $id, \PDO::PARAM_INT);
        $query->execute();
        $query-> setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, 'App\Entity\Exercice');
        return $query->fetch();
    }
}