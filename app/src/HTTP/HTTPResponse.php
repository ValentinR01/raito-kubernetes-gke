<?php
namespace App\HTTP;

class HTTPResponse
{
    public function addHeader($header): void
    {
        header($header);
    }

    public function redirect($location, int $code = 0, bool $replace = true)
    {
        header('Location: ' . $location, $replace, $code);
        exit;
    }

    public function unauthorized(array $messages): void
    {
        $this->addHeader('WWW-Authenticate: Basic realm="This area needs authentication"');
        $this->addHeader('HTTP/1.0 401 Unauthorized');
        exit(json_encode($messages, JSON_PRETTY_PRINT));
    }

    public function setCookie($name, $value = '', int $expire = 0)
    {
        $path = '/';
        $domain = '';
        $secure = false;
        $httpOnly = true;
        setcookie($name, $value, $expire, $path, $domain, $secure, $httpOnly);
    }

    public function setCacheHeader(int $seconds = 0): void
    {
        $timestamp = time() + $seconds;
        $date = new \DateTime();
        $date->setTimestamp($timestamp);

        $this->addHeader('Cache-Control: public, max-age=' . $seconds);
        $this->addHeader('Expires: ' . $date->format('D, j M Y H:i:s') . ' GMT');
    }
}