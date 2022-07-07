<?php

require './vendor/autoload.php';
require_once 'CORS/Cors.php';

use App\Router\Router;


ob_start();
$router = new Router();
$router->getController();