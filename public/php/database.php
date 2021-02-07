<?php
class Database {
    private $host;
    private $database_name;
    private $username;
    private $password;

    public $conn;

    public function __construct() {
        $env = parse_ini_file(".env");
        $this->host = $env["DB_HOST"];
        $this->database_name = $env["DB_NAME"];
        $this->username = $env["DB_USERNAME"];
        $this->password = $env["DB_PASSWORD"];
    }

    public function getConnection() {
        $this->conn = null;
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Database could not be connected: " . $exception->getMessage();
        }
        return $this->conn;
    }
}