import './App.css';
import ChampionList from './pages/championList/ChampionList';
import Topbar from './components/topbar/Topbar';
import ChampionProfile from './pages/championProfile/ChampionProfile';
import Home from './pages/home/Home';
import UserProfile from './pages/userProfile/UserProfile';
import Leaderboard from './pages/leaderboard/Leaderborad';
import ErrorPage from './pages/errorPage/ErrorPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 

function App() {
  return ( 
    <div className="App"> 
      <BrowserRouter>
      <Topbar />    
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/champions" element={<ChampionList />} />
          <Route path="/champion/:championId" element={<ChampionProfile />} />  
          <Route path="/summoner/:summonerName/:platform/:region" element={<UserProfile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<ErrorPage />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
