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

    public function getHeader(){
        return $_SERVER;
    }

    public function getBasicAuthentification()
    {
        $credentials = array(
            "username" => $_SERVER['PHP_AUTH_USER'],
            "pwd" =>$_SERVER['PHP_AUTH_PW'],
        );
        return $credentials;
    }

   

}