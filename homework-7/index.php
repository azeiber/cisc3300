<?php
require_once 'controllers/UserController.php';
require_once 'models/usermodel.php';

use controllers\UserController;

$controller = new UserController();

if ($_SERVER['REQUEST_URI'] === '/index.php/users' || $_SERVER['REQUEST_METHOD'] === 'GET') {
    $controller->getUsersAsJSON();
} else {
    $controller->showHTMLPage();
}
?>
