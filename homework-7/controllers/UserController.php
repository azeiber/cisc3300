<?php

namespace Controllers;

use models\UserModel;
include __DIR__ . '/../views/users.html';

class UserController {
    private $userModel;

    public function __construct() 
    {
        $this->userModel = new UserModel();
    }


    public function showHTMLPage() {
        if(file_exists('views/users.html'))
        {
        include 'views/users.html';
        }
    }

    public function getUsersAsJSON() {
        $userModel = new UserModel();
        header('Content-Type: application/json');
        echo json_encode($userModel->getAllUsers());
    }
}
?>
