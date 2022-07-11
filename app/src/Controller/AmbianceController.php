<?php

namespace App\Controller;

use App\Factory\PDOFactory;
use App\Model\AmbianceModel;


class AmbianceController extends BaseController
{
    // All Exercices & Ambiances
    public function executeAmbiance()
    {
        if ($this->HTTPRequest->isMethodAllowed('GET') && ($this->HTTPRequest->isUserAllowed()))
        {
            if ($_GET['id']) {
                $id = $_GET['id'];
                $contentModel = new AmbianceModel(new PDOFactory());
                $ambiance = $contentModel->getAmbianceById($id);
            } else {
                $contentModel = new AmbianceModel(new PDOFactory());
                $ambiance = $contentModel->getAllAmbiance();
            } return $this->renderJSON($ambiance);
        }
    }
}