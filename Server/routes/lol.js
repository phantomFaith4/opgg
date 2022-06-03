const router = require("express").Router();
const axios = require('axios'); 
require('dotenv').config();
 

router.get('/summoner/:summonerName/:platform/:region', async(req,res)=>{ 
  try{
    const summonerName = req.params.summonerName; 
    const platform = req.params.platform;
    const region = req.params.region;
    console.log("platform=>",platform);
    console.log("region=>",region);
    const summoner = await axios.get(`https://${platform}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.API_KEY}`);
    const {id, profileIconId, summonerLevel, puuid, name} = summoner.data;
    const matchList = await axios.get(`https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${process.env.API_KEY}`);
    const leagueInfo = await axios.get(`https://${platform}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.API_KEY}`);  
    
    const arr = []; 
    for(i = 0; i < matchList.data.length; i++){
      const matchInfo = await axios.get(`https://${region}.api.riotgames.com/lol/match/v5/matches/${matchList.data[i]}?api_key=${process.env.API_KEY}`);
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
  }catch(err){
    res.status(404).json(err);
  } 
});

module.exports = router;