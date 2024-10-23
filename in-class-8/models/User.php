<?php

namespace models;

class User {
    public function getAllUsers() {
        return [
            ['id' => 1, 'name' => 'Megan'],
            ['id' => 2, 'name' => 'Rosie'],
            ['id' => 3, 'name' => 'Bailey']
        ];
    }
}
