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
        if (!isset ($_POST)) {
            http_response_code(404);
            return ("Fields 'colorHexadecimal' do not exist");
        }
        elseif (empty($_POST)) {
            http_response_code(400);
            return("'colorHexadecimal' is empty");
        }
        else return $_POST;
    }

    public function getHeader(){
        return $_SERVER;
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
        if (!isset ($_SERVER['PHP_AUTH_COLOR'])) {
            http_response_code(404);
            return ('Fields color does not exist');
        } elseif (empty($_SERVER['PHP_AUTH_COLOR'])) {
            http_response_code(400);
            return('Color is empty');
        } else return array(
            "colorHexadecimal" => $_SERVER['PHP_AUTH_COLOR'],
        );
    }



}