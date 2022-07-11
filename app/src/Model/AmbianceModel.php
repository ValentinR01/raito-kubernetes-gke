<?php

namespace App\Model;

use App\Entity\Ambiance;
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

    public function getAmbianceById(int $id)
    {
        $query = $this->pdo->prepare('SELECT * FROM ' . PDOFactory::DATABASE . '.ambiance WHERE id=?');
        $query->bindvalue(':id', $id, \PDO::PARAM_INT);
        $query->execute([$id]);
        $query-> setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, 'App\Entity\Ambiance');
        $result =  $query->fetchAll(PDO::FETCH_ASSOC);
        if (count($result) == 1) {
            return $result[0];
        } elseif (count($result) > 1) {
            http_response_code(500);
            echo json_encode("There is multiple result for the same id", JSON_PRETTY_PRINT);
            return false;
        } else {
            return false;
        }
    }
}