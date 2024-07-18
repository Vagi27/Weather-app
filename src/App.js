import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import WeeklyWeather from './components/WeeklyWeather';

function App() {

  return (
    <div> 
      <Search/>
      <div className='flex'>
        <CurrentWeather/>
        <WeeklyWeather/>

      </div>
    </div>
  );
}

export default App;

/* 
- app component:
  - Search location
    - input box
    - dropdown suggestion box
    - some fixed locations(not ideally )
    - filtering of location in drop down as search continues
    - (Api call only when selected from drop down)
    - delay of some ms in making api call 
    - caching of searched locations
    - 
  - current weather
  - weekly forecast
*/