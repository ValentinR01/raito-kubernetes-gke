<?php

require './vendor/autoload.php';


use App\Controller\CategoryController;

require_once 'headers.php';
require_once 'Factory/PDOFactory.php';
require_once 'Entity/Category.php';
require_once 'Router/Router.php';



$router = new \App\Router\Router();
$router->getController();