<?php
namespace App\HTTP;

class HTTPResponse
{
    // Adding custom header
    public function addHeader($header): void
    {
        header($header);
    }

    public function setCookie($name, $value = '', int $expire = 0)
    {
        $path = '/';
        $domain = '';
        $secure = false;
        $httpOnly = true;
        setcookie($name, $value, $expire, $path, $domain, $secure, $httpOnly);
    }

}