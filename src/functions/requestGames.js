const requestJogos = async function request(){
    const response = await fetch("https://pcmakerapi.onrender.com/api/games");
    const jogos = await response.json();
    return jogos
}

export default requestJogos