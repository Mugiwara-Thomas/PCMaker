<?php

class User {
    private $codigo;
    private $nome;
    private $login;
    private $senha;
    private $email;
    
    public function __construct($codigo,$nome,$login,$senha,$email) {
        $this->codigo=$codigo;
        $this->nome=$nome;
        $this->login=$login;
        $this->senha=$senha;
        $this->email=$email;        
    }
    
    function getCodigo() {
        return $this->codigo;
    }

    function getNome() {
        return $this->nome;
    }
    
    function getLogin(){
        return $this->login;
    }

    function getEmail(){
        return $this->email;
    }

    function getSenha() {
        return $this->senha;
    }

    function setCodigo($codigo) {
        $this->codigo = $codigo;
    }

    function setNome($nome) {
        $this->nome = $nome;
    }

    function setLogin($login){
        $this->login = $login;
    }
    
    function setEmail($email){
        $this->email = $email;
    }

    function setSenha($senha) {
        $this->senha = $senha;
    }

}
