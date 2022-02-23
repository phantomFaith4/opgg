require('dotenv').config();

const express  = require('express');
const {json} = require('express');

const axios = require('axios');


const app = express();
const key='RGAPI-91bc513d-6e82-41fd-a11e-c80a3b7fba0d'; 
app.use(json()); 

 
app.get('/summoner/:summonerName', async(req,res)=>{ 
        const {summonerName } = req.params;
        const summoner = await axios.get(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/vsagefxb?api_key=${key}`)
        const {id, profileIconId, summonerLevel, puuid, name} = summoner.data;
        const matchList = await axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${key}`)
        const leagueInfo = await axios.get(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${key}`)  
        
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

app.listen('8000',()=>{
    console.log("Server is active at port 8000");  
})