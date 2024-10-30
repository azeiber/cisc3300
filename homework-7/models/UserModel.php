<?php

namespace Models;

class UserModel {
    public function getAllUsers() {
        return [
            ['id' => 1, 'name' => 'Alexa'],
            ['id' => 2, 'name' => 'Megan'],
            ['id' => 3, 'name' => 'Rosie']
        ];
    }
}

?>
