<?php

session_start();
require './vendor/autoload.php';


use App\Controller\CategoryController;

require_once 'headers.php';
require_once 'Factory/PDOFactory.php';
require_once 'Entity/Category.php';

$myController = new CategoryController('Index');
$myController->executeIndex();
