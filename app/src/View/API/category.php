<?php


$res[] = [
    'id' => $category->getId(),
    "name" => $category->getName(),
];

echo json_encode($category);
