<?php

namespace Controllers;

use models\UserModel;

class UserController {
    private $userModel;

    public function getHTMLPage() {
        $userModel = new UserModel();
    }

    public function showHTMLPage() {
        include 'views/users.html';
    }

    public function getUsersAsJSON() {
        header('Content-Type: application/json');
        echo json_encode($userModel->getAllUsers());
    }
}
?>
