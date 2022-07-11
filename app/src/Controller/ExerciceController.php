<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Model\ExerciceModel;


class ExerciceController extends BaseController
{
    // All Exercices
    public function executeExerciceList()
    {
        if ($this->HTTPRequest->isMethodAllowed('GET') && ($this->HTTPRequest->isUserAllowed()))
        {
            $contentModel = new ExerciceModel(new PDOFactory());
            $exercice = $contentModel->getAllExercice();
            return $this->renderJSON($exercice);
        }
    }

    // Detailled view
    public function executeExerciceById (int $id = 1) {
        if ($this->HTTPRequest->isMethodAllowed('GET'))
        {
            $contentModel = new ExerciceModel(new PDOFactory());
            //$exercice = $contentModel->getExerciceById($id);
        }
    }

}