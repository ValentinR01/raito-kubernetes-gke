<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Model\AmbianceModel;


class AmbianceController extends BaseController
{
    // All Exercices & Ambiances
    public function executeAmbianceList()
    {
        if ($this->HTTPRequest->isMethodAllowed('GET') && ($this->HTTPRequest->isUserAllowed()))
        {
            $contentModel = new AmbianceModel(new PDOFactory());
            $ambiance = $contentModel->getAllAmbiance();
            return $this->renderJSON($ambiance);
        }
    }


    // Detailled view
    public function executeExerciceById (int $id = 1) {
        if ($this->HTTPRequest->isMethodAllowed('GET'))
        {
            $contentModel = new AmbianceModel(new PDOFactory());
            //$exercice = $contentModel->getExerciceById($id);
        }
    }

}