<?php
namespace APP\HTTP;

use Firebase\JWT\Key;
use \Firebase\JWT\JWT;

class HTTPRequest
{
    public function isMethodAllowed($expectedMethod) : string|bool
    {
        $usedMethod = $_SERVER['REQUEST_METHOD'];
        if ($expectedMethod != $usedMethod) {
            http_response_code(405);
            echo('Method Not Allowed : yous send : ' . $usedMethod . ' expected method : ' . $expectedMethod);
            return false;
        } else {
            return $usedMethod;
        }
    }

    public function GetRequestURI()
    {
        return $_SERVER['REQUEST_URI'];
    }
    
    public function getBody()
    {
        if (!isset ($_POST)) {
            http_response_code(404);
            return ("Fields 'colorHexadecimal' do not exist");
        }
        elseif (empty($_POST)) {
            http_response_code(400);
            echo (file_get_contents('php://input'));
            $x = json_decode(file_get_contents('php://input'));
            echo $x->colorHexadecimal;
            return("'colorHexadecimal' is empty");
        }
        else return $_POST;
    }

    public function getHeader(){
        return $_SERVER;
    }

    public function isTokenValid(string $jwt): bool
    {
        $jwt = substr($jwt, 7);
        $key = 'DJplHnT6&1qyTa22aYu*d';
        try {
            // Decode and Analyse
            $JWTDecode = JWT::decode($jwt, new Key($key, 'HS256'));
            $expiredDate = $JWTDecode->expiredAt;
            $dateNow = new \DateTime();
            $dateNow->setTimezone(new \DateTimeZone('Europe/Paris'));
            $dateNow = date_timestamp_get($dateNow);

            // Check if it still valid
            if ($expiredDate > $dateNow)
            {
                return True;
            }
            else 
            { 
                return False;
            }
        }
        catch (\Exception $e) {
            return False;
        }
    }


    public function getJWTAuthentification() {
        $jwt = $_SERVER['HTTP_AUTHORIZATION'];
        $isMyTokenValid = $this->isTokenValid($jwt);
        
        
        if (!isset($jwt) or $jwt == '') {
            http_response_code(401);
            echo json_encode(array(
                'message' => 'A token is required'
            ));
            return false;
        }
        else if (!$isMyTokenValid){
            http_response_code(401);
            echo json_encode(array(
                'message' => 'Your token is not valid'
            ));
            return false;
        }
        else return true;
    }
    


    public function getBasicAuthentification()
    {
        // echo json_encode($_SERVER, JSON_PRETTY_PRINT);
        if (!isset ($_SERVER['PHP_AUTH_USER']) && !isset ($_SERVER['PHP_AUTH_PW'])) {
            http_response_code(404);
            return ('Fields password and email do not exist');
        }
        elseif (!isset ($_SERVER['PHP_AUTH_USER'])) {
            http_response_code(404);
             return('Field email does not exist');
        }
        elseif (!isset ($_SERVER['PHP_AUTH_PW'])) {
            http_response_code(404);
            return('Field password does not exist');
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

    public function getColor()
    {
        // echo json_encode($_SERVER, JSON_PRETTY_PRINT);
        if (!isset ($_SERVER['PHP_AUTH_COLOR'])) 
        {
            http_response_code(404);
            return ('Fields color does not exist');
        } 
        elseif (empty($_SERVER['PHP_AUTH_COLOR'])) 
        {
            http_response_code(400);
            return('Color is empty');
        } 
        else 
        return array(
            "colorHexadecimal" => $_SERVER['PHP_AUTH_COLOR'],
        );
    }



}