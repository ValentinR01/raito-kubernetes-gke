<?php

namespace App\Controller;

abstract class BaseController
{
    private string $templateFile = __DIR__ . '/../View/template.php';
    private string $viewsDir = __DIR__ . '/../View/API/';
    protected array $params;

    public function __construct(string $action, array $params = [])
    {
        $this->params = $params;

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