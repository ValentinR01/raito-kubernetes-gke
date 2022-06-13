<?php

namespace App\Manager;

use App\Factory\PDOFactory;
use App\Entity\Category;
use App\Model\BaseModel;


class CategoryModel extends BaseModel
{
    public function getAllCategory(): array
    {
        $query = $this->pdo->query('SELECT * FROM  category');
        $query->execute();
        return $query->fetchAll(\PDO::FETCH_CLASS,'App\Entity\Category');
    }
}