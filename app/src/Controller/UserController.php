<?php

namespace App\Controller;
require_once('vendor/autoload.php');
use \Firebase\JWT\JWT;


use App\Entity\User;
use App\Factory\PDOFactory;
use App\Model\UserModel;
use Firebase\JWT\Key;


class UserController extends BaseController
{
    private $JWTKey = 'DJplHnT6&1qyTa22aYu*d';
    /**
     * Login
     */
    public function executeLogin()
    {
        $response = $this->HTTPRequest->getBasicAuthentification();
        if (is_string($response)) {
            echo($response);
        }
        else {
            //Récupération des valeurs
            $email = $response['email'];
            $password = $response['password'];

            // Check if user exist
            $userModel = new UserModel (new PDOFactory());
            $userExist = $userModel->getUserExistCheck($email);
            if (!$userExist)
            {
                http_response_code(404);
                $this->renderJSON("User not found");
            } else {
                $user = $userModel->getUserByEmail($email);
                if ($email == $user->getEmail()) {
                    if (hash('sha256', $password) == $user->getPassword()) {
                        http_response_code(200);
                        $this->renderJSON("User and password correct, you can log in");
                    }
                    else {
                        http_response_code(500);
                        $this->renderJSON("Password incorrect for the user");
                    }
                } else {
                    http_response_code(500);
                    $this->renderJSON("Can't get the email of the user");
                }
            }
        }
    }


    /**
     * Register
     */
    public function executeAddUser()
    {
        $ex = $this->generateJWT('v@gmail.com');
        $response = $this->HTTPRequest->getBasicAuthentification();
        if (is_string($response)) {
            echo($response);
        }
        else {
            //Récupération des valeurs
            $email = $response['email'];
            $password = $response['password'];
            $errors = [];

            //Check des valeurs reçues
            // if (filter_var($email, FILTER_VALIDATE_EMAIL) == TRUE) { array_push($errors, "Rentrez un email valide");

            // Check if user exist
            $userModel = new UserModel (new PDOFactory());
            $userExist = $userModel->getUserExistCheck($email);
            if ($userExist)
            {
                array_push($errors, "Adresse email déjà utilisée");
            }

            if (count($errors) == 0) {
                $securedPassword = hash('sha256', $password);
                $userModel = new UserModel(new PDOFactory());
                $newUser = new User();
                $newUser->setEmail($email);
                $newUser->setPassword($securedPassword);
                $newUser->setIdRole(1);
                $newUser->setNbCreation(0);
                $newUser->setDateInscription(date('Y-m-d H:i:s'));

                if ($userModel->addUser($newUser)) {
                    http_response_code(201);
                    $this->renderJSON("Votre compte a bien été créé. Veuillez vous connecter.");
                }
                else {
                    http_response_code(500);
                    $this->renderJSON("Erreur lors de la création du compte");
                }

            }
            else {
                http_response_code(500);
                $this->renderJSON($errors);
            }
        }

    }

    private function generateJWT(string $email)
    {
        $generatedDate = new \DateTime(); 
        $generatedDate->setTimezone(new \DateTimeZone('Europe/Paris'));

        $payload = [
            'email' => $email,
            'generateAt' =>  date_timestamp_get($generatedDate),
            'expiredAt' => strtotime('+7 day', date_timestamp_get($generatedDate))
        ];
        $jwt = JWT::encode($payload, $this->JWTKey, 'HS256');
        //$decoded = JWT::decode($jwt, new Key($this->JWTKey, 'HS256'));
        $this->isTokenValid($jwt);
        //$this->renderJSON($jwt);
    }

    public function isTokenValid(string $jwt)
    {
        try{
            $JWTDecode = JWT::decode($jwt, new Key($this->JWTKey, 'HS256'));
            $expiredDate = $JWTDecode->generateAt;
            $dateNow = new \DateTime(); 
            $dateNow->setTimezone(new \DateTimeZone('Europe/Paris'));

            
        //$x = JWT::decode($jwt, new Key($this->JWTKey, 'HS256'));
        //echo ($x->generateAt);
    }


}
