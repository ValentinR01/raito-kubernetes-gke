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
    public function executeAmbianceById ()
    {
        if ($this->HTTPRequest->isMethodAllowed('GET') && ($this->HTTPRequest->isUserAllowed()))
        {
            $id = $_GET['id'];
            $contentModel = new AmbianceModel(new PDOFactory());
            $ambiance = $contentModel->getAmbianceById($id);
            return $this->renderJSON(array(
                 $ambiance
            ));
        }
    }

}