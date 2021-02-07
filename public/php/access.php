<?php
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Origin: *');

include_once 'database.php';
include_once 'accesscode.php';

$database = new Database();
$db = $database->getConnection();

$access = new AccessCode($db);
$code = isset($_GET['code']) ? $_GET['code'] : die();

if (empty($code)) {
    echo json_encode(false);
    return;
}

$result = $access->getAccessCodes($code);
if ($result['code'] == $code){
    echo json_encode(true);
} else {
    echo json_encode(false);
}
return;