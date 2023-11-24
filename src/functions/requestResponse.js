const requestResponse = async function request(nums){
    const response = await fetch(`https://pcmakerapi.onrender.com/api/recommend/${nums.join('&')}`);
    const requisitos = await response.json();
    return requisitos;
}

export default requestResponse;