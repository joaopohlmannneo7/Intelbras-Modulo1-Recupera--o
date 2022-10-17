

export const gameOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
      'X-RapidAPI-Key': '2deb384b73msh2e19b7e734d003ep1f3daajsn31b111271b13',
    },
  };
export const fetchData = async(game_url, title) =>{

    const response = await fetch(game_url, title);
    const data = await response.json();

    return data;
};
