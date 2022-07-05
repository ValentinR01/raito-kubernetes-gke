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
        // echo json_encode($_SERVER);
        if (!isset ($_SERVER['PHP_AUTH_USER']) && !isset ($_SERVER['PHP_AUTH_PW'])) {
            http_response_code(404);
            return ('Password and  email does not exist');
        }
        elseif (!isset ($_SERVER['PHP_AUTH_USER'])) {
            http_response_code(404);
             return('Email does not exist');
        }
        elseif (!isset ($_SERVER['PHP_AUTH_PW'])) {
            http_response_code(404);
            return('Password does not exist');
        }
        elseif (empty($_SERVER['PHP_AUTH_USER'])) {
            http_response_code(400);
            return('Email is empty');
        }
        elseif (empty($_SERVER['PHP_AUTH_PW'])) {
            http_response_code(400);
            return('Password is empty');
        }
        else return array(
            "email" => $_SERVER['PHP_AUTH_USER'],
            "password" =>$_SERVER['PHP_AUTH_PW'],
        );

    }

   

}