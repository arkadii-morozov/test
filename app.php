<?php
include_once('db.php');

$fields = ['name' => '', 'email' => ''];

if(count($_POST) > 0 ){
    $name = strip_tags(trim($_POST['name']));
    $email = strip_tags(trim($_POST['email']));
    if($name !== '' && $email !== ''){
        $fields['name'] = $name;
        $fields['email'] = $email;
        echo json_encode(getReviews($fields));
        //        echo serialize(getReviews($fields));
    } else{
        echo 'Поля пустые!';
    }
}

function getReviews(array $params ){
    $sql = "SELECT * FROM reviews WHERE name=:name AND email=:email";
    $res = dbQuery($sql, $params);
    return $res->fetchAll();
}
