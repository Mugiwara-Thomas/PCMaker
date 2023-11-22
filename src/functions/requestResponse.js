const requestResponse = async function request(nums){
    const response = await fetch(`https://pcmakerapi.onrender.com/api/recommend/${nums.join('&')}`);
    const jogos = await response.json();
    return jogos;
}

export default requestResponse;