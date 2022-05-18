<?php
namespace App\Entity;

use App\Hydrator\Hydrator;

abstract class BaseEntity
{
    use Hydrator;
    public function __construct(array $data = [])
    {
        $this->hydrate($data);
    }
}