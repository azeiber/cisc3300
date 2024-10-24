<?php
    $dogName = array(
        "name" => "Rosie",
        "age" => 9,
        "breed" => "Retriver/pitbull mix", 
    );

    foreach ($dogName as $key => $value){
        echo "$key: $value <br>";
    }

    function dogYears(int $age, int $dogAge = 7): int{
        $dogYearsAge = $age * $dogAge;
        return $dogYearsAge; 
    }

$jsonData = json_encode($dogName);
echo $jsonData;