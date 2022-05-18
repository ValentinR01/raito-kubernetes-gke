<?php

require_once 'headers.php';
require_once 'Factory/PDOFactory.php';
require_once 'Entity/Category.php';

$pdo = (new PDOFactory())->getPdo();

$query = $pdo->query('SELECT * FROM category');
$query->setFetchMode(PDO::FETCH_ASSOC);

$res = [];

foreach ($query->fetchAll() as $category) {
//    var_dump($category);
    $res[] = [
        'id' => $category['id'],
        "name" => $category['name'],
    ];
}

echo json_encode($res);