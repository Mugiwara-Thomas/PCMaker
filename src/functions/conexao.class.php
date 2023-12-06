<?php

class conexao {
    private $host;
    private $usuario;
    private $senha;
    private $banco;
    private $conexao;
    
    function __construct($host,$usuario,$senha,$banco) {
        $this->host=$host;
        $this->usuario=$usuario;
        $this->senha=$senha;
        $this->banco=$banco;
    }
    
    function conectar(){
        $this->conexao = mysqli_connect(
                $this->host,
                $this->usuario,
                $this->senha,
                $this->banco);
    
        if(mysqli_connect_errno($this->conexao)){
            return false;
        }
        else
        {
            mysqli_query($this->conexao, "SET NAMES 'utf-8';");
            return true;
        }
    }
    
    function executarQuery($sql) {
        return mysqli_query($this->conexao, $sql);
    }
    
    function obtemPrimeiroRegistroQuery($query){
        $linhas = $this->executarQuery($query);
        return mysqli_fetch_array($linhas);
    }
    
    function obtemRegistroDuplicado($query){
        $linhas = $this->executarQuery($query);
        return mysqli_fetch_row($linhas);
    }
}
?>