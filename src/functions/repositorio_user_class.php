<?php

require_once 'conexao.class.php';
require_once 'user.class.php';
require_once 'vendor/autoload.php';

interface IRepositorioUser{
    public function cadastrarUser($user);
    public function atualizarUser($user);
    public function buscarUser($user);
    public function removerUser($user);
    public function verificarID($id_user);
    public function verificarEmail($email);
    public function verificarLogin($login);
    public function loginuser($login, $senha);
    public function getlistaUser();
}
class RepositorioUserMySQL implements IRepositorioUser{
    private $conexao;
    //conexao
    public function __construct() {

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__); 
    $dotenv->load();

    $dbHost = $_ENV['DB_HOST'];
    $dbUsername = $_ENV['DB_USERNAME'];
    $dbPassword = $_ENV['DB_PASSWORD'];
    $dbName = $_ENV['DB_NAME'];

    $this->conexao = new conexao($dbHost, $dbUsername, $dbPassword, $dbName);
    if ($this->conexao->conectar() == false) {
        echo "Erro " . mysqli_error();
    }
        $this->conexao = new conexao("localhost", "root", "usbw", "helpix");
        if($this->conexao->conectar() == false){
            echo "Erro ".mysqli_error();
        }
    }
    //cadastra User
    public function cadastrarUser($user) {
        $codigo = $user->getCodigo();
        $nome = $user->getNome();
        $login = $user->getLogin();
        $email = $user->getemail();
        $senha = $user->getsenha();
        
        $sql = "INSERT INTO users (id,name,login,senha,email) VALUES ('$codigo','$nome','$login','$senha','$email')";
        
        $this->conexao->executarQuery($sql);
    }
    // remove um User da lista
    public function removerUser($codigo) {
        $sql = "DELETE FROM users WHERE id = '$codigo'";
        $this->conexao->executarQuery($sql);
    }
    // altera User da lista
    public function atualizarUser($user){
        $codigo = $user->getCodigo();
        $nome = $user->getNome();
        $email = $user->getemail();
        $senha = $user->getsenha();
        
        $sql = "UPDATE users SET id = '$codigo', nome = '$nome', email = '$email', senha = '$senha' WHERE id = '$codigo'";
        $this->conexao->executarQuery($sql);
    }
    
    // Busca um novo User a partir de seu codigo
    
    public function buscarUser($codigo) {
        $linha = $this->conexao->obtemPrimeiroRegistroQuery("SELECT * FROM users WHERE id = '$codigo'");
        return $linha;
    }

    public function verificarID($id_user) {
        $registro = $this->conexao->obtemRegistroDuplicado("SELECT * FROM users WHERE id = '$id_user'");
        return $registro;
    }

    public function getlistaUser() {
        $listagem_User = $this->conexao->executarQuery("SELECT * FROM users");
        return $listagem_User;
    }

    public function verificarEmail($email) {
        $registro = $this->conexao->obtemRegistroDuplicado("SELECT * FROM users WHERE email = '$email'");
        return $registro;
    }

    public function verificarLogin($login) {
        $registro = $this->conexao->obtemRegistroDuplicado("SELECT * FROM users WHERE login = '$login'");
        return $registro;
    }

    public function loginuser($login, $senha) {
        $registro = $this->conexao->obtemRegistroDuplicado("SELECT * FROM users WHERE login = '$login' AND senha = '$senha'");
        return $registro;
    }
}

$repositorio = new RepositorioUserMySQL();
?>
