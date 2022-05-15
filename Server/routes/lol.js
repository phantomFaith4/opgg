const router = require("express").Router();
const axios = require('axios');

const key='RGAPI-2499af3a-5b45-4ec8-a541-2d9ee858c6b5'; 


router.get('/summoner/:summonerName', async(req,res)=>{ 
    const summonerName = req.params.summonerName; 
    const summoner = await axios.get(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`);
    const {id, profileIconId, summonerLevel, puuid, name} = summoner.data;
    const matchList = await axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${key}`);
    const leagueInfo = await axios.get(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${key}`);  
    
    const arr = []; 
    for(i = 0; i < matchList.data.length; i++){
      const matchInfo = await axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchList.data[i]}?api_key=${key}`);
      arr.push(matchInfo.data);
    };

    const {tier,rank,wins,losses,queueType} = leagueInfo.data[1]
    ? leagueInfo.data[1]
    : leagueInfo.data[0];

    res.status(200).json({
      id,  
      profileIconId, 
      summonerLevel,
      puuid,
      name,
      tier,
      rank, 
      wins,
      losses, 
      queueType,
      arr,
    });
    
});

module.exports = router;