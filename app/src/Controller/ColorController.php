<?php

namespace App\Controller;


class ColorController extends BaseController
{
    /**
     * Color
     */
    public function executeColor()
    {
        if ($this->HTTPRequest->isMethodAllowed('POST')) {
            $response = $this->HTTPRequest->getColor();
            if (is_string($response)) {
                $response = str_replace("#", "0x", $response);
                $this->renderJSON($response);
                // Envoi rgb à led à ce niveau
                $this->HTTPRequest->sendColor($response);
                //$colorRGB = $this->hexToRgb($response);
                //$this->renderJSON($colorRGB);
            } else {
                //Récupération des valeurs
                $colorHexadecimal = $response['colorHexadecimal'];

                if (!$colorHexadecimal) {
                    http_response_code(404);
                    $this->renderJSON("Color not found");
                } else {
                    http_response_code(200);
                    $this->renderJSON("$colorHexadecimal");
                }
            }
        }
    }

//    function hexToRgb($hex, $alpha = false) {
//        $hex      = str_replace('#', '', $hex);
//        $length   = strlen($hex);
//        $rgb['r'] = hexdec($length == 6 ? substr($hex, 0, 2) : ($length == 3 ? str_repeat(substr($hex, 0, 1), 2) : 0));
//        $rgb['g'] = hexdec($length == 6 ? substr($hex, 2, 2) : ($length == 3 ? str_repeat(substr($hex, 1, 1), 2) : 0));
//        $rgb['b'] = hexdec($length == 6 ? substr($hex, 4, 2) : ($length == 3 ? str_repeat(substr($hex, 2, 1), 2) : 0));
//        if ( $alpha ) {
//            $rgb['a'] = $alpha;
//        }
//        return $rgb;
//    }
}