<?php

foreach ($query->fetchAll() as $category) {
//    var_dump($category);
    $res[] = [
        'id' => $category['id'],
        "name" => $category['name'],
    ];
}

echo json_encode($res);
