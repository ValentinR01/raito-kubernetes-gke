<?php
namespace APP\HTTP;

class HTTPRequest
{
    public function getMethod()
    {
        return $_SERVER['REQUEST_METHOD'];
    }

    public function GetRequestURI()
    {
        return $_SERVER['REQUEST_URI'];
    }
    
    public function getBody()
    {
        $entityBody = file_get_contents('php://input');
        return $entityBody;
    }
}