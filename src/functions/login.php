<?php
session_start();
require_once "src\functions\repositorio_user_class.php";
require_once "src\functions\user.class.php";
$registro_user = new RepositorioUserMySQL();

if(isset($_POST['Logar'])) {

    $user = $_POST['user'];
    $senha = $_POST['senha'];

    $listagem_user = $registro_user->verificarLogin($user);
    $id = $listagem_user[0];
    $usuario = $listagem_user[2];
    $controle = $listagem_user[3];

    if($user == $usuario and $senha == $controle) {
        $_SESSION['id'] = $id;
        header('Location:selectGame.jsx');
    } else {
        echo "<br> Usuario ou senha Incorreto, por favor tente novamente!";
    }
}

if(isset($_POST['Registrar'])) {
    $codigo = 0;
    $nome = $_POST['user2'];
    $email = $_POST['email2'];
    $senha = $_POST['senha2'];
    $userRecebido = new User($codigo, $nome, $email, $senha);
    $registro = $registro_user->verificarLogin($nome);
    if(!$registro) {
        $registro_user->cadastrarUser($userRecebido);
        echo "Cadastrado com sucesso";
    } else {
        echo "Usuário já cadastrado";

    }
    header('Location:login.jsx');
}

?>