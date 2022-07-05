<?php

namespace App\Controller;

use App\Entity\User;
use App\Factory\PDOFactory;
use App\HTTP\HTTPRequest;
use App\Model\UserModel;

class UserController extends BaseController
{
    /**
     * Login
     */
    public function executeLogin()
    {
        if (isset($_POST['CHECK'])) {
            //Récupération des valeurs
            $email = $_POST['EMAIL'];
            $password = $_POST['PASSWORD'];
            $userManager = new UserManager (new PDOFactory());
            $users = $userManager->getAllUsers();

            foreach ($users as $user){
                if ($email == $user->getEmail()){
                    if (md5($password) == $user->getPassword()){
                        session_destroy();
                        session_start();
                        $_SESSION['logged_in'] = true;
                        $_SESSION['USER_ID'] = $user->getId();
                        $_SESSION['admin'] = $user->getAdmin();
                        $_SESSION['LOGINMESSAGE'] = "Vous êtes maintenant connecté";

                        return header("Location: /");
                    }

                }
                else
                {
                    $_SESSION['ERRORMESSAGE'] = "Utilisateur introuvable.. Veuillez rentrer un email et un mot de passe valide.";
                    header("Location: /login");
                }

            }
        }
    }

    /**
     * Register
     */
    public function executeAddUser()
    {
        $response = new HTTPRequest();
        $response = $response->getBasicAuthentification();
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

            $userManager = new UserModel (new PDOFactory());
            $userExist = $userManager->getUserExistCheck($email);

            if ($userExist)
            {
                array_push($errors, "Adresse email déjà utilisée");
            }

            if (count($errors) == 0) {
                $securedPassword = hash('sha256', $password);
                $userManager = new UserModel(new PDOFactory());
                $newUser = new User();
                $newUser->setEmail($email);
                $newUser->setPassword($securedPassword);
                $newUser->setIdRole(1);
                $newUser->setNbCreation(0);
                $newUser->setDateInscription(date('Y-m-d H:i:s'));

                if ($userManager->addUser($newUser)) {
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

}
