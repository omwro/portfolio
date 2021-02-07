<?php
class AccessCode {
    private $con;
    private $db_table = "access";

    public function __construct($db){
        $this->con = $db;
    }

    public function getAccessCodes($code){
        $query = "SELECT code FROM ".$this->db_table." WHERE code = :code";
        $statement = $this->con->prepare($query);
        $statement->bindParam(':code', $code);
        $statement->execute();
        return $statement->fetch(PDO::FETCH_ASSOC);
    }
}