<?php

namespace App\Controller;

class ErrorController extends BaseController
{
    public function executeError404()
    {
        http_response_code(404);
        $this->renderJSON("Mauvaise route");
    }
}