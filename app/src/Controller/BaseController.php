<?php

namespace App\Controller;
use App\HTTP\HTTPRequest;
use App\HTTP\HTTPResponse;

abstract class BaseController
{
    private string $templateFile = __DIR__ . '/../View/template.php';
    private string $viewsDir = __DIR__ . '/../View/API/';
    protected array $params;
    protected $HTTPRequest;
    protected $HTTPResponse;

    public function __construct(string $action, array $params = [])
    {
        $this->params = $params;
        $this->HTTPRequest = new HTTPRequest();
        $this->HTTPResponse = new HTTPResponse();

        $method = 'execute' . ucfirst($action);
        if (is_callable([$this, $method])) {
            $this->$method();
        }
    }

    public function render(string $template, array $arguments)
    {
        $view = $this->viewsDir . $template;

        foreach ($arguments as $key => $value) {
            ${$key} = $value;
        }


        ob_start();
        require $view;
        $content = ob_get_clean();
        require $this->templateFile;
        exit;

    }

    public function renderJSON($content)
    {
        //$this->HTTPResponse->addHeader('Content-Type: application/json');
        echo json_encode($content, JSON_PRETTY_PRINT);
    }
}