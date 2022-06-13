<?php

use App\Factory\PDOFactory;

require_once 'headers.php';
require_once 'Factory/PDOFactory.php';
require_once 'Entity/Category.php';
require_once 'Controller/CategoryController.php';

$myController = new \App\Controller\CategoryController();
$myController->executeIndex();
